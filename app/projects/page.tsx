"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ExternalLink, Users, ChevronDown, ChevronUp } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "Clarivo",
    category: "WebDev • AI/ML • App Dev",
    image: "/clarivo.jpg",
    description: "AI-powered data analyzer, visualizer and data-centric tool that works offline for seamless data insights and analytics.",
    team: "AI/Data Team",
    status: "Live",
    contributors: ["Atharva Rahate"],
    contributorCount: 1,
    link: "https://clarivo-chi.vercel.app/",
    domains: ["WebDev", "AI/ML", "App Dev"]
  },
  {
    id: 2,
    title: "Hiropic",
    category: "WebDev • AI/ML",
    image: "/hiropic.jpg",
    description: "Hiring platform for companies that analyzes resumes, LinkedIn, GitHub, GeeksforGeeks, LeetCode profiles and scores candidates comprehensively.",
    team: "Platform Team",
    status: "In Progress",
    contributors: ["Atharva Rahate", "Rajas Patil", "Dhananjay Suryawanshi", "Khusbu Mahkare", "Mrunal Patil"],
    contributorCount: 5,
    link: null,
    domains: ["WebDev", "AI/ML"]
  },
  {
    id: 3,
    title: "Intervee",
    category: "WebDev • AI/ML",
    image: "/intervee.jpg",
    description: "AI-powered interview simulation tool that helps candidates practice and improve their interview skills with realistic scenarios.",
    team: "AI Team",
    status: "Live",
    contributors: ["Atharva Rahate"],
    contributorCount: 1,
    link: "https://intervee.vercel.app/",
    domains: ["WebDev", "AI/ML"]
  },
  {
    id: 4,
    title: "Tactiqe",
    category: "WebDev",
    image: "/tactiqe_123.jpg",
    description: "An open-source community platform for students to collaborate, learn, and build real-world projects together.",
    team: "Community Team",
    status: "In Progress",
    contributors: ["Atharva Rahate", "Rajas Patil", "Dhananjay Suryawanshi", "Khusbu Mahkare", "Mrunal Patil"],
    contributorCount: 5,
    link: null,
    domains: ["WebDev"]
  },
  {
    id: 5,
    title: "ExpanzaAI",
    category: "WebDev • AI/ML",
    image: "/expanza.jpg",
    description: "AI-powered receipt parser and management system for efficient expense tracking and financial management with smart categorization.",
    team: "FinTech Team",
    status: "Live",
    contributors: ["Atharva Rahate", "Girish Jore", "Shrawani More", "Pratik Rokade"],
    contributorCount: 4,
    link: "https://expanza.vercel.app/",
    domains: ["WebDev", "AI/ML"]
  },
]

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())

  useEffect(() => {
    // SEO metadata for projects page
    document.title = "Open Source Projects | Tactiqe Community - Collaborative Software Development"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore innovative open source projects built by Tactiqe community. From AI-powered tools to web applications, discover collaborative software development projects by student developers.')
    }

    // Add structured data for projects page
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Tactiqe Open Source Projects',
      description: 'Collection of innovative open source projects built by the Tactiqe community through collaborative development and tactical learning.',
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: allProjects.length,
        itemListElement: allProjects.map((project, index) => ({
          '@type': 'SoftwareApplication',
          position: index + 1,
          name: project.title,
          description: project.description,
          applicationCategory: project.domains.join(', '),
          operatingSystem: 'Web',
          url: project.link || 'https://tactiqe.in/projects',
          author: {
            '@type': 'Organization',
            name: 'Tactiqe Community'
          },
          contributor: project.contributors.map(name => ({
            '@type': 'Person',
            name: name
          }))
        }))
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const toggleExpanded = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent opening the project link
    setExpandedProjects(prev => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground">Explore the innovative solutions built by our community</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className={`group border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                project.link ? 'cursor-pointer' : ''
              }`}
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="relative overflow-hidden h-48 bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      project.status === "Live" 
                        ? "bg-green-500/20 text-green-400 border-green-500/30" 
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                {project.link && (
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink size={14} className="text-primary" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.domains.map((domain, idx) => (
                      <span key={idx} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{project.contributorCount}</span> Contributor{project.contributorCount > 1 ? 's' : ''}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{project.team}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {(expandedProjects.has(project.id) ? project.contributors : project.contributors.slice(0, 3)).map((contributor, idx) => (
                        <span key={idx} className="text-xs bg-secondary/50 border border-border rounded-full px-2 py-1 hover:bg-secondary/70 transition-colors">
                          {contributor}
                        </span>
                      ))}
                      {project.contributors.length > 3 && !expandedProjects.has(project.id) && (
                        <button
                          onClick={(e) => toggleExpanded(project.id, e)}
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-2 py-1 transition-colors flex items-center gap-1"
                        >
                          +{project.contributors.length - 3} more
                          <ChevronDown size={10} />
                        </button>
                      )}
                      {expandedProjects.has(project.id) && project.contributors.length > 3 && (
                        <button
                          onClick={(e) => toggleExpanded(project.id, e)}
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-2 py-1 transition-colors flex items-center gap-1"
                        >
                          Show less
                          <ChevronUp size={10} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
