export type Post = {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  tag: string
  cover: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'How we scaled to 10M requests per day on a $0 infra bill',
    excerpt:
      'A deep dive into our edge caching strategy, lazy evaluation pipelines, and why we moved away from Kubernetes.',
    author: 'Marcus Wright',
    date: 'June 28, 2025',
    readTime: '8 min read',
    tag: 'Engineering',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Visual Regression Testing: the missing piece in your CI pipeline',
    excerpt:
      "Screenshots catch what unit tests miss. Here's how we built a zero-config VRT workflow using Playwright.",
    author: 'Léa Dubois',
    date: 'June 14, 2025',
    readTime: '6 min read',
    tag: 'Product',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Designing for developer experience: lessons from 200 user interviews',
    excerpt:
      'Developers hate magic. They love clarity. Discover the 5 UX principles we extracted from months of research.',
    author: 'Léa Dubois',
    date: 'May 30, 2025',
    readTime: '5 min read',
    tag: 'Design',
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'From 0 to Series A: what we wish we knew about growth',
    excerpt:
      'Fundraising is a full-time job on top of your full-time job. Amina shares the playbook that got us to $3.2M ARR.',
    author: 'Amina Koné',
    date: 'May 12, 2025',
    readTime: '10 min read',
    tag: 'Company',
    cover: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'Building real-time collaboration with CRDTs in Rust',
    excerpt:
      'Why Operational Transforms failed us and how Conflict-free Replicated Data Types gave us true multiplayer editing.',
    author: 'Tom Fischer',
    date: 'April 29, 2025',
    readTime: '12 min read',
    tag: 'Engineering',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Announcing Nexus 3.0: the platform rebuild we had to do',
    excerpt:
      "We rewrote Nexus from scratch over 8 months. Here's what changed, what we kept, and why it was worth the risk.",
    author: 'Sarah Chen',
    date: 'April 10, 2025',
    readTime: '7 min read',
    tag: 'Company',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
]

const tagColors: Record<string, string> = {
  Engineering: 'bg-blue-100 text-blue-700',
  Product: 'bg-purple-100 text-purple-700',
  Design: 'bg-pink-100 text-pink-700',
  Company: 'bg-green-100 text-green-700',
}

export function tagColor(tag: string): string {
  return tagColors[tag] ?? 'bg-gray-100 text-gray-700'
}
