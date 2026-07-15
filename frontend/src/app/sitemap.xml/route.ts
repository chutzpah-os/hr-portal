import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'
import { PRODUCTS } from '@/data/solutions'
import { CHALLENGES } from '@/data/challenges'
import { routing } from '@/i18n/routing'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

const BASE_URL = 'https://www.hanielrolemberg.com'

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
    'the-day-cancer-stopped-being-a-word-and-became-my-mission',
    'dlp-complete-guide-data-loss-prevention',
    'the-clock-is-dead-offensive-ai-killed-time-variable-cybersecurity',
    'phone-gps-spoofing-emergency-alerts',
    '1k-miles-of-hope-ep-01-this-is-how-it-starts',
  ])

  const LIVE_SERIES_PREFIXES = ['1k-miles-of-hope-']

  const threeMonthsAgo = new Date()
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)

  function isLiveSeries(slug: string): boolean {
    return LIVE_SERIES_PREFIXES.some((prefix) => slug.startsWith(prefix))
  }

  function blogChangefreq(post: { slug: string; date: string }): ChangeFreq {
    if (isLiveSeries(post.slug)) return 'weekly'
    return new Date(post.date) >= threeMonthsAgo ? 'monthly' : 'yearly'
  }

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
      localeEntries(`/solutions/${p.id}`, '2026-07-06', 'monthly', 0.8),
    ),
    ...CHALLENGES.flatMap((c) =>
      localeEntries(`/challenges/${c.id}`, '2026-07-01', 'monthly', 0.8),
    ),
    // Blog posts — one entry per locale that has the post, with hreflang alternates
    ...(() => {
      // Group posts by slug to know which languages each post has
      const bySlug = new Map<string, Map<string, string>>() // slug → { lang → date }
      for (const p of posts) {
        if (!bySlug.has(p.slug)) bySlug.set(p.slug, new Map())
        bySlug.get(p.slug)!.set(p.lang, p.date)
      }

      const blogEntries: UrlEntry[] = []
      for (const [slug, langMap] of bySlug) {
        const enDate = langMap.get('en') ?? [...langMap.values()][0]
        const priority = HIGH_PRIORITY_SLUGS.has(slug) ? 0.8 : 0.7
        const changefreq = blogChangefreq({ slug, date: enDate })

        // Build alternates from available langs + x-default pointing to EN
        const alternates: Record<string, string> = {}
        for (const lang of langMap.keys()) {
          alternates[lang] = `${BASE_URL}/${lang}/blog/${slug}`
        }
        alternates['x-default'] = `${BASE_URL}/en/blog/${slug}`

        // One <url> per available language
        for (const [lang, date] of langMap) {
          blogEntries.push({
            loc: `${BASE_URL}/${lang}/blog/${slug}`,
            lastmod: date,
            changefreq,
            priority,
            alternates,
          })
        }
      }
      return blogEntries
    })(),
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
