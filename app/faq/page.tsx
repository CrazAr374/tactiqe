"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    category: "About Tactiqe",
    questions: [
      {
        question: "What is Tactiqe and what makes it different from other open source communities?",
        answer: "Tactiqe is India's premier open source community that bridges the gap between learning and doing through tactical approaches and strategic action. Unlike traditional learning platforms, we focus on collaborative project development where students and developers work together on real-world solutions. Our unique 'tactical learning' methodology emphasizes strategic thinking, practical implementation, and measurable impact in software development.",
        keywords: ["Tactiqe", "open source community", "tactical learning", "collaborative development"]
      },
      {
        question: "How does tactical learning work in software development?",
        answer: "Tactical learning at Tactiqe combines strategic planning with hands-on implementation. Students learn by working on real projects, making strategic decisions, and executing solutions collaboratively. This approach develops both technical skills and strategic thinking, preparing developers for real-world challenges in the software industry.",
        keywords: ["tactical learning", "strategic planning", "software development", "collaborative projects"]
      },
      {
        question: "Who can join the Tactiqe open source community?",
        answer: "Tactiqe welcomes students, developers, designers, and innovators of all skill levels who are passionate about collaborative learning and open source development. Whether you're a beginner looking to learn or an experienced developer wanting to mentor others, our community provides opportunities for growth through strategic action and tactical approaches.",
        keywords: ["community membership", "student developers", "open source collaboration", "skill development"]
      }
    ]
  },
  {
    category: "Projects & Collaboration",
    questions: [
      {
        question: "What types of open source projects does Tactiqe work on?",
        answer: "Our community develops diverse open source projects including AI-powered applications, web development solutions, mobile apps, and innovative tools. Recent projects include Clarivo (AI data analyzer), Hiropic (hiring platform), Intervee (interview simulation), and ExpanzaAI (expense management). All projects focus on solving real-world problems through collaborative development and strategic implementation.",
        keywords: ["open source projects", "AI applications", "web development", "collaborative software"]
      },
      {
        question: "How do I contribute to Tactiqe projects as a student developer?",
        answer: "Contributing to Tactiqe projects involves joining our community, participating in project discussions, and collaborating with team members. We provide mentorship, code reviews, and learning resources to help student developers grow. Our tactical approach ensures that every contribution is meaningful and helps build real-world experience in software development.",
        keywords: ["project contribution", "student developers", "mentorship", "code collaboration"]
      },
      {
        question: "What is the project development process at Tactiqe?",
        answer: "Our development process follows the 'Three Pillars' approach: Discuss (brainstorming and strategic planning), Develop (collaborative implementation), and Deploy (publishing and professional exposure). This tactical methodology ensures projects are well-planned, effectively executed, and successfully launched, providing valuable experience in complete software development lifecycle.",
        keywords: ["development process", "project management", "tactical methodology", "software lifecycle"]
      }
    ]
  },
  {
    category: "Learning & Growth",
    questions: [
      {
        question: "How does Tactiqe support career growth for developers?",
        answer: "Tactiqe provides comprehensive career support through real project experience, mentorship programs, professional networking, and skill development opportunities. Our strategic approach to learning ensures developers gain practical experience, build impressive portfolios, and develop the tactical thinking skills valued by employers in the software industry.",
        keywords: ["career growth", "professional development", "mentorship", "skill building"]
      },
      {
        question: "What learning resources are available in the Tactiqe community?",
        answer: "Our community offers extensive learning resources including project-based tutorials, collaborative coding sessions, strategic planning workshops, and peer mentorship programs. We focus on tactical learning approaches that combine theoretical knowledge with practical implementation, ensuring comprehensive skill development in software development and project management.",
        keywords: ["learning resources", "tutorials", "workshops", "peer mentorship"]
      },
      {
        question: "How does Tactiqe prepare students for the software industry?",
        answer: "Tactiqe prepares students through real-world project experience, industry-standard development practices, strategic thinking development, and professional collaboration skills. Our tactical learning approach mirrors actual software industry environments, helping students transition smoothly from academic learning to professional software development careers.",
        keywords: ["industry preparation", "professional skills", "software industry", "career transition"]
      }
    ]
  }
]

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    // SEO metadata for FAQ page
    document.title = "FAQ - Tactiqe Open Source Community | Tactical Learning & Strategic Development"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about Tactiqe open source community, tactical learning approaches, collaborative development, and strategic software project management. Get answers about joining our developer community.')
    }

    // Add structured data for FAQ page
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.flatMap(category => 
        category.questions.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      )
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

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full">
            <HelpCircle size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Frequently Asked Questions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Got <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions?</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about Tactiqe open source community, tactical learning approaches, 
            collaborative development processes, and strategic software project management.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                {category.category}
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isExpanded = expandedItems.has(itemId)
                  
                  return (
                    <div key={faqIndex} className="bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleExpanded(itemId)}
                        className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors"
                      >
                        <h3 className="text-sm sm:text-base font-semibold pr-4 leading-relaxed">
                          {faq.question}
                        </h3>
                        {isExpanded ? (
                          <ChevronUp size={20} className="text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                          <div className="pt-4 border-t border-border">
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {faq.keywords.map((keyword, keywordIndex) => (
                                <span key={keywordIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our community team is here to help you get started with tactical learning and collaborative development.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}