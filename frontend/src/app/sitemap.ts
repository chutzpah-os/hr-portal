import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { PRODUCTS } from '@/data/solutions'
import { CHALLENGES } from '@/data/challenges'

const BASE_URL = 'https://hanielrolemberg.com'

// Hardcoded last-meaningful-update dates for static pages.
// Update these when the page content actually changes — don't use new Date().
const STATIC_PAGES: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date('2026-06-20'),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date('2026-05-01'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/portfolio`,
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/solutions`,
    lastModified: new Date('2026-06-20'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/challenges`,
    lastModified: new Date('2026-06-20'),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/press`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/researches`,
    lastModified: new Date('2026-05-01'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/writing`,
    lastModified: new Date('2026-05-01'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  // /blog index: lastModified = date of most recent post
  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : new Date('2026-01-01')

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Individual blog posts: use publication date as lastModified.
  // Mark long-form guides (higher word count / strategic content) with priority 0.8.
  const HIGH_PRIORITY_SLUGS = new Set([
    'how-cancer-works',
    'dlp-complete-guide-data-loss-prevention',
    'the-clock-is-dead-offensive-ai-killed-time-variable-cybersecurity',
  ])

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: HIGH_PRIORITY_SLUGS.has(post.slug) ? 0.8 : 0.7,
  }))

  // Solution pages: stable content, real date from data file last update
  const products: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${BASE_URL}/solutions/${p.id}`,
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Challenge pages
  const challenges: MetadataRoute.Sitemap = CHALLENGES.map((c) => ({
    url: `${BASE_URL}/challenges/${c.id}`,
    lastModified: new Date('2026-06-20'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    ...STATIC_PAGES,
    ...blogIndex,
    ...products,
    ...challenges,
    ...blogPosts,
  ]
}
