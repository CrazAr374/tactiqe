import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

// Sanitize HTML content
function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

export async function POST(request: NextRequest) {
  try {
    // Check if required environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email service not configured' },
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

    // Sanitize inputs for HTML output
    const sanitizedName = sanitizeHtml(name.trim())
    const sanitizedEmail = sanitizeHtml(email.trim())
    const sanitizedSubject = sanitizeHtml(subject.trim())
    const sanitizedMessage = sanitizeHtml(message.trim()).replace(/\n/g, '<br>')

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'atharva.rahate374@gmail.com',
      subject: `Contact Form: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #333; border-bottom: 2px solid #f2c94c; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #6c757d;">${sanitizedMessage}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #0066cc;">
              <strong>Reply to:</strong> ${sanitizedEmail}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}