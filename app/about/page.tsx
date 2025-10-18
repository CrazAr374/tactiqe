"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TeamCarousel from "@/components/team-carousel"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            About <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tactiqe</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto lg:mx-0">
            Tactiqe is not just another learning platform. It's a live company simulation where students don't just
            learn.... they collaborate, fail, iterate, and build something worth showcasing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We bridge the gap between learning and doing. Tactiqe creates a collaborative space where aspiring
              developers, designers, and innovators work together to build real, end-to-end projects that replicate the structure and discipline of an actual company environment.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              The name "Tactiqe" comes from the word tactic, symbolizing strategic action. Every project, every
              discussion, and every deployment is intentional and results-oriented.
            </p>
          </div>

          <div className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 hover:bg-secondary/40 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Tactiqe?</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Hands-on learning through real projects",
                "Professional team environment",
                "Leadership and mentorship",
                "Open-source innovation platform",
                "Community-driven development",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start group">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 lg:p-12 mb-16 sm:mb-20 lg:mb-24 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
            The Three Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Discuss", desc: "Brainstorm, identify problems, define objectives" },
              { title: "Develop", desc: "Collaborate to execute ideas and build solutions" },
              { title: "Deploy", desc: "Publish projects and gain professional exposure" },
            ].map((pillar, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
            Meet Our Team
          </h2>
          <TeamCarousel />
        </div>

        {/* Additional sections for better content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Our Values</h3>
            <div className="space-y-4">
              {[
                { title: "Excellence", desc: "We strive for quality in everything we build" },
                { title: "Collaboration", desc: "Together we achieve more than alone" },
                { title: "Innovation", desc: "We embrace new ideas and technologies" },
                { title: "Learning", desc: "Continuous growth is at our core" },
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">{value.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Ready to transform your ideas into reality? Join hundreds of students already building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all text-sm font-medium">
                Get Started
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-secondary hover:scale-105 transition-all text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
