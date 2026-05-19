import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

const BASE_URL = 'https://hanielrolemberg.com'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const url = `${BASE_URL}/blog/${slug}`

  return {
    title: `${post.title} — Haniel Rolemberg`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: ['Haniel Rolemberg'],
      images: [
        {
          url: `${BASE_URL}/images/Haniel-Rolemberg.jpeg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${BASE_URL}/images/Haniel-Rolemberg.jpeg`],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${BASE_URL}/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Haniel Rolemberg',
      url: BASE_URL,
    },
    image: `${BASE_URL}/images/Haniel-Rolemberg.jpeg`,
    publisher: {
      '@type': 'Person',
      name: 'Haniel Rolemberg',
      url: BASE_URL,
    },
  }

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>

        {/* Back link */}
        <Link
          href="/blog"
          className="text-[0.65rem] uppercase tracking-widest transition-opacity duration-200 hover:opacity-60 inline-block mb-10"
          style={{ color: 'var(--white-40)' }}
        >
          ← All posts
        </Link>

        {/* Header */}
        <h1
          className="font-bold mb-3"
          style={{
            color: 'var(--white-100)',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-syne)',
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </h1>
        <p
          className="text-xs uppercase tracking-widest mb-10"
          style={{ color: 'var(--white-35)' }}
        >
          {formatDate(post.date)}
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(10,10,15,0.08)', marginBottom: '2.5rem' }} />

        {/* Body */}
        <div className="prose-blog">
          {post.content
            .split(/\n\n+/)
            .filter((block) => block.trim())
            .map((block, i) => {
              const text = block.trim()
              if (text.startsWith('### ')) {
                return (
                  <h3 key={i} style={{ color: 'var(--white-100)', fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.75rem', marginTop: '2rem' }}>
                    {text.replace(/^### /, '')}
                  </h3>
                )
              }
              if (text.startsWith('## ')) {
                return (
                  <h2 key={i} style={{ color: 'var(--white-100)', fontFamily: 'var(--font-syne)', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem', marginTop: '2.5rem' }}>
                    {text.replace(/^## /, '')}
                  </h2>
                )
              }
              return <p key={i}>{text}</p>
            })}
        </div>
      </div>
    </main>
  )
}
