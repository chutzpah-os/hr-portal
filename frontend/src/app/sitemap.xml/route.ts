import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'
import { PRODUCTS } from '@/data/solutions'
import { CHALLENGES } from '@/data/challenges'
import { routing } from '@/i18n/routing'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

const BASE_URL = 'https://hanielrolemberg.com'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

interface UrlEntry {
  loc: string
  lastmod: string
  changefreq: ChangeFreq
  priority: number
  alternates?: Record<string, string>
}

function buildAlternates(path: string): Record<string, string> {
  return Object.fromEntries([
    ...routing.locales.map((l) => [l, `${BASE_URL}/${l}${path}`]),
    ['x-default', `${BASE_URL}/${routing.defaultLocale}${path}`],
  ])
}

function localeEntries(
  path: string,
  lastmod: string,
  changefreq: ChangeFreq,
  priority: number,
): UrlEntry[] {
  const alternates = buildAlternates(path)
  return routing.locales.map((locale) => ({
    loc: `${BASE_URL}/${locale}${path}`,
    lastmod,
    changefreq,
    priority,
    alternates,
  }))
}

function renderEntry(e: UrlEntry): string {
  const alts = e.alternates
    ? Object.entries(e.alternates)
        .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`)
        .join('\n')
    : ''
  return [
    '  <url>',
    `    <loc>${e.loc}</loc>`,
    `    <lastmod>${e.lastmod}</lastmod>`,
    `    <changefreq>${e.changefreq}</changefreq>`,
    `    <priority>${e.priority}</priority>`,
    ...(alts ? [alts] : []),
    '  </url>',
  ].join('\n')
}

export async function GET() {
  const posts = getAllPosts()
  const latestPostDate = posts.length > 0 ? posts[0].date : '2026-01-01'

  const HIGH_PRIORITY_SLUGS = new Set([
    'how-cancer-works',
    'dlp-complete-guide-data-loss-prevention',
    'the-clock-is-dead-offensive-ai-killed-time-variable-cybersecurity',
  ])

  const entries: UrlEntry[] = [
    // Static pages — UI translated into all 5 locales
    ...localeEntries('', '2026-07-01', 'monthly', 1),
    ...localeEntries('/about', '2026-07-01', 'monthly', 0.9),
    ...localeEntries('/portfolio', '2026-07-01', 'monthly', 0.9),
    ...localeEntries('/solutions', '2026-07-01', 'monthly', 0.9),
    ...localeEntries('/challenges', '2026-07-01', 'monthly', 0.8),
    ...localeEntries('/press', '2026-04-01', 'monthly', 0.7),
    ...localeEntries('/researches', '2026-05-01', 'monthly', 0.7),
    ...localeEntries('/writing', '2026-05-01', 'monthly', 0.7),
    // Translated dynamic pages
    ...localeEntries('/blog', latestPostDate, 'weekly', 0.8),
    ...PRODUCTS.flatMap((p) =>
      localeEntries(`/solutions/${p.id}`, '2026-07-01', 'monthly', 0.8),
    ),
    ...CHALLENGES.flatMap((c) =>
      localeEntries(`/challenges/${c.id}`, '2026-07-01', 'monthly', 0.8),
    ),
    // Blog posts — EN canonical only (content not yet translated)
    ...posts
      .filter((p) => p.lang === 'en')
      .map((post) => ({
        loc: `${BASE_URL}/en/blog/${post.slug}`,
        lastmod: post.date,
        changefreq: 'yearly' as const,
        priority: HIGH_PRIORITY_SLUGS.has(post.slug) ? 0.8 : 0.7,
        alternates: {
          en: `${BASE_URL}/en/blog/${post.slug}`,
          'x-default': `${BASE_URL}/en/blog/${post.slug}`,
        },
      })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(renderEntry).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
