"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-12 md:p-16 text-center overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Transform Ideas Into Reality?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join Tactiqe and become part of a community where learning meets execution. Collaborate with talented
            developers, designers, and innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Join Our Community <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-all"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
