// Security utilities for the application

export const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
} as const

// Rate limiting configuration
export const RATE_LIMITS = {
  contact: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
  },
  general: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
} as const

// Input validation schemas
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s\-'\.]+$/,
  },
  email: {
    maxLength: 254,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  subject: {
    minLength: 5,
    maxLength: 200,
  },
  message: {
    minLength: 10,
    maxLength: 2000,
  },
} as const

// Sanitization functions
export function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

// Content Security Policy
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://vercel.live'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:', 'https:'],
  'connect-src': ["'self'", 'https://api.emailjs.com', 'https://vercel.live'],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
} as const

export function generateCSP(): string {
  return Object.entries(CSP_DIRECTIVES)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; ')
}

// Validation helper
export function validateContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Name validation
  if (!data.name || data.name.length < VALIDATION_RULES.name.minLength) {
    errors.push(`Name must be at least ${VALIDATION_RULES.name.minLength} characters`)
  }
  if (data.name && data.name.length > VALIDATION_RULES.name.maxLength) {
    errors.push(`Name must be less than ${VALIDATION_RULES.name.maxLength} characters`)
  }
  if (data.name && !VALIDATION_RULES.name.pattern.test(data.name)) {
    errors.push('Name contains invalid characters')
  }

  // Email validation
  if (!data.email || !VALIDATION_RULES.email.pattern.test(data.email)) {
    errors.push('Please provide a valid email address')
  }
  if (data.email && data.email.length > VALIDATION_RULES.email.maxLength) {
    errors.push('Email address is too long')
  }

  // Subject validation
  if (!data.subject || data.subject.length < VALIDATION_RULES.subject.minLength) {
    errors.push(`Subject must be at least ${VALIDATION_RULES.subject.minLength} characters`)
  }
  if (data.subject && data.subject.length > VALIDATION_RULES.subject.maxLength) {
    errors.push(`Subject must be less than ${VALIDATION_RULES.subject.maxLength} characters`)
  }

  // Message validation
  if (!data.message || data.message.length < VALIDATION_RULES.message.minLength) {
    errors.push(`Message must be at least ${VALIDATION_RULES.message.minLength} characters`)
  }
  if (data.message && data.message.length > VALIDATION_RULES.message.maxLength) {
    errors.push(`Message must be less than ${VALIDATION_RULES.message.maxLength} characters`)
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}