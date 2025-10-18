"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Users, Rocket, Zap, Target, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Discuss & Ideate",
    description:
      "Brainstorm real-world problems with passionate peers. Define clear objectives, explore innovative solutions, and collaborate in a professional environment that values every perspective.",
  },
  {
    icon: Code2,
    title: "Develop & Build",
    description:
      "Execute ideas through hands-on coding, designing, and architecting. Learn industry best practices while building production-ready solutions that solve actual problems.",
  },
  {
    icon: Rocket,
    title: "Deploy & Showcase",
    description:
      "Publish finished projects under Tactiqe's open innovation wing. Get visibility from recruiters, companies, and the tech community. Build your professional portfolio.",
  },
  {
    icon: Zap,
    title: "Learn & Grow",
    description:
      "Accelerate your learning through real projects. Gain practical experience, mentorship, and feedback from industry professionals in a supportive community.",
  },
  {
    icon: Target,
    title: "Network & Connect",
    description:
      "Build meaningful relationships with like-minded innovators. Create lasting connections that lead to collaborations, opportunities, and lifelong friendships.",
  },
  {
    icon: Award,
    title: "Achieve & Succeed",
    description:
      "Earn recognition for your contributions. Build a track record of successful projects that demonstrate your capabilities to future employers and clients.",
  },
]

export default function Features() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(features.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-feature-item]")
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2" style={{ fontFamily: "var(--font-display)" }}>
          The Tactiqe Ecosystem
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-2">
          Six pillars of strategic action that transform learners into industry-ready innovators
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              data-feature-item
              className={`group p-6 sm:p-8 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/60 transition-all duration-500 cursor-pointer hover:border-primary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <Icon className="text-primary group-hover:text-accent transition-colors" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
