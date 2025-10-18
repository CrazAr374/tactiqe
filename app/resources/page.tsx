"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BookOpen, Code, Users, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    category: "Open Source Guides",
    icon: <Code className="w-6 h-6" />,
    items: [
      {
        title: "Getting Started with Open Source Development",
        description: "Learn the fundamentals of contributing to open source projects and building collaborative software solutions.",
        keywords: ["open source", "collaborative development", "git", "github"]
      },
      {
        title: "Tactical Approaches to Project Management",
        description: "Strategic methodologies for managing software projects in open source communities and development teams.",
        keywords: ["project management", "tactical planning", "agile development", "team collaboration"]
      },
      {
        title: "Building Real-World Applications",
        description: "From idea to deployment: A comprehensive guide to creating impactful software projects that solve real problems.",
        keywords: ["software development", "application building", "deployment", "real-world projects"]
      }
    ]
  },
  {
    category: "Community Learning",
    icon: <Users className="w-6 h-6" />,
    items: [
      {
        title: "Collaborative Learning Strategies",
        description: "Effective techniques for learning programming and software development through community collaboration and peer mentorship.",
        keywords: ["collaborative learning", "peer learning", "mentorship", "skill development"]
      },
      {
        title: "Building Developer Communities",
        description: "Best practices for creating and nurturing thriving developer communities focused on innovation and growth.",
        keywords: ["developer community", "community building", "networking", "professional development"]
      },
      {
        title: "Student Developer Programs",
        description: "Comprehensive guide to student-led initiatives, hackathons, and programs that bridge academic learning with industry experience.",
        keywords: ["student developers", "hackathons", "academic programs", "industry experience"]
      }
    ]
  },
  {
    category: "Innovation & Strategy",
    icon: <Lightbulb className="w-6 h-6" />,
    items: [
      {
        title: "Tactical Innovation in Technology",
        description: "Strategic approaches to innovation in software development, focusing on practical solutions and measurable impact.",
        keywords: ["innovation strategy", "tactical innovation", "technology solutions", "strategic planning"]
      },
      {
        title: "From Ideas to Execution",
        description: "Systematic methodology for transforming innovative ideas into successful software projects and sustainable solutions.",
        keywords: ["idea execution", "innovation process", "startup methodology", "product development"]
      },
      {
        title: "Open Source Business Models",
        description: "Understanding sustainable business models in open source software development and community-driven projects.",
        keywords: ["open source business", "sustainable development", "community projects", "business strategy"]
      }
    ]
  }
]

export default function Resources() {
  useEffect(() => {
    // SEO metadata for resources page
    document.title = "Resources & Guides | Tactiqe - Open Source Community Learning Hub"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive resources for open source development, tactical learning strategies, and collaborative project management. Learn from Tactiqe community experts and industry professionals.')
    }

    // Add structured data for resources page
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Tactiqe Learning Resources',
      description: 'Comprehensive educational resources for open source development, tactical learning, and collaborative software projects.',
      url: 'https://tactiqe.in/resources',
      mainEntity: {
        '@type': 'Course',
        name: 'Open Source Development & Tactical Learning',
        description: 'Complete learning path for students and developers interested in open source collaboration and strategic project development.',
        provider: {
          '@type': 'Organization',
          name: 'Tactiqe Community'
        },
        educationalLevel: 'Beginner to Advanced',
        teaches: resources.flatMap(category => 
          category.items.flatMap(item => item.keywords)
        )
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

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Learning <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Comprehensive guides and resources for open source development, tactical learning strategies, and collaborative project management. 
            Master the art of strategic action in software development through our community-driven educational content.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.items.map((item, itemIndex) => (
                  <article key={itemIndex} className="group bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:scale-105">
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.keywords.slice(0, 3).map((keyword, keywordIndex) => (
                          <span key={keywordIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link"
                      >
                        Learn More 
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our open source community and start building real-world projects through tactical learning and collaborative development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all font-medium"
              >
                Join Community
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 border border-border rounded-lg hover:bg-secondary hover:scale-105 transition-all font-medium"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}