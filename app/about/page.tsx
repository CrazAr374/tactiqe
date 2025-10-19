"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TeamCarousel from "@/components/team-carousel"
import { CheckCircle } from "lucide-react"

export default function About() {
  useEffect(() => {
    // SEO metadata for about page
    document.title = "About Tactiqe - Open Source Community | Strategic Action Through Collaborative Learning"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Tactiqe, India\'s premier open source community. Discover our mission to bridge learning and doing through collaborative projects, tactical approaches, and strategic action in software development.')
    }

    // Add structured data for about page
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Tactiqe - Open Source Community',
      description: 'Tactiqe is an open source community that bridges the gap between learning and doing through collaborative projects and tactical learning approaches.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Tactiqe',
        foundingDate: '2024',
        description: 'Open source community fostering innovation through collaborative project development, tactical learning, and strategic action.',
        mission: 'To bridge the gap between learning and doing through collaborative projects that replicate real company environments.',
        values: ['Excellence', 'Collaboration', 'Innovation', 'Learning'],
        founder: {
          '@type': 'Person',
          name: 'Atharva Rahate',
          jobTitle: 'Founder & Lead Developer'
        },
        employee: [
          {
            '@type': 'Person',
            name: 'Atharva Rahate',
            jobTitle: 'Founder & Lead Developer',
            email: 'atharva.rahate374@gmail.com',
            sameAs: ['https://linkedin.com/in/atharvarahate', 'https://github.com/atharvarahate']
          },
          {
            '@type': 'Person',
            name: 'Rajas Patil',
            jobTitle: 'Core Developer',
            email: 'patilrajas1234@gmail.com',
            sameAs: ['https://www.linkedin.com/in/rajas-patil-6800a332b', 'https://github.com/rajaspatil']
          },
          {
            '@type': 'Person',
            name: 'Dhananjay Suryavanshi',
            jobTitle: 'Backend Developer',
            sameAs: ['https://www.linkedin.com/in/dhananjay-suryavanshi-049299332', 'https://github.com/dhananjaysuryavanshi']
          },
          {
            '@type': 'Person',
            name: 'Khushbu Mankare',
            jobTitle: 'Frontend Developer',
            email: 'khushbumankare1@gmail.com',
            sameAs: ['https://www.linkedin.com/in/khushbu-mankare-652014312', 'https://github.com/khushbumankare']
          },
          {
            '@type': 'Person',
            name: 'Mrunal Pawar',
            jobTitle: 'Web Developer',
            email: 'Mrunalp098@gmail.com',
            sameAs: ['https://www.linkedin.com/in/mrunal-pawar-485b7a386', 'https://github.com/mrunalpawar']
          }
        ]
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2" style={{ fontFamily: "var(--font-display)" }}>
            About <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tactiqe</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2">
            Tactiqe is not just another learning platform. It's a live company simulation where students don't just
            learn.... they collaborate, fail, iterate, and build something worth showcasing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left" style={{ fontFamily: "var(--font-display)" }}>
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center lg:text-left">
              We bridge the gap between learning and doing. Tactiqe creates a collaborative space where aspiring
              developers, designers, and innovators work together to build real, end-to-end projects that replicate the structure and discipline of an actual company environment.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center lg:text-left">
              The name "Tactiqe" comes from the word tactic, symbolizing strategic action. Every project, every
              discussion, and every deployment is intentional and results-oriented.
            </p>
          </div>

          <div className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 md:p-8 hover:bg-secondary/40 transition-all duration-300 order-1 lg:order-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Why Tactiqe?</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Hands-on learning through real projects",
                "Professional team environment",
                "Leadership and mentorship",
                "Open-source innovation platform",
                "Community-driven development",
              ].map((item, index) => (
                <li key={index} className="flex gap-2 sm:gap-3 items-start group">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform" size={16} />
                  <span className="text-xs sm:text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
            The Three Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Discuss", desc: "Brainstorm, identify problems, define objectives" },
              { title: "Develop", desc: "Collaborate to execute ideas and build solutions" },
              { title: "Deploy", desc: "Publish projects and gain professional exposure" },
            ].map((pillar, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed px-2">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
            Meet Our Team
          </h2>
          <TeamCarousel />
        </div>

        {/* Additional sections for better content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-left">Our Values</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { title: "Excellence", desc: "We strive for quality in everything we build" },
                { title: "Collaboration", desc: "Together we achieve more than alone" },
                { title: "Innovation", desc: "We embrace new ideas and technologies" },
                { title: "Learning", desc: "Continuous growth is at our core" },
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 sm:mt-2 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors">{value.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm break-words">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-border rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left">Join Our Community</h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 text-center md:text-left leading-relaxed">
              Ready to transform your ideas into reality? Join hundreds of students already building the future.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <button
                onClick={() => window.location.href = '/join'}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all text-xs sm:text-sm font-medium text-center"
              >
                Get Started
              </button>
              <button
                onClick={() => window.location.href = '/projects'}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 border border-border rounded-lg hover:bg-secondary hover:scale-105 transition-all text-xs sm:text-sm font-medium text-center"
              >
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
