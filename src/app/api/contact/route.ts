// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting map
const ipRequestMap = new Map<string, { count: number; timestamp: number }>()

// Security constants
const MAX_REQUESTS = 5 // Maximum requests per IP
const WINDOW_MS = 3600000 // Time window in milliseconds (1 hour)

// Reuse the same validation schema from the client
const formSchema = z.object({
  fullName: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Z\s-']+$/),
  email: z
    .string()
    .email()
    .min(5)
    .max(100)
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  phone: z
    .string()
    .min(10)
    .max(15)
    .regex(/^[0-9\s()+.-]+$/),
  message: z
    .string()
    .min(10)
    .max(1000)
    .transform(str => str.replace(/<[^>]*>/g, '')),
  timestamp: z.string().datetime(),
})

export async function POST(request: Request) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    const now = Date.now()
    const ipData = ipRequestMap.get(ip)
    
    if (ipData) {
      // Reset count if outside window
      if (now - ipData.timestamp > WINDOW_MS) {
        ipRequestMap.set(ip, { count: 1, timestamp: now })
      } else if (ipData.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        )
      } else {
        ipRequestMap.set(ip, { 
          count: ipData.count + 1, 
          timestamp: ipData.timestamp 
        })
      }
    } else {
      ipRequestMap.set(ip, { count: 1, timestamp: now })
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = formSchema.parse(body)

    // Send email using Resend
    await resend.emails.send({
      from: 'Your Contact Form <onboarding@resend.dev>',
      to: 'info@heath-babb.tech', // Replace with your email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        <p><strong>Timestamp:</strong> ${validatedData.timestamp}</p>
        <p><strong>IP Address:</strong> ${ip}</p>
      `,
    })

    return NextResponse.json({ 
      message: 'Form submitted successfully' 
    })

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
}