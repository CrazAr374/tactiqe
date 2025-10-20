"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ApplicationForm from "@/components/application-form"
import { trackEvent } from "@/components/analytics"
import { ExternalLink, FileText } from "lucide-react"
import { useState } from "react"

export default function Join() {
  const [showBackupForm, setShowBackupForm] = useState(false)

  const handleDirectApply = () => {
    // Track Google Form click
    trackEvent('click', 'application', 'google_form_direct')
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScZvLCWhiaYJ2E4c3l1TbbnLruauDXT-IPZUFgvhtxuJ-cWxQ/viewform', '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Join <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tactiqe</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2">
            Be part of an open-source community where students collaborate to build, learn, and grow together. 
            Transform your ideas into reality with like-minded innovators from around the world.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
            How to Get Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: 1, title: "Apply", desc: "Complete our comprehensive application form" },
              { step: 2, title: "Connect", desc: "Meet the team and discuss your interests" },
              { step: 3, title: "Onboard", desc: "Get set up with tools and resources" },
              { step: 4, title: "Contribute", desc: "Start building amazing projects with us" },
            ].map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Ready to Start Building?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Fill out our detailed application form to join our community of innovators. 
              We'll collect all the information we need to match you with the right projects and team.
            </p>
          </div>

          {/* Quick Apply Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleDirectApply}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/25 text-sm sm:text-base"
            >
              Apply Now <ExternalLink size={18} />
            </button>
          </div>

          {/* Notice about Form Access */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-yellow-400 flex-shrink-0 mt-0.5"></div>
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Form Access Notice
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                  Our application form opens in a new tab for the best experience. No Google account required!
                </p>
                <button
                  onClick={handleDirectApply}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Open Application Form <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Alternative: Try embedded form */}
          <details className="bg-secondary/20 border border-border rounded-2xl overflow-hidden shadow-lg">
            <summary className="p-6 cursor-pointer hover:bg-secondary/30 transition-colors font-medium">
              Try Embedded Form (Click to expand)
            </summary>
            <div className="border-t border-border">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScZvLCWhiaYJ2E4c3l1TbbnLruauDXT-IPZUFgvhtxuJ-cWxQ/viewform?embedded=true"
                width="100%"
                height="2130"
                title="Tactiqe Application Form"
                className="w-full"
                style={{ 
                  minHeight: '2130px',
                  border: 'none'
                }}
              >
                Loading…
              </iframe>
            </div>
          </details>

          {/* Form Options */}
          <div className="mt-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Having trouble with the Google Form? 
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDirectApply}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                Open in New Tab <ExternalLink size={14} />
              </button>
              <button
                onClick={() => {
                  trackEvent('click', 'application', 'backup_form_toggle')
                  setShowBackupForm(!showBackupForm)
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-colors text-sm"
              >
                Use Backup Form <FileText size={14} />
              </button>
            </div>
          </div>

          {/* Backup Application Form */}
          {showBackupForm && (
            <div className="mt-8 bg-secondary/10 border border-border rounded-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Alternative Application Form</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out this form if you're having issues with the Google Form above
                </p>
              </div>
              <ApplicationForm />
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-secondary/30 rounded-xl border border-border">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Comprehensive Review</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We review each application carefully to ensure the best fit for our community
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-secondary/30 rounded-xl border border-border">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Quick Response</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                You'll hear back from us within 48 hours of submitting your application
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-secondary/30 rounded-xl border border-border">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">All Levels Welcome</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                From beginners to experts, we welcome developers at every stage of their journey
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
