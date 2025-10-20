"use client"

import { useState } from "react"
import { trackEvent } from "./analytics"
import { Send, User, Mail, Phone, MapPin, Code, Briefcase, MessageSquare } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  location: string
  experience: string
  skills: string
  projects: string
  motivation: string
  availability: string
  github: string
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    skills: '',
    projects: '',
    motivation: '',
    availability: '',
    github: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `Tactiqe Application - ${formData.name}`,
          message: `
Application Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Experience Level: ${formData.experience}
Skills: ${formData.skills}
Previous Projects: ${formData.projects}
Motivation: ${formData.motivation}
Availability: ${formData.availability}
GitHub: ${formData.github}
          `
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        // Track successful form submission
        trackEvent('submit', 'application', 'backup_form_success')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      // Track form submission error
      trackEvent('error', 'application', 'backup_form_failed')
      alert('Failed to submit application. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
          Application Submitted!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          Thank you for your interest in Tactiqe. We'll review your application and get back to you within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="bg-secondary/20 border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <User size={20} />
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
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
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="City, Country"
            />
          </div>
        </div>
      </div>

      {/* Technical Background */}
      <div className="bg-secondary/20 border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Code size={20} />
          Technical Background
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Experience Level *</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (1-3 years)</option>
              <option value="advanced">Advanced (3-5 years)</option>
              <option value="expert">Expert (5+ years)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Technical Skills *</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="List your programming languages, frameworks, tools, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">GitHub Profile</label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="https://github.com/yourusername"
            />
          </div>
        </div>
      </div>

      {/* Project Experience */}
      <div className="bg-secondary/20 border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Briefcase size={20} />
          Project Experience
        </h3>
        <div>
          <label className="block text-sm font-medium mb-2">Previous Projects</label>
          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Describe any projects you've worked on, including personal projects, hackathons, or contributions to open source..."
          />
        </div>
      </div>

      {/* Motivation & Availability */}
      <div className="bg-secondary/20 border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MessageSquare size={20} />
          About You
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Why do you want to join Tactiqe? *</label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Tell us about your motivation, what you hope to learn, and how you'd like to contribute..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Availability</label>
            <textarea
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="How much time can you dedicate per week? Any specific time zones or scheduling preferences?"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application <Send size={18} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}