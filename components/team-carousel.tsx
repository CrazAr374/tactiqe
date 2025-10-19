"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Linkedin, Github, Mail } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  linkedin?: string
  github?: string
  email?: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Atharva Rahate",
    role: "Founder & Lead Developer",
    linkedin: "https://linkedin.com/in/atharvarahate",
    github: "https://github.com/atharvarahate",
    email: "atharva.rahate374@gmail.com"
  },
  {
    id: 2,
    name: "Rajas Patil",
    role: "Core Developer",
    linkedin: "https://www.linkedin.com/in/rajas-patil-6800a332b",
    github: "https://github.com/rajaspatil",
    email: "patilrajas1234@gmail.com"
  },
  {
    id: 3,
    name: "Dhananjay Suryavanshi",
    role: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/dhananjay-suryavanshi-049299332",
    github: "https://github.com/dhananjaysuryavanshi",
    email: "dhananjay.suryavanshi@tactiqe.in"
  },
  {
    id: 4,
    name: "Khushbu Mankare",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/khushbu-mankare-652014312",
    github: "https://github.com/khushbumankare",
    email: "khushbumankare1@gmail.com"
  },
  {
    id: 5,
    name: "Mrunal Pawar",
    role: "Web Developer",
    linkedin: "https://www.linkedin.com/in/mrunal-pawar-485b7a386",
    github: "https://github.com/mrunalpawar",
    email: "Mrunalp098@gmail.com"
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
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 space-y-8 sm:space-y-12 overflow-hidden">
      {/* Combined Team Photo */}
      <div className="flex justify-center px-2">
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl animate-pulse"></div>
          <img
            src="/teamimage.png"
            alt="Tactiqe Core Team"
            className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl border border-border shadow-2xl hover:scale-105 transition-transform duration-500"
          />

          {/* Floating elements */}
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Team Member Carousel */}
      <div className="relative group px-2 sm:px-4 lg:px-12 xl:px-16">
        <div
          className="bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative text-center space-y-4 sm:space-y-6 px-4 sm:px-8">
            {/* Member Info */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{member.role}</p>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group/social"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group/social"
                  title="GitHub Profile"
                >
                  <Github size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group/social"
                  title="Send Email"
                >
                  <Mail size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </a>
              )}
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 pt-2 sm:pt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 hover:scale-125 ${index === currentIndex ? "bg-primary w-6 sm:w-8" : "bg-border w-1.5 sm:w-2 hover:bg-muted"
                    }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons - positioned inside container on mobile */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-secondary transition-all hover:scale-110 shadow-lg z-10"
          aria-label="Previous team member"
        >
          <ChevronLeft size={18} className="sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-secondary transition-all hover:scale-110 shadow-lg z-10"
          aria-label="Next team member"
        >
          <ChevronRight size={18} className="sm:w-6 sm:h-6" />
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
