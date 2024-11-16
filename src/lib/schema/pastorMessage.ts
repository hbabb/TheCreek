import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { pastorMessages } from "@/db/schema";
import { z } from "zod";

// Define the metadata schema
const metadataSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  scriptureReferences: z.array(z.string()).optional(),
  theme: z.string().optional(),
  featuredImage: z.string().url("Invalid image URL").optional(),
  tags: z.array(z.string()).optional()
});

export const insertPastorMessageSchema = createInsertSchema(pastorMessages, {
  title: (schema) => schema.title.min(1, "Title is required"),
  content: (schema) => schema.content.min(250, "Message must be at least 250 characters"),
  status: (schema) => schema.status.default("draft").refine(
    (val) => ["draft", "published"].includes(val),
    "Status must be either 'draft' or 'published'"
  ),
  metadata: () => metadataSchema
});

export const selectPastorMessageSchema = createSelectSchema(pastorMessages);

export const updatePastorMessageSchema = insertPastorMessageSchema.partial();

export type InsertPastorMessage = z.infer<typeof insertPastorMessageSchema>;
export type SelectPastorMessage = z.infer<typeof selectPastorMessageSchema>;
export type UpdatePastorMessage = z.infer<typeof updatePastorMessageSchema>;