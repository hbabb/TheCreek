'use client'

import React from 'react'
// import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'

// Validation schema with security measures
const formSchema = z.object({
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
    .max(1000, { message: "Message must be less than 1000 characters." })
    // Basic XSS prevention
    .transform(str => str.replace(/<[^>]*>/g, '')),
})

type ContactFormValues = z.infer<typeof formSchema>


export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    // const [submitError, setSubmitError] = useState<string | null>(null)
    const { toast } = useToast()
  
    const form = useForm<ContactFormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
      },
    })
  
    async function onSubmit(data: ContactFormValues) {
      try {
        setIsSubmitting(true)
        // setSubmitError(null)
  
        // Add a hidden timestamp to help prevent automated submissions
        const submission = {
          ...data,
          timestamp: new Date().toISOString(),
        }
  
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission),
        })
  
        if (!response.ok) {
          throw new Error('Failed to submit form')
        }

        // Show success toast
        toast({
            title: "Message Sent Successfully! 🎉",
            description: "Thank you for reaching out. We'll get back to you Soon.",
            className: "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800",
        })
  
        // Reset form on success
        form.reset()
        // You might want to show a success message here
        
      } catch (error) {
        // setSubmitError('Failed to send message. Please try again later.')

        // Show error toast
        toast({
            variant: "destructive",
            title: "Uh Oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again later.",
            action: (
                <ToastAction altText="Try again" onClick={() => form.handleSubmit(onSubmit)}>
                    Try again
                </ToastAction>
            ),
        })

        console.error('Form submission error:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  
  return (
<div className='min-h-screen flex flex-col bg-fixed w-full bg-sky-background bg-cover bg-center bg-no-repeat'>
            <Header />
            <main className='flex flex-col justify-center items-center w-full my-auto p-4'>
                <div className='relative w-full max-w-2xl mx-auto'>
                    {/* Frosted glass container */}
                    <div className='absolute inset-0 -z-10 bg-gray-400/20 backdrop-blur-xl rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300'/>
                    
                    <div className='backdrop-blur-sm bg-white/10 rounded-2xl border border-gray-200/20 shadow-xl overflow-hidden'>
                        <div className='p-8'>
                            <h2 className='text-2xl font-josefinSans font-semibold text-creek-blue dark:text-creek-white mb-6 text-center'>
                                Send us a Message
                            </h2>
                            
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} 
                                    className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-creek-blue dark:text-creek-white">
                                                    Full Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="John Doe" 
                                                        {...field}
                                                        className="bg-white/30 dark:bg-gray-800/30 border-gray-200/30 focus:border-blue-400 transition-colors" 
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
                                                <FormLabel className="text-creek-blue dark:text-creek-white">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="email"
                                                        placeholder="you@example.com"
                                                        {...field}
                                                        className="bg-white/30 dark:bg-gray-800/30 border-gray-200/30 focus:border-blue-400 transition-colors"
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
                                                <FormLabel className="text-creek-blue dark:text-creek-white">
                                                    Phone Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="tel"
                                                        placeholder="+1 (555) 000-0000"
                                                        {...field}
                                                        className="bg-white/30 dark:bg-gray-800/30 border-gray-200/30 focus:border-blue-400 transition-colors"
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
                                                <FormLabel className="text-creek-blue dark:text-creek-white">
                                                    Message
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea 
                                                        placeholder="Your message here..."
                                                        {...field}
                                                        className="min-h-[120px] bg-white/30 dark:bg-gray-800/30 border-gray-200/30 focus:border-blue-400 transition-colors"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* {submitError && (
                                        <p className="text-sm font-medium text-red-500">{submitError}</p>
                                    )} */}

                                    <Button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-creek-blue hover:bg-creek-blue/90 text-white transition-colors"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </main>
            <Toaster />
        </div>
  )
}
