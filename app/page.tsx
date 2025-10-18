"use client"
import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import LanguagesUsed from "@/components/trusted-by"
import Projects from "@/components/projects-preview"
import StatsSection from "@/components/stats-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    // Add structured data for homepage
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Tactiqe - Open Source Community',
      url: 'https://tactiqe.in',
      description: 'Join Tactiqe, India\'s premier open source community where students and developers collaborate on real projects through tactical learning and strategic action.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://tactiqe.in/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      },
      mainEntity: {
        '@type': 'Organization',
        name: 'Tactiqe',
        slogan: 'Where Ideas Meet Execution Through Collaborative Learning',
        description: 'Open source community fostering innovation through collaborative project development and tactical learning approaches.'
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LanguagesUsed />
      <Features />
      <StatsSection />
      <Projects />
      <CTA />
      <Footer />
    </main>
  )
}
