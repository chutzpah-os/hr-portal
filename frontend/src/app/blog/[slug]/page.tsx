import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return {
    title: `${post.title} — Haniel Rolemberg`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
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
            .filter((p) => p.trim())
            .map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
        </div>
      </div>
    </main>
  )
}
