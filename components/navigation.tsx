"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg" : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform" onClick={closeMenu}>
            <img 
              src="/logo.png" 
              alt="Tactiqe Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-all hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-all hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-all hover:scale-105 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-all hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/join"
            className="hidden lg:block px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/25"
          >
            Join Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''}`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="pb-4 pt-2 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 hover:bg-secondary/70 rounded-lg transition-all hover:translate-x-2 font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 hover:bg-secondary/70 rounded-lg transition-all hover:translate-x-2 font-medium"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-3 hover:bg-secondary/70 rounded-lg transition-all hover:translate-x-2 font-medium"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 hover:bg-secondary/70 rounded-lg transition-all hover:translate-x-2 font-medium"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/join"
                className="block mx-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-center font-medium hover:opacity-90 transition-all shadow-lg"
                onClick={closeMenu}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
