"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Linkedin, Github, Mail } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Atharva Rahate",
    role: "Founder & Lead Developer",
  },
  {
    id: 2,
    name: "Khushbu Mankare",
    role: "Head of Operations and Onboarding",
  },
  {
    id: 3,
    name: "Rajas Patil",
    role: "Project Lead and Manager",
  },
  {
    id: 4,
    name: "Dhananjay Suryawanshi",
    role: "Project Lead and Manager",
  },
  {
    id: 5,
    name: "Mrunal Pawar",
    role: "Marketing Head and Operations Lead",
  },
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    setIsAutoPlay(false)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const member = teamMembers[currentIndex]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 space-y-12">
      {/* Combined Team Photo */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl animate-pulse"></div>
          <img
            src="/teamimage.png"
            alt="Tactiqe Core Team"
            className="relative w-full max-w-4xl h-64 sm:h-80 lg:h-96 object-cover rounded-2xl border border-border shadow-2xl hover:scale-105 transition-transform duration-500"
          />

          {/* Floating elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Team Member Carousel */}
      <div className="relative group">
        <div
          className="bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative text-center space-y-6">
            {/* Member Info */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" style={{ fontFamily: "var(--font-display)" }}>
                {member.name}
              </h3>
              <p className="text-primary font-medium text-lg sm:text-xl lg:text-2xl">{member.role}</p>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4 sm:gap-6">
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group/social">
                <Linkedin size={20} className="sm:w-6 sm:h-6 text-muted-foreground group-hover/social:text-primary transition-colors" />
              </button>
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group/social">
                <Github size={20} className="sm:w-6 sm:h-6 text-muted-foreground group-hover/social:text-primary transition-colors" />
              </button>
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group/social">
                <Mail size={20} className="sm:w-6 sm:h-6 text-muted-foreground group-hover/social:text-primary transition-colors" />
              </button>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 pt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${index === currentIndex ? "bg-primary w-8" : "bg-border w-2 hover:bg-muted"
                    }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 xl:-translate-x-20 p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-secondary transition-all hover:scale-110 shadow-lg"
          aria-label="Previous team member"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 xl:translate-x-20 p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-secondary transition-all hover:scale-110 shadow-lg"
          aria-label="Next team member"
        >
          <ChevronRight size={24} />
        </button>

        {/* Progress bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / teamMembers.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
