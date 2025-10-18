"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react"

export default function Privacy() {
  const sections = [
    {
      icon: <Eye size={24} />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when joining our community (name, email, contact details)",
        "Academic and professional information (institution, year of study, skills, experience)",
        "Project contributions and portfolio information",
        "Communication data when you contact us or participate in discussions",
        "Usage data and analytics to improve our platform and services"
      ]
    },
    {
      icon: <Lock size={24} />,
      title: "How We Use Your Information",
      content: [
        "To process your application and onboard you to our community",
        "To match you with relevant projects and team members",
        "To communicate important updates and opportunities",
        "To showcase member achievements and project outcomes (with consent)",
        "To improve our platform and develop new features"
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Your personal information is stored securely and encrypted",
        "We never sell your personal information to third parties",
        "Access to your data is limited to authorized team members only",
        "We regularly review and update our security practices"
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Information Sharing",
      content: [
        "We may share your project contributions publicly as part of our open-source initiatives",
        "Your profile information may be visible to other community members",
        "We may feature your work in our showcases and marketing materials (with permission)",
        "We do not share personal contact information without your explicit consent",
        "Anonymous usage data may be shared for research and improvement purposes"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information 
            when you participate in the Tactiqe community.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-secondary/30 border border-border rounded-xl p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Tactiqe, we believe in transparency and respect for your privacy. As an open-source community 
            focused on collaborative learning and project development, we collect only the information necessary 
            to provide you with the best possible experience and to help you connect with like-minded innovators.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8 sm:space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="border border-border rounded-xl p-6 sm:p-8 hover:bg-secondary/20 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary mt-1">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Your Rights */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Rights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Access your personal data",
              "Correct inaccurate information",
              "Request data deletion",
              "Opt-out of communications",
              "Data portability",
              "Withdraw consent"
            ].map((right, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm sm:text-base">{right}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 sm:mt-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this privacy policy or how we handle your data, 
            please don't hesitate to contact us.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}