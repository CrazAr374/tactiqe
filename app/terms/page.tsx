"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, FileText, Users, Code, Shield } from "lucide-react"

export default function Terms() {
  const sections = [
    {
      icon: <Users size={24} />,
      title: "Community Membership",
      content: [
        "You must be at least 16 years old to join our community",
        "You agree to provide accurate and complete information during registration",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to notify us immediately of any unauthorized use of your account",
        "One person may not maintain multiple accounts"
      ]
    },
    {
      icon: <Code size={24} />,
      title: "Project Contributions",
      content: [
        "All project contributions must be your original work or properly attributed",
        "You grant Tactiqe a license to use, modify, and distribute your contributions",
        "You retain ownership of your intellectual property rights",
        "Contributions should align with our community values and coding standards",
        "You agree not to submit malicious code or content that violates laws"
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "Code of Conduct",
      content: [
        "Treat all community members with respect and professionalism",
        "No harassment, discrimination, or inappropriate behavior will be tolerated",
        "Maintain constructive and helpful communication in all interactions",
        "Respect intellectual property rights and give proper attribution",
        "Report any violations of community guidelines to our team"
      ]
    },
    {
      icon: <FileText size={24} />,
      title: "Platform Usage",
      content: [
        "Use our platform only for legitimate educational and collaborative purposes",
        "Do not attempt to gain unauthorized access to our systems",
        "Respect bandwidth and resource limitations",
        "Do not spam, advertise, or promote unrelated content",
        "Follow all applicable laws and regulations in your jurisdiction"
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
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            These terms govern your use of Tactiqe and participation in our community. 
            By joining us, you agree to these terms and our community guidelines.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-secondary/30 border border-border rounded-xl p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Welcome to Tactiqe</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tactiqe is a student-led, open-source community where ideas meet execution. We provide a platform 
            for collaborative learning, project development, and professional growth. By using our services, 
            you agree to these terms of service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These terms may be updated from time to time. We will notify you of any significant changes, 
            and your continued use of our platform constitutes acceptance of the updated terms.
          </p>
        </div>

        {/* Terms Sections */}
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

        {/* Termination */}
        <div className="mt-12 bg-gradient-to-br from-accent/10 to-primary/10 border border-border rounded-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Account Termination</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              You may terminate your account at any time by contacting us. Upon termination, 
              your access to our platform will be revoked, but your contributions to open-source 
              projects may remain available under their respective licenses.
            </p>
            <p>
              We reserve the right to suspend or terminate accounts that violate these terms 
              or our community guidelines. We will provide notice when possible and work with 
              members to resolve issues before taking such action.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="mt-8 border border-border rounded-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            Tactiqe is provided "as is" without warranties of any kind. We strive to provide 
            a reliable and valuable service, but we cannot guarantee uninterrupted access or 
            error-free operation. Our liability is limited to the maximum extent permitted by law.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8 sm:mt-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about these terms of service or need clarification 
            on any point, please reach out to us.
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