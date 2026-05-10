import { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { blogPosts } from '@/lib/blog'

const BASE_URL = 'https://cutajconstruction.co.uk'

const areas = [
  'chelsea', 'fulham', 'kensington', 'brixton', 'clapham',
  'islington', 'hackney', 'wandsworth', 'battersea', 'hammersmith',
  'putney', 'wimbledon',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: BASE_URL, changeFrequency: 'monthly' as const, priority: 1.0, lastModified: now },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly' as const, priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/renovations`, changeFrequency: 'monthly' as const, priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/renovations/kitchen`, changeFrequency: 'monthly' as const, priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/renovations/bathroom`, changeFrequency: 'monthly' as const, priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/renovations/refurbishments`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/renovations/extensions`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/renovations/interior`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/projects`, changeFrequency: 'weekly' as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly' as const, priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/areas`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified: now },
  ]

  const projectPages = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: now,
  }))

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(p.publishedAt),
  }))

  const areaPages = areas.map((area) => ({
    url: `${BASE_URL}/areas/${area}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    lastModified: now,
  }))

  return [...staticPages, ...projectPages, ...blogPages, ...areaPages]
}
