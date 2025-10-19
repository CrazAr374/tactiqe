"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, Twitter, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-gradient-to-br from-secondary/30 via-background to-secondary/20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(242,201,76,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform">
              <img 
                src="/logo_12.png" 
                alt="Tactiqe Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Where ideas meet execution through collaborative learning. Join our community of innovators building the future.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://github.com/tactiqe" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/company/tactiqe" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/tactiqe" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:atharva.rahate374@gmail.com"
                className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/community", label: "Community" },
                { href: "/projects", label: "Projects" },
                { href: "/join", label: "Join Us" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Community</h4>
            <ul className="space-y-3">
              {[
                { href: "/join", label: "Become a Member" },
                { href: "/projects", label: "View Projects" },
                { href: "/about", label: "Our Team" },
                { href: "/contact", label: "Get Support" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Get Started</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Ready to join our community of innovators? Start your journey today.
            </p>
            <div className="space-y-3">
              <Link
                href="/join"
                className="block w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 hover:scale-105 transition-all text-center shadow-lg"
              >
                Join Community
              </Link>
              <Link
                href="/projects"
                className="block w-full px-4 py-3 border border-border rounded-lg text-sm font-medium hover:bg-secondary hover:scale-105 transition-all text-center"
              >
                View Projects
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              &copy; 2025 Tactiqe. All rights reserved. Built with passion by our community.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">Made in India 🇮🇳</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </footer>
  )
}
