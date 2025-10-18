"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, Users } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simple mailto fallback - opens user's email client
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      )
      
      const mailtoLink = `mailto:atharva.rahate374@gmail.com?subject=${subject}&body=${body}`
      
      // Open mailto link
      window.open(mailtoLink, '_blank')
      
      // Show success message
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error:', error)
      alert('Please make sure you have an email client configured, or contact us directly at atharva.rahate374@gmail.com')
    } finally {
      setIsLoading(false)
    }
  }

  const contactMethods = [
    { 
      icon: Mail, 
      title: "Email", 
      value: "atharva.rahate374@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:atharva.rahate374@gmail.com"
    },
    { 
      icon: Phone, 
      title: "Phone", 
      value: "+91 8149812710",
      description: "Call us during business hours",
      action: "tel:+918149812710"
    },
    { 
      icon: MapPin, 
      title: "Location", 
      value: "Global Community",
      description: "Remote-first organization",
      action: null
    },
  ]

  const quickInfo = [
    {
      icon: <Clock size={20} />,
      title: "Response Time",
      description: "We typically respond within 24 hours"
    },
    {
      icon: <Users size={20} />,
      title: "Community Support",
      description: "Join our community for peer support"
    },
    {
      icon: <MessageCircle size={20} />,
      title: "Open Communication",
      description: "We believe in transparent dialogue"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Get In <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about joining our community? Want to collaborate on a project? 
            We'd love to hear from you and help you get started on your journey with Tactiqe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Reach Out
            </h2>
            
            {contactMethods.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group border border-border rounded-xl p-6 hover:bg-secondary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                      {item.action ? (
                        <a 
                          href={item.action}
                          className="text-sm font-medium text-primary hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Quick Info */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Why Contact Us?</h3>
              {quickInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{info.title}</h4>
                    <p className="text-muted-foreground text-xs">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/30"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:border-primary/30"
                  >
                    <option value="">Select a subject</option>
                    <option value="join">Joining the Community</option>
                    <option value="project">Project Collaboration</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none hover:border-primary/30"
                    placeholder="Tell us about your interest in Tactiqe, questions you have, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || submitted}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                    <p className="text-green-600 font-medium text-sm">
                      Your email client should have opened with a pre-filled message. If not, please send your message directly to: 
                      <a href="mailto:atharva.rahate374@gmail.com" className="font-semibold underline ml-1">
                        atharva.rahate374@gmail.com
                      </a>
                    </p>
                  </div>
                )}

                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-600 text-sm text-center">
                    <strong>Alternative:</strong> You can also email us directly at{" "}
                    <a 
                      href="mailto:atharva.rahate374@gmail.com" 
                      className="font-semibold underline hover:text-blue-800 transition-colors"
                    >
                      atharva.rahate374@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ready to start building? Join our community of innovators and start collaborating 
              on exciting projects that make a real impact.
            </p>
            <a 
              href="/join"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all font-medium"
            >
              Join Tactiqe
              <Users size={18} />
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-border rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Explore Projects</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Check out the amazing projects our community has built and get inspired 
              for your next collaboration.
            </p>
            <a 
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary hover:scale-105 transition-all font-medium"
            >
              View Projects
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
