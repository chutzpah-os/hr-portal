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

// Builds hreflang alternates for pages that are actually translated across all locales.
// x-default → canonical EN URL.
function buildAlternates(path: string): Record<string, string> {
  return Object.fromEntries([
    ...routing.locales.map((l) => [l, `${BASE_URL}/${l}${path}`]),
    ['x-default', `${BASE_URL}/${routing.defaultLocale}${path}`],
  ])
}

// Generates one sitemap entry per locale for translated pages.
// Use only for pages whose content actually differs by locale.
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

// Static pages — UI is translated into all 5 locales.
const STATIC_PAGES: PageDef[] = [
  { path: '',            lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 1   },
  { path: '/about',      lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.9 },
  { path: '/portfolio',  lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.9 },
  { path: '/solutions',  lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.9 },
  { path: '/challenges', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.8 },
  { path: '/press',      lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.7 },
  { path: '/researches', lastModified: new Date('2026-05-01'), changeFrequency: 'monthly', priority: 0.7 },
  { path: '/writing',    lastModified: new Date('2026-05-01'), changeFrequency: 'monthly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : new Date('2026-01-01')

  const HIGH_PRIORITY_SLUGS = new Set([
    'how-cancer-works',
    'dlp-complete-guide-data-loss-prevention',
    'the-clock-is-dead-offensive-ai-killed-time-variable-cybersecurity',
  ])

  // Pages whose content is actually translated — localized to all 5 variants.
  const TRANSLATED_PAGES: PageDef[] = [
    { path: '/blog', lastModified: latestPostDate, changeFrequency: 'weekly',  priority: 0.8 },
    ...PRODUCTS.map((p) => ({
      path: `/solutions/${p.id}`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...CHALLENGES.map((c) => ({
      path: `/challenges/${c.id}`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  // Blog post pages — content is English-only.
  // Each post gets a single canonical EN URL. When translated posts are added,
  // move them into TRANSLATED_PAGES instead (or build per-slug hreflang maps).
  const enPosts = posts.filter((p) => p.lang === 'en')
  const blogPostEntries: MetadataRoute.Sitemap = enPosts.map((post) => ({
    url: `${BASE_URL}/en/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: HIGH_PRIORITY_SLUGS.has(post.slug) ? 0.8 : 0.7,
    alternates: {
      languages: {
        en: `${BASE_URL}/en/blog/${post.slug}`,
        'x-default': `${BASE_URL}/en/blog/${post.slug}`,
      },
    },
  }))

  return [
    ...localize(STATIC_PAGES),
    ...localize(TRANSLATED_PAGES),
    ...blogPostEntries,
  ]
}
