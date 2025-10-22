"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Sparkles } from "./icons"
import Link from "next/link"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [gridCells, setGridCells] = useState<Array<{ id: number; active: boolean; delay: number }>>([])
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Generate grid cells
    const cells = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      active: false,
      delay: Math.random() * 2
    }))
    setGridCells(cells)

    // Animate random cells
    const interval = setInterval(() => {
      setGridCells(prev => prev.map(cell => ({
        ...cell,
        active: Math.random() > 0.95
      })))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      return () => heroElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const gridItems = [
    { label: "Innovate", delay: 0 },
    { label: "Collaborate", delay: 0.1 },
    { label: "Create", delay: 0.2 },
    { label: "Deploy", delay: 0.3 },
    { label: "Grow", delay: 0.4 },
    { label: "Excel", delay: 0.5 },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layered gradient orbs with better animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-accent/8 to-primary/4 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-primary/6 to-accent/3 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s", animationDirection: "reverse" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-gradient-to-r from-primary/4 via-accent/6 to-primary/4 rounded-full blur-3xl animate-rotate-slow"
            style={{ transform: "translate(-50%, -50%)" }}
          ></div>
        </div>

        {/* Enhanced interactive grid with better patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(242,201,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(242,201,76,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] animate-pulse"></div>
          <div className="grid grid-cols-12 sm:grid-cols-16 gap-1 p-4 h-full">
            {gridCells.map((cell) => (
              <div
                key={cell.id}
                className={`aspect-square rounded-sm transition-all duration-700 ${cell.active
                  ? 'bg-gradient-to-br from-primary/30 to-accent/20 shadow-lg shadow-primary/20 scale-125 rotate-45'
                  : 'bg-border/10 hover:bg-primary/15 hover:scale-110'
                  }`}
                style={{
                  animationDelay: `${cell.delay}s`,
                  transform: `scale(${cell.active ? 1.25 : 1}) rotate(${cell.active ? 45 : 0}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced mouse follower with multiple layers */}
        <div
          className="absolute w-96 h-96 pointer-events-none transition-all duration-500"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-accent/8 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-radial from-accent/10 via-primary/5 to-transparent rounded-full blur-xl"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce-slow"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full animate-scale-in">
            <Sparkles size={16} className="text-primary" />
            <p className="text-xs sm:text-sm text-muted-foreground">Open-Source Community for Students</p>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight px-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where Ideas Meet{" "}
            <span className="text-primary animate-pulse-glow block sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Execution
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          Tactiqe brings together students who love creating, experimenting, and deploying. From brainstorming to real-world launch, every project is an opportunity to learn, grow, and make something meaningful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Link
              href="/join"
              className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 animate-scale-in shadow-lg hover:shadow-primary/25 text-sm sm:text-base relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              Join Us <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-6 sm:px-8 py-3 sm:py-3.5 border border-border rounded-full font-medium hover:bg-secondary transition-all animate-scale-in hover:scale-105 text-sm sm:text-base backdrop-blur-sm"
              style={{ animationDelay: "0.1s" }}
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-8 sm:mb-16 px-2">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="group relative p-3 sm:p-4 bg-secondary/40 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:bg-secondary/60 transition-all duration-300 hover:scale-105"
                style={{
                  animation: isLoaded ? `scale-in 0.6s ease-out ${item.delay}s both` : "none",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action section */}
          <div className="max-w-2xl mx-auto">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm border border-border rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Ready to Build Something Amazing?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Join a fast-growing student community where ideas turn into live projects. Collaborate with peers, gain real development experience, and bring your concepts to life through teamwork and execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/projects"
                  className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
