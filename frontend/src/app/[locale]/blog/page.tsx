import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getAllPosts } from '@/lib/blog'
import { buildAlternates } from '@/lib/metadata'
import BlogList from './BlogList'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Blog — Haniel Rolemberg',
    description: 'Articles on cybersecurity, AI, data engineering, health, philosophy, and personal challenges. Technical guides, reflections, and live project updates.',
    alternates: buildAlternates(locale, '/blog'),
    openGraph: {
      title: 'Blog — Haniel Rolemberg',
      description: 'Articles on cybersecurity, AI, data engineering, health, philosophy, and personal challenges.',
      url: `https://www.hanielrolemberg.com/${locale}/blog`,
      type: 'website',
    },
  }
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const posts = getAllPosts()
  const t = await getTranslations('blog')

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
        <p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-3 font-medium"
          style={{ color: 'var(--white-35)' }}
        >
          {t('sectionLabel')}
        </p>
        <h1
          className="font-bold mb-4"
          style={{
            color: 'var(--white-100)',
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-syne)',
          }}
        >
          {t('title')}
        </h1>
        <p
          className="text-base leading-relaxed mb-10 max-w-xl"
          style={{ color: 'var(--white-55)' }}
        >
          {t('subtitle')}
        </p>
        <BlogList posts={posts} />
      </div>
    </main>
  )
}
