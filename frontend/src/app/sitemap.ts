import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { PRODUCTS } from '@/data/solutions'
import { CHALLENGES } from '@/data/challenges'
import { routing } from '@/i18n/routing'

const BASE_URL = 'https://hanielrolemberg.com'

type PageDef = {
  path: string
  lastModified: Date
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}

// Build the hreflang alternates map for a given path across all locales.
// x-default points to the default locale (en), as recommended by Google.
function buildAlternates(path: string): Record<string, string> {
  return Object.fromEntries([
    ...routing.locales.map((l) => [l, `${BASE_URL}/${l}${path}`]),
    ['x-default', `${BASE_URL}/${routing.defaultLocale}${path}`],
  ])
}

// Generates one sitemap entry per locale for each page, with hreflang alternates.
// Add a locale to routing.ts and it is covered here automatically.
function localize(pages: PageDef[]): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    pages.map((p) => ({
      url: `${BASE_URL}/${locale}${p.path}`,
      lastModified: p.lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: {
        languages: buildAlternates(p.path),
      },
    }))
  )
}

// Hardcoded last-meaningful-update dates for static pages.
// Update these when the page content actually changes — don't use new Date().
const STATIC_PAGES: PageDef[] = [
  {
    path: '',
    lastModified: new Date('2026-07-01'),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    path: '/about',
    lastModified: new Date('2026-07-01'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/portfolio',
    lastModified: new Date('2026-07-01'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/solutions',
    lastModified: new Date('2026-07-01'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/challenges',
    lastModified: new Date('2026-07-01'),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/press',
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/researches',
    lastModified: new Date('2026-05-01'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/writing',
    lastModified: new Date('2026-05-01'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  // /blog index: lastModified = date of most recent post
  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : new Date('2026-01-01')

  // Individual blog posts: use publication date as lastModified.
  const HIGH_PRIORITY_SLUGS = new Set([
    'how-cancer-works',
    'dlp-complete-guide-data-loss-prevention',
    'the-clock-is-dead-offensive-ai-killed-time-variable-cybersecurity',
  ])

  const dynamicPages: PageDef[] = [
    {
      path: '/blog',
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Lab (solutions) individual pages — translated 2026-07-01
    ...PRODUCTS.map((p) => ({
      path: `/solutions/${p.id}`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Challenge individual pages — translated 2026-07-01
    ...CHALLENGES.map((c) => ({
      path: `/challenges/${c.id}`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: HIGH_PRIORITY_SLUGS.has(post.slug) ? 0.8 : 0.7,
    })),
  ]

  return [...localize(STATIC_PAGES), ...localize(dynamicPages)]
}
