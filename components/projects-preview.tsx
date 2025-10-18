"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Clarivo",
    category: "WebDev • AI/ML • App Dev",
    image: "/clarivo.jpg",
    description: "AI-powered data analyzer, visualizer and data-centric tool that works offline for seamless data insights.",
    contributors: ["Atharva Rahate"],
    link: "https://clarivo-chi.vercel.app/",
    status: "Live"
  },
  {
    id: 2,
    title: "Intervee",
    category: "WebDev • AI/ML",
    image: "/intervee.jpg", 
    description: "AI-powered interview simulation tool that helps candidates practice and improve their interview skills.",
    contributors: ["Atharva Rahate"],
    link: "https://intervee.vercel.app/",
    status: "Live"
  },
  {
    id: 3,
    title: "ExpanzaAI",
    category: "WebDev • AI/ML",
    image: "/expanza.jpg",
    description: "AI-powered receipt parser and management system for efficient expense tracking and financial management.",
    contributors: ["Atharva Rahate", "Girish Jore", "Shrawani More", "Pratik Rokade"],
    link: "https://expanza.vercel.app/",
    status: "Live"
  },
]

export default function ProjectsPreview() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([false, false, false])
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-project-item]")
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing real-world solutions built by our innovative community
          </p>
        </div>
        <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all">
          View All <ArrowRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-project-item
            className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
              visibleProjects[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            onClick={() => project.link && window.open(project.link, '_blank')}
          >
            <div className="relative overflow-hidden rounded-xl mb-4 h-48 sm:h-56 lg:h-64 bg-secondary border border-border group-hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <div>
                  <span className="text-xs sm:text-sm font-medium text-primary block mb-1 sm:mb-2">{project.category}</span>
                  <p className="text-xs sm:text-sm text-foreground/90 line-clamp-2 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {(expandedProjects.has(project.id) ? project.contributors : project.contributors.slice(0, 2)).map((contributor, idx) => (
                      <span key={idx} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {contributor.split(' ')[0]}
                      </span>
                    ))}
                    {project.contributors.length > 2 && !expandedProjects.has(project.id) && (
                      <button
                        onClick={(e) => toggleExpanded(project.id, e)}
                        className="text-xs bg-secondary/50 hover:bg-secondary/70 text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors flex items-center gap-1"
                      >
                        +{project.contributors.length - 2}
                        <ChevronDown size={8} />
                      </button>
                    )}
                    {expandedProjects.has(project.id) && project.contributors.length > 2 && (
                      <button
                        onClick={(e) => toggleExpanded(project.id, e)}
                        className="text-xs bg-secondary/50 hover:bg-secondary/70 text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors flex items-center gap-1"
                      >
                        <ChevronUp size={8} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors leading-tight flex-1">{project.title}</h3>
              {project.link && (
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </div>
            
            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-2">{project.description}</p>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{project.contributors.length} contributor{project.contributors.length > 1 ? 's' : ''}</span>
              <span className="text-primary">{project.category.split(' • ')[0]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-secondary transition-colors"
        >
          View All Projects <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
