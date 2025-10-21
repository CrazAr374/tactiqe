import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/analytics"
import "./globals.css"
import "../styles/optimized.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
  preload: true
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: "Tactiqe - Open Source Community | Where Ideas Meet Execution Through Collaborative Learning",
  description: "Join Tactiqe, India's premier open source community for students and developers. Build real projects, collaborate with innovators, and transform ideas into reality. Strategic action through tactical learning at Tactiqe.in",
  keywords: [
    "Tactiqe",
    "open source community",
    "tactic",
    "tactical learning",
    "student community",
    "collaborative projects",
    "developer community",
    "innovation platform",
    "project collaboration",
    "learning community",
    "open source projects",
    "student developers",
    "tech community India",
    "programming community",
    "software development",
    "team collaboration",
    "project-based learning",
    "real-world projects",
    "mentorship platform",
    "coding community",
    "hackathon community",
    "startup community",
    "tech innovation",
    "collaborative learning",
    "peer learning",
    "skill development",
    "professional development",
    "career growth",
    "networking platform"
  ],
  authors: [{ name: "Atharva Rahate", url: "https://tactiqe.in" }],
  creator: "Tactiqe Community",
  publisher: "Tactiqe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tactiqe.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tactiqe - Open Source Community | Strategic Action Through Collaborative Learning",
    description: "Join India's leading open source community where students and developers collaborate on real projects. Transform your ideas into reality through tactical learning and strategic action.",
    url: 'https://tactiqe.in',
    siteName: 'Tactiqe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tactiqe - Open Source Community for Collaborative Learning',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tactiqe - Open Source Community | Where Ideas Meet Execution',
    description: 'Join India\'s premier open source community. Build real projects, collaborate with innovators, transform ideas into reality through tactical learning.',
    images: ['/twitter-image.jpg'],
    creator: '@tactiqe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
        color: '#F2C94C'
      }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tactiqe',
    alternateName: 'Tactiqe Open Source Community',
    url: 'https://tactiqe.in',
    logo: 'https://tactiqe.in/logo.png',
    description: 'Open source community where students and developers collaborate on real projects through tactical learning and strategic action.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Atharva Rahate',
      email: 'atharva.rahate374@gmail.com'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8149812710',
      contactType: 'customer service',
      email: 'atharva.rahate374@gmail.com'
    },
    sameAs: [
      'https://github.com/tactiqe',
      'https://linkedin.com/company/tactiqe',
      'https://twitter.com/tactiqe'
    ],
    keywords: 'open source community, tactical learning, collaborative projects, student developers, innovation platform, project-based learning',
    slogan: 'Where Ideas Meet Execution Through Collaborative Learning'
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://tactiqe.in" />
        <meta name="theme-color" content="#f2c94c" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="google-site-verification" content="hkjnEPg1WJwLVd-MG7uzBdJS5d9H5zZcBzbT1THJfnc" />

        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional favicon fallbacks */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
