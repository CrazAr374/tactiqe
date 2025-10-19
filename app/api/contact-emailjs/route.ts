import { NextRequest, NextResponse } from 'next/server'

// Input validation function
function validateInput(data: any) {
  const { name, email, subject, message } = data

  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
    return { valid: false, error: 'Name must be between 2 and 100 characters' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || typeof email !== 'string' || !emailRegex.test(email) || email.length > 254) {
    return { valid: false, error: 'Please provide a valid email address' }
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 5 || subject.length > 200) {
    return { valid: false, error: 'Subject must be between 5 and 200 characters' }
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 2000) {
    return { valid: false, error: 'Message must be between 10 and 2000 characters' }
  }

  return { valid: true }
}

export async function POST(request: NextRequest) {
  try {
    // Check if required environment variables are set
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      return NextResponse.json(
        { error: 'EmailJS service not configured' },
        { status: 503 }
      )
    }

    const body = await request.json()
    
    // Validate input
    const validation = validateInput(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = body

    // Using EmailJS API directly
    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name.trim(),
          from_email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          to_email: 'atharva.rahate374@gmail.com',
          submitted_at: new Date().toLocaleString(),
        },
      }),
    })

    if (emailJSResponse.ok) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } else {
      const errorData = await emailJSResponse.text()
      console.error('EmailJS API error:', errorData)
      throw new Error('EmailJS API failed')
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}