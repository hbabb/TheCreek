'use server';

import { actionClient } from "@/lib/safe-action";
import { db } from "@/db/index";
import { pastorMessages } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

// Get the latest message
export const getLatestPastorMessage = actionClient
    .schema(z.void())
    .action(async () => {
        const message = await db
            .select()
            .from(pastorMessages)
            .where(eq(pastorMessages.status, "published"))
            .orderBy(desc(pastorMessages.publishedAt))
            .limit(1);

            return message[0];
    });

// Get all messages
export const getAllPublishedMessages = actionClient
    .schema(z.void())
    .action(async () => {
        const messages = await db
            .select()
            .from(pastorMessages)
            .where(eq(pastorMessages.status, "published"))
            .orderBy(desc(pastorMessages.publishedAt))

        return messages;
    });