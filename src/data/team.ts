export type Member = {
  id: number
  name: string
  role: string
  bio: string
  avatar: string
  twitter: string
}

export const team: Member[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    bio: 'Former VP of Engineering at Datadog. Built and scaled 3 startups from 0 to exit.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    twitter: '@sarahchen',
  },
  {
    id: 2,
    name: 'Marcus Wright',
    role: 'CTO & Co-founder',
    bio: 'Ex-Meta infrastructure lead. Expert in distributed systems and real-time data.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    twitter: '@mwright',
  },
  {
    id: 3,
    name: 'Léa Dubois',
    role: 'Head of Design',
    bio: '10 years crafting B2B product experiences at Intercom and Basecamp.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    twitter: '@leadubois',
  },
  {
    id: 4,
    name: 'Raj Patel',
    role: 'VP Engineering',
    bio: 'Kubernetes maintainer. Led platform engineering at Shopify for 5 years.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    twitter: '@rajpatel',
  },
  {
    id: 5,
    name: 'Amina Koné',
    role: 'Head of Growth',
    bio: "Scaled Segment's revenue from $10M to $120M ARR as Director of Growth.",
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop',
    twitter: '@aminakone',
  },
  {
    id: 6,
    name: 'Tom Fischer',
    role: 'Lead Backend Engineer',
    bio: 'Open-source contributor to Rust async ecosystem. Previously at Cloudflare.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    twitter: '@tomfischer',
  },
]
