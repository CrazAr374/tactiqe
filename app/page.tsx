"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import LanguagesUsed from "@/components/trusted-by"
import Projects from "@/components/projects-preview"
import StatsSection from "@/components/stats-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
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
