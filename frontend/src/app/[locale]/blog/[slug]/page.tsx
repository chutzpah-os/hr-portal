import { getAllPosts, getPostBySlug, getPostLangs, formatDate } from '@/lib/blog'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getTranslations } from 'next-intl/server'

function renderInline(text: string): ReactNode {
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g
  const parts: ReactNode[] = []
  let lastIndex = 0
  let key = 0
  let match = regex.exec(text)
  while (match !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>)
    } else if (match[2] !== undefined) {
      parts.push(<em key={key++}>{match[2]}</em>)
    } else {
      const href = match[4]
      const isAnchor = href.startsWith('#')
      parts.push(
        <a key={key++} href={href}
           target={isAnchor ? '_self' : '_blank'}
           rel={isAnchor ? undefined : 'noopener noreferrer'}
           style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
          {match[3]}
        </a>
      )
    }
    lastIndex = match.index + match[0].length
    match = regex.exec(text)
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  if (parts.length === 0) return text
  if (parts.length === 1) return parts[0]
  return <>{parts}</>
}

function renderBlock(block: string, i: number): ReactNode {
  const text = block.trim()

  if (/^[\*\-\_]{3,}$/.test(text)) {
    return <hr key={i} style={{ border: 'none', borderTop: '1px solid rgba(10,10,15,0.08)', margin: '2.5rem 0' }} />
  }
  if (text.startsWith('#### ')) {
    const [firstLine, ...rest] = text.split('\n')
    const answer = rest.join('\n').trim()
    return (
      <div key={i}>
        <h4 style={{ color: 'var(--white-90)', fontFamily: 'var(--font-syne)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          {renderInline(firstLine.replace(/^#### /, ''))}
        </h4>
        {answer && <p style={{ textTransform: 'none', lineHeight: 1.75, marginBottom: '1rem', fontWeight: 'normal' }}>{renderInline(answer)}</p>}
      </div>
    )
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
  if (text.startsWith('![')) {
    const imgMatch = text.match(/^!\[([^\]]*)\]\((.+)\)$/)
    if (imgMatch) {
      return (
        <figure key={i} style={{ margin: '2rem 0', textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgMatch[2]} alt={imgMatch[1]} style={{ maxWidth: '100%', borderRadius: '6px', display: 'inline-block' }} />
          {imgMatch[1] && (
            <figcaption style={{ fontSize: '0.7rem', color: 'var(--white-40)', marginTop: '0.5rem', fontStyle: 'italic', textTransform: 'none' }}>
              {imgMatch[1]}
            </figcaption>
          )}
        </figure>
      )
    }
  }
  if (text.startsWith('>')) {
    const innerLines = text.split('\n').map((l) => l.replace(/^>\s?/, '')).filter((l) => l.trim())
    return (
      <blockquote key={i} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', margin: '1.5rem 0', color: 'var(--white-60)', fontStyle: 'italic' }}>
        {innerLines.map((line, j) => (
          <p key={j} style={{ margin: j > 0 ? '0.5rem 0 0' : '0' }}>{renderInline(line)}</p>
        ))}
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
  if (/^\d+\. /.test(text)) {
    const items = text.split('\n').filter((l) => /^\d+\./.test(l.trim()))
    return (
      <ol key={i} style={{ paddingLeft: '1.5rem', marginBottom: '1.6rem', color: 'var(--white-60)', listStyleType: 'decimal', textTransform: 'none' }}>
        {items.map((item, j) => (
          <li key={j} style={{ marginBottom: '0.4rem', lineHeight: 1.75, textTransform: 'none', fontFamily: 'inherit', fontWeight: 'normal' }}>
            {renderInline(item.replace(/^\d+\.\s+/, ''))}
          </li>
        ))}
      </ol>
    )
  }
  if (/^[\*\-] /.test(text)) {
    const items = text.split('\n').filter((l) => l.trim())
    return (
      <ul key={i} style={{ paddingLeft: '1.25rem', marginBottom: '1.6rem', color: 'var(--white-60)', textTransform: 'none' }}>
        {items.map((item, j) => (
          <li key={j} style={{ marginBottom: '0.4rem', lineHeight: 1.75, textTransform: 'none', fontFamily: 'inherit', fontWeight: 'normal' }}>
            {renderInline(item.replace(/^[\*\-]\s+/, ''))}
          </li>
        ))}
      </ul>
    )
  }
  return <p key={i} style={{ textTransform: 'none', lineHeight: 1.75, marginBottom: '1rem' }}>{renderInline(text)}</p>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

const BASE_URL = 'https://www.hanielrolemberg.com'

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)
  if (!post) return {}

  // Canonical points to the locale that actually has the file; fallback posts point to EN
  const canonicalLocale = post.lang === locale ? locale : 'en'
  const url = `${BASE_URL}/${canonicalLocale}/blog/${slug}`

  // hreflang alternates only for locales that have the post file
  const postLangs = getPostLangs(slug)
  const languages: Record<string, string> = Object.fromEntries(
    postLangs.map((l) => [l, `${BASE_URL}/${l}/blog/${slug}`])
  )
  if (postLangs.includes('en')) languages['x-default'] = `${BASE_URL}/en/blog/${slug}`

  return {
    title: `${post.title} — Haniel Rolemberg`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url, languages },
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

export default async function PostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)
  if (!post) redirect('/blog')
  const t = await getTranslations('blog')

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
          {t('backAllPosts')}
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
          {formatDate(post.date, locale)}
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
