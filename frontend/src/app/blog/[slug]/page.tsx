import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

function renderInline(text: string): ReactNode {
  const segments = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
  return segments.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
    if (linkMatch) {
      const before = part.slice(0, part.indexOf('['))
      const after = part.slice(part.indexOf(')') + 1)
      return (
        <span key={i}>
          {before}
          <a href={linkMatch[2]} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{linkMatch[1]}</a>
          {after}
        </span>
      )
    }
    return part
  })
}

function renderBlock(block: string, i: number): ReactNode {
  const text = block.trim()

  if (text === '***' || text === '---' || text === '___') {
    return <hr key={i} style={{ border: 'none', borderTop: '1px solid rgba(10,10,15,0.08)', margin: '2.5rem 0' }} />
  }
  if (text.startsWith('### ')) {
    return (
      <h3 key={i} style={{ color: 'var(--white-100)', fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.75rem', marginTop: '2rem' }}>
        {renderInline(text.replace(/^### /, ''))}
      </h3>
    )
  }
  if (text.startsWith('## ')) {
    return (
      <h2 key={i} style={{ color: 'var(--white-100)', fontFamily: 'var(--font-syne)', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem', marginTop: '2.5rem' }}>
        {renderInline(text.replace(/^## /, ''))}
      </h2>
    )
  }
  if (text.startsWith('> ')) {
    return (
      <blockquote key={i} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', margin: '1.5rem 0', color: 'var(--white-60)', fontStyle: 'italic' }}>
        {renderInline(text.replace(/^> /, ''))}
      </blockquote>
    )
  }
  if (text.startsWith('|')) {
    const lines = text.split('\n').filter((l) => l.trim() && !/^\|[\s\-:|]+\|$/.test(l.trim()))
    const rows = lines.map((l) => l.split('|').slice(1, -1).map((c) => c.trim()))
    const [header, ...body] = rows
    return (
      <div key={i} style={{ overflowX: 'auto', marginBottom: '1.6rem', marginTop: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
          <thead>
            <tr>
              {header.map((cell, j) => (
                <th key={j} style={{ borderBottom: '2px solid rgba(10,10,15,0.12)', padding: '0.5rem 0.75rem', textAlign: 'left', color: 'var(--white-90)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {renderInline(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, r) => (
              <tr key={r} style={{ borderBottom: '1px solid rgba(10,10,15,0.06)' }}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: '0.5rem 0.75rem', color: 'var(--white-60)', verticalAlign: 'top' }}>
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (/^[\*\-] /.test(text)) {
    const items = text.split('\n').filter((l) => l.trim())
    return (
      <ul key={i} style={{ paddingLeft: '1.25rem', marginBottom: '1.6rem', color: 'rgba(10,10,15,0.72)' }}>
        {items.map((item, j) => (
          <li key={j} style={{ marginBottom: '0.4rem', lineHeight: 1.75 }}>
            {renderInline(item.replace(/^[\*\-]\s+/, ''))}
          </li>
        ))}
      </ul>
    )
  }
  return <p key={i}>{renderInline(text)}</p>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

const BASE_URL = 'https://hanielrolemberg.com'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/blog/${slug}`

  return {
    title: `${post.title} — Haniel Rolemberg`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Haniel Rolemberg'],
      tags: post.tags,
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
  if (!post) redirect('/blog')

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    articleSection: post.category === 'technical' ? 'Technology' : 'Personal',
    inLanguage: 'en-US',
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
    author: {
      '@type': 'Person',
      name: 'Haniel Rolemberg',
      url: BASE_URL,
      sameAs: [
        'https://www.linkedin.com/in/hanielrolemberg/',
        'https://github.com/hanielrolemberg',
      ],
    },
    image: `${BASE_URL}/images/Haniel-Rolemberg.jpeg`,
    publisher: {
      '@type': 'Person',
      name: 'Haniel Rolemberg',
      url: BASE_URL,
      sameAs: ['https://www.linkedin.com/in/hanielrolemberg/'],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  }

  const faqSchema = post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  } : null

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
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
            .map((block, i) => renderBlock(block, i))}
        </div>
      </div>
    </main>
  )
}
