// Community members data management

export interface Member {
  id: string
  name: string
  domain: string
  joinedDate: string
  location?: string
  avatar?: string
}

export interface TopContributor extends Member {
  github: string
  linkedin: string
  email: string
  contributions: number
  role: string
  bio: string
}

// Top 5 Contributors - These are the most active members with full social profiles
export const topContributors: TopContributor[] = [
  {
    id: "1",
    name: "Atharva Rahate",
    domain: "Full Stack Development",
    github: "https://github.com/atharvarahate",
    linkedin: "https://linkedin.com/in/atharvarahate",
    email: "atharva.rahate374@gmail.com",
    contributions: 2,
    role: "Founder & Lead Developer",
    bio: "Passionate about open source and building communities that foster innovation through collaborative learning and strategic action.",
    joinedDate: "2024-01-01",
    location: "Nashik, India",
    avatar: "/Atharva_1.png"
  },
  {
    id: "2",
    name: "Rajas Patil",
    domain: "Software Development",
    github: "https://github.com/rajaspatil",
    linkedin: "https://www.linkedin.com/in/rajas-patil-6800a332b",
    email: "patilrajas1234@gmail.com",
    contributions: 2,
    role: "Core Developer",
    bio: "Dedicated software developer contributing to multiple open source projects and helping build innovative solutions for the community.",
    joinedDate: "2024-02-15",
    location: "Nashik, India"
  },
  {
    id: "3",
    name: "Dhananjay Suryavanshi",
    domain: "Backend Development",
    github: "https://github.com/dhananjaysuryavanshi",
    linkedin: "https://www.linkedin.com/in/dhananjay-suryavanshi-049299332",
    email: "dhananjay.suryavanshi@tactiqe.in",
    contributions: 2,
    role: "Backend Developer",
    bio: "Building robust backend systems and APIs. Passionate about scalable architecture and clean code practices.",
    joinedDate: "2024-01-20",
    location: "Nashik, India"
  },
  {
    id: "4",
    name: "Khushbu Mankare",
    domain: "Frontend Development",
    github: "https://github.com/khushbumankare",
    linkedin: "https://www.linkedin.com/in/khushbu-mankare-652014312",
    email: "khushbumankare1@gmail.com",
    contributions: 2,
    role: "Frontend Developer",
    bio: "Creating beautiful and responsive user interfaces. Specializing in modern web technologies and user experience design.",
    joinedDate: "2024-03-01",
    location: "Nashik, India"
  },
  {
    id: "5",
    name: "Mrunal Pawar",
    domain: "Web Development",
    github: "https://github.com/mrunalpawar",
    linkedin: "https://www.linkedin.com/in/mrunal-pawar-485b7a386",
    email: "Mrunalp098@gmail.com",
    contributions: 2,
    role: "Web Developer",
    bio: "Full-stack web developer with expertise in modern frameworks. Contributing to community projects and mentoring newcomers.",
    joinedDate: "2024-02-28",
    location: "Nashik, India"
  }
]

// Regular community members - Basic information only
export const regularMembers: Member[] = [
  {
    id: "6",
    name: "Pratik Girish",
    domain: "Software Development",
    joinedDate: "2024-03-15",
    location: "Nashik, India"
  },
  {
    id: "7",
    name: "Sarthak",
    domain: "Web Development",
    joinedDate: "2024-04-01",
    location: "Nashik, India"
  },
  {
    id: "8",
    name: "Girish",
    domain: "Software Development",
    joinedDate: "2024-03-15",
    location: "Nashik, India"
  }
]

// Combined list of all members
export const allMembers: Member[] = [...topContributors, ...regularMembers]

// Utility functions
export const getMemberById = (id: string): Member | undefined => {
  return allMembers.find(member => member.id === id)
}

export const getMembersByDomain = (domain: string): Member[] => {
  return allMembers.filter(member => 
    member.domain.toLowerCase().includes(domain.toLowerCase())
  )
}

export const getTotalMembers = (): number => {
  return allMembers.length
}

export const getTopContributorsCount = (): number => {
  return topContributors.length
}

// Statistics for the community
export const getCommunityStats = () => {
  const domains = allMembers.map(member => member.domain)
  const uniqueDomains = [...new Set(domains)]
  
  const locations = allMembers
    .filter(member => member.location)
    .map(member => member.location!.split(',')[1]?.trim() || member.location!)
  const uniqueLocations = [...new Set(locations)]

  return {
    totalMembers: allMembers.length,
    topContributors: topContributors.length,
    domains: uniqueDomains.length,
    locations: uniqueLocations.length,
    averageContributions: Math.round(
      topContributors.reduce((sum, contributor) => sum + contributor.contributions, 0) / topContributors.length
    )
  }
}