"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Users, MapPin, Search } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { topContributors, allMembers, getCommunityStats } from "@/lib/community-data"

export default function CommunityPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<'contributors' | 'members'>('contributors')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDomain, setSelectedDomain] = useState('all')

  useEffect(() => {
    setIsLoaded(true)

    // Add structured data for the community page
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Tactiqe Community',
      url: 'https://tactiqe.in/community',
      description: 'A thriving community of developers, designers, and innovators working on open source projects',
      memberOf: {
        '@type': 'Organization',
        name: 'Tactiqe',
        url: 'https://tactiqe.in'
      },
      member: topContributors.map(contributor => ({
        '@type': 'Person',
        name: contributor.name,
        jobTitle: contributor.role,
        worksFor: {
          '@type': 'Organization',
          name: 'Tactiqe'
        },
        sameAs: [contributor.github, contributor.linkedin],
        email: contributor.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: contributor.location
        }
      })),
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: stats.totalMembers
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const stats = getCommunityStats()

  // Get unique domains for filter
  const uniqueDomains = [...new Set(allMembers.map(member => member.domain))]

  // Filter members based on search and domain
  const filteredMembers = allMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.domain.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDomain = selectedDomain === 'all' || member.domain === selectedDomain
    return matchesSearch && matchesDomain
  })



  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Our Community
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Meet the talented individuals who make Tactiqe a thriving community of innovators and builders.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{stats.totalMembers}</div>
                <div className="text-muted-foreground">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{stats.topContributors}</div>
                <div className="text-muted-foreground">Top Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{stats.domains}</div>
                <div className="text-muted-foreground">Domains</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-center">
          <div className="bg-secondary/30 rounded-lg p-1 border border-border">
            <button
              onClick={() => setActiveTab('contributors')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'contributors'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Top Contributors
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'members'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All Members
            </button>
          </div>
        </div>
      </div>

      {/* Top Contributors Section */}
      {activeTab === 'contributors' && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Top Contributors</h2>
            <p className="text-muted-foreground text-sm">
              Our most active contributors with their social profiles
            </p>
          </div>

          {/* Mobile: Stack layout, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="group p-4 bg-secondary/20 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/30 transition-all duration-200 flex flex-col h-full"
              >
                {/* Header with rank and avatar */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-lg font-bold text-primary flex-shrink-0">
                    {contributor.name.charAt(0)}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 mb-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-sm sm:text-base mb-1">{contributor.name}</h3>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded inline-block">
                      {contributor.contributions} contributions
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{contributor.domain}</p>
                  {contributor.location && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} />
                      {contributor.location}
                    </p>
                  )}
                </div>

                {/* Social Links - Always at bottom */}
                <div className="flex gap-2 justify-center sm:justify-start">
                  <a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    title="GitHub"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href={`mailto:${contributor.email}`}
                    className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    title="Email"
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Members Section */}
      {activeTab === 'members' && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">All Members</h2>
            <p className="text-muted-foreground text-sm">
              Every member brings unique skills and perspectives to our community
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
              />
            </div>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="px-3 py-2 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
            >
              <option value="all">All Domains</option>
              {uniqueDomains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground">
              {filteredMembers.length} of {allMembers.length} members
            </p>
          </div>

          {filteredMembers.length > 0 ? (
            <div className="space-y-2">
              {filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group flex items-center justify-between p-3 bg-secondary/10 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-secondary/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                      {member.name.charAt(0)}
                    </div>
                    
                    {/* Info */}
                    <div>
                      <h3 className="font-medium text-sm">{member.name}</h3>
                      <p className="text-xs text-muted-foreground">{member.domain}</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {new Date(member.joinedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                    {member.location && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                        <MapPin size={10} />
                        {member.location.split(',')[0]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Users className="mx-auto text-muted-foreground mb-2" size={32} />
              <h3 className="font-medium mb-1">No members found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </section>
      )}

      {/* Join Community CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center p-6 bg-secondary/20 border border-border rounded-lg">
          <h3 className="text-lg font-bold mb-2">Want to Join Our Community?</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Be part of our growing community of innovators and builders.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/join"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all"
            >
              Join Community
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}