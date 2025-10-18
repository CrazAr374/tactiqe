export const seoConfig = {
  title: "Tactiqe - Open Source Community | Where Ideas Meet Execution Through Collaborative Learning",
  description: "Join Tactiqe, India's premier open source community for students and developers. Build real projects, collaborate with innovators, and transform ideas into reality through tactical learning and strategic action.",
  keywords: [
    "Tactiqe",
    "open source community",
    "tactic",
    "tactical learning",
    "strategic action",
    "student community India",
    "collaborative projects",
    "developer community",
    "innovation platform",
    "project collaboration",
    "learning community",
    "open source projects",
    "student developers",
    "tech community India",
    "programming community",
    "software development",
    "team collaboration",
    "project-based learning",
    "real-world projects",
    "mentorship platform",
    "coding community",
    "hackathon community",
    "startup community",
    "tech innovation",
    "collaborative learning",
    "peer learning",
    "skill development",
    "professional development",
    "career growth",
    "networking platform"
  ],
  url: "https://tactiqe.in",
  siteName: "Tactiqe",
  images: {
    default: "/og-image.jpg",
    twitter: "/twitter-image.jpg"
  },
  social: {
    twitter: "@tactiqe",
    github: "https://github.com/tactiqe",
    linkedin: "https://linkedin.com/company/tactiqe"
  },
  creator: "Atharva Rahate",
  publisher: "Tactiqe Community"
}

export const generatePageSEO = (page: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}) => {
  return {
    title: page.title ? `${page.title} | ${seoConfig.siteName}` : seoConfig.title,
    description: page.description || seoConfig.description,
    keywords: [...seoConfig.keywords, ...(page.keywords || [])],
    openGraph: {
      title: page.title || seoConfig.title,
      description: page.description || seoConfig.description,
      url: page.url ? `${seoConfig.url}${page.url}` : seoConfig.url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: page.image || seoConfig.images.default,
          width: 1200,
          height: 630,
          alt: page.title || seoConfig.title,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title || seoConfig.title,
      description: page.description || seoConfig.description,
      images: [page.image || seoConfig.images.twitter],
      creator: seoConfig.social.twitter,
    },
  }
}