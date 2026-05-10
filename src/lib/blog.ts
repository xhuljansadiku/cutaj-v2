export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  publishedAt: string
  image: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-a-kitchen-renovation-cost-london-2025',
    title: 'How Much Does a Kitchen Renovation Cost in London? (2025 Guide)',
    excerpt:
      'A complete, honest breakdown of kitchen renovation costs in London — from basic refreshes to full luxury redesigns. Includes typical price ranges, what drives costs up, and how to budget smartly.',
    content: '',
    category: 'Cost Guides',
    readTime: '8 min read',
    publishedAt: '2025-03-15',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
    featured: true,
  },
  {
    slug: 'bathroom-renovation-cost-london-2025',
    title: 'Bathroom Renovation Cost London 2025: Complete Price Guide',
    excerpt:
      'Everything you need to know about bathroom renovation costs in London. From en-suite refreshes to full luxury spa bathrooms — real price ranges from a London specialist.',
    content: '',
    category: 'Cost Guides',
    readTime: '7 min read',
    publishedAt: '2025-02-28',
    image: 'https://images.unsplash.com/photo-1620626011761-996317702519?w=800&q=80',
    featured: true,
  },
  {
    slug: 'how-to-plan-a-kitchen-renovation-london',
    title: 'How to Plan a Kitchen Renovation in London: Step-by-Step',
    excerpt:
      'Planning a kitchen renovation in London? This step-by-step guide walks you through everything — from setting a budget and choosing a contractor to the build timeline and final snagging.',
    content: '',
    category: 'Planning Guides',
    readTime: '10 min read',
    publishedAt: '2025-02-10',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
    featured: false,
  },
  {
    slug: 'open-plan-kitchen-ideas-london-homes',
    title: '10 Open Plan Kitchen Ideas That Work Brilliantly in London Homes',
    excerpt:
      'Inspiration for open plan kitchens that suit the typical London terrace or flat — space-smart layouts, bifold doors, skylights, and design choices that actually work.',
    content: '',
    category: 'Design Inspiration',
    readTime: '6 min read',
    publishedAt: '2025-01-20',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    featured: false,
  },
  {
    slug: 'do-you-need-planning-permission-kitchen-extension',
    title: 'Do You Need Planning Permission for a Kitchen Extension in London?',
    excerpt:
      'A clear guide to planning permission rules for kitchen extensions in London — permitted development rights, when you need full planning permission, and what a party wall agreement means.',
    content: '',
    category: 'Planning Guides',
    readTime: '5 min read',
    publishedAt: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    featured: false,
  },
]

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
