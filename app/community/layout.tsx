import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community - Meet Our Members | Tactiqe",
  description: "Discover the talented individuals who make Tactiqe a thriving community of innovators. Meet our top contributors and active members from across India working on open source projects.",
  keywords: [
    "Tactiqe community",
    "open source contributors",
    "developer community India",
    "tech community members",
    "collaborative learning",
    "student developers",
    "programming community",
    "software development team",
    "innovation community",
    "tech talent India"
  ],
  openGraph: {
    title: "Community - Meet Our Members | Tactiqe",
    description: "Discover the talented individuals who make Tactiqe a thriving community of innovators and builders.",
    url: "https://tactiqe.in/community",
    images: [
      {
        url: "/community-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tactiqe Community Members",
      }
    ],
  },
  twitter: {
    title: "Community - Meet Our Members | Tactiqe",
    description: "Discover the talented individuals who make Tactiqe a thriving community of innovators and builders.",
    images: ["/community-twitter.jpg"],
  },
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}