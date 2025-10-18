"use client"

import { useEffect, useState } from "react"

export default function StatsSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const stats = [
    { number: "20", label: "Active Members", description: "Students actively building", delay: 0 },
    { number: "4", label: "Projects Completed", description: "Production-ready solutions", delay: 0.1 },
    { number: "5", label: "Contributors", description: "Open-source contributors", delay: 0.2 },
    { number: "1", label: "Community Partners", description: "Industry collaborations", delay: 0.3 },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-secondary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,201,76,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(242,201,76,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Growing Community of Innovators
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Join students building the future through collaboration and innovation
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-6 lg:p-8 bg-secondary/20 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-secondary/30 transition-all duration-500 text-center hover:scale-105 hover:shadow-xl hover:shadow-primary/5 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${stat.delay}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/30 border border-border/50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Community growing daily
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
