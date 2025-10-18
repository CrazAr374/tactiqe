"use client"

import { useEffect, useState } from "react"

export default function LanguagesUsed() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const technologies = [
    "React",
    "Next.js", 
    "TypeScript",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "GraphQL",
    "Redis"
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/20 via-background to-secondary/10 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(242,201,76,0.02)_50%,transparent_75%)] bg-[length:60px_60px] animate-gradient-shift"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Technologies We Use
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Built with modern tools and frameworks for scalable, production-ready solutions
          </p>
        </div>

        {/* Seamless Scrolling Layout */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-seamless">
            {/* First set */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${tech}-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-secondary/40 backdrop-blur-sm border border-border rounded-full hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 group"
              >
                <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${tech}-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-secondary/40 backdrop-blur-sm border border-border rounded-full hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 group"
              >
                <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {technologies.map((tech, index) => (
              <div
                key={`third-${tech}-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-secondary/40 backdrop-blur-sm border border-border rounded-full hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 group"
              >
                <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            And many more cutting-edge technologies to deliver exceptional results
          </p>
        </div>
      </div>
    </section>
  )
}
