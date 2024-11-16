import { z } from "zod";

export const contactFormSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(50, { message: "Name must be less than 50 characters." })
        // Prevent HTML/script injection
        .regex(/^[a-zA-Z\s-']+$/, {
            message: "Name can only contain letters, spaces, hyphens and apostrophes.",
        }),
    email: z
        .string()
        .email({ message: "Please enter a valid email address." })
        .min(5, { message: "Email must be at least 5 characters." })
        .max(100, { message: "Email must be less than 100 characters." })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
            message: "Please enter a valid email address.",
        }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." })
        .max(15, { message: "Phone number must be less than 15 digits." })
        // Allow only numbers, spaces, parentheses, hyphens, and plus sign
        .regex(/^[0-9\s()+.-]+$/, {
            message: "Please enter a valid phone number.",
        }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(1500, { message: "Message must be less than 1500 characters." })
        .transform((str: string) => str.replace(/<[^>]*>/g, '')),

    honeypot: z.string().max(0).optional(),
    timestamp: z.string().optional(),
});

export type contactFormType = z.infer<typeof contactFormSchema>;