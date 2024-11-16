'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactFormType, contactFormSchema } from "@/lib/schema/contact";
import { useContactStore } from "@/store/contact";
import { sendContactForm } from "@/lib/actions/contact";

export function ContactForm() {
    const { toast } = useToast();
    const { isSubmitting, setSubmitting, resetForm } = useContactStore();

    const form = useForm<contactFormType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            message: "",
            honeypot: "",
            timestamp: Date.now().toString(),
        },
    });

    async function onSubmit(data: contactFormType) {
        try {
            setSubmitting(true);
            const result = await sendContactForm(data);

            // Check if 'result' contains 'data' or 'serverError'
            if (result?.data) {
                toast({
                    title: "Message sent successfully! 🎉",
                    description: "Thank you for reaching out. We'll get back to you soon.",
                    className: "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800",
                });
                form.reset();
                resetForm();
            } else if (result?.serverError) {
                toast({
                    variant: "destructive",
                    title: "Something went wrong! 🚨",
                    description: result.serverError,
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "Something went wrong! 🚨",
                description: "Please try again later.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field */}
          <input type="text" className="hidden" {...form.register("honeypot")} />
          
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input 
                    type="text"
                    placeholder="Enter your full name"
                    {...field} 
                    className="bg-gray-800/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number" 
                    {...field} 
                    className="bg-gray-800/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="Enter your email address"
                    {...field} 
                    className="bg-gray-800/30" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Send me a message..."
                    rows={10}
                    {...field} 
                    className="resize-y bg-gray-800/30" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="text-creek-white w-full bg-creek-blue hover:bg-lightHouse-blue/90"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    )
  };

