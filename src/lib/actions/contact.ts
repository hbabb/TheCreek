'use server'

import { Resend } from 'resend'
import { actionClient } from "@/lib/safe-action"
import { contactFormSchema } from "@/lib/schema/contact"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactForm = actionClient
    .schema(contactFormSchema)
    .action(async () => {
        try {
            const message = await resend.emails.send({
                from: 'no-reply@motlowcreekministries.com',
                to: process.env.CONTACT_EMAIL!,
                subject: 'New Contact Form Submission',
                text: 'Contact form message'
            })
            return {
                data: message, // Ensure this is returned as part of the data key
            };
        } catch (error) {
            console.error(error);
            return {
                serverError: "Something went wrong while sending the email", // Return the error in serverError
            };
        }
    });
