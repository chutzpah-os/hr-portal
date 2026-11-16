import { getAllPosts, getPostBySlug, getPostLangs, formatDate } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Link } from '@/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getTranslations } from 'next-intl/server'

interface HowToStep {
  name: string
  text: string
}

interface HowToData {
  name: string
  description: string
  totalTime?: string
  step: { '@type': 'HowToStep'; position: number; name: string; text: string }[]
}

function howTo(name: string, description: string, steps: HowToStep[], totalTime?: string): HowToData {
  return {
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}

const HOWTO_SCHEMAS: Record<string, HowToData> = {
  'the-language-acquisition-formula': howTo(
    'How to acquire a language with the Language Acquisition Formula',
    'A 12-week, 7-stage method to acquire a new language, built on Acquisition = M + SR + CI + AO (Memorization, Spaced Repetition, Comprehensible Input, Active Output).',
    [
      { name: 'Planning', text: 'Write your why, your goal as an action, your fixed daily time slot, and record Video Zero.' },
      { name: 'Alphabet & sounds', text: 'Listen to and repeat each sound out loud, write each letter by hand, and build associations before learning any vocabulary.' },
      { name: 'Vocabulary', text: 'Memorize the ~200 most-used words in the language, each tied to a personal, vivid image instead of a flat translation.' },
      { name: 'Listening & reading', text: 'Work through seven short stories built from those words, listening to and reading each one until you can follow it with the audio without stopping.' },
      { name: 'Creating need', text: 'Use active listening and the Mirror Method to turn your own daily life into real, repeated practice.' },
      { name: 'Losing the fear', text: 'Practice Solo Immersion, then have a real, unscripted conversation with a real person.' },
      { name: 'Autonomy', text: 'Continue in four-week cycles — working through plateaus, fine-tuning grammar, and keeping the language in your routine.' },
    ],
    'P12W'
  ),
  'the-12-week-roadmap-to-fluency': howTo(
    'The 12-week roadmap of the Language Acquisition Formula',
    'Week-by-week breakdown of the 7 stages used to acquire a language in 12 weeks: Planning, Alphabet & sounds, Vocabulary, Listening & reading, Creating need, Losing the fear, and Autonomy.',
    [
      { name: 'Planning (Day 1)', text: 'Write your why, your goal as an action, your fixed daily time slot, and record Video Zero.' },
      { name: 'Alphabet & sounds (Week 1)', text: 'Listen to and repeat each sound out loud, write each letter by hand, and build associations before learning any vocabulary.' },
      { name: 'Vocabulary (Weeks 1–2)', text: 'Memorize the ~200 most-used words in the language, each tied to a personal, vivid image instead of a flat translation.' },
      { name: 'Listening & reading (Week 2)', text: 'Work through seven short stories built from those words, until you can follow each one with the audio without stopping.' },
      { name: 'Creating need (Weeks 3–8)', text: 'Use active listening and the Mirror Method to turn your own daily life into real, repeated practice.' },
      { name: 'Losing the fear (Weeks 9–12)', text: 'Practice Solo Immersion, then have a real, unscripted conversation with a real person.' },
      { name: 'Autonomy (Ongoing)', text: 'Continue in four-week cycles — working through plateaus, fine-tuning grammar, and keeping the language in your routine.' },
    ],
    'P12W'
  ),
  'why-the-order-of-the-stages-matters': howTo(
    'The correct order of the Language Acquisition Formula’s 6 stages',
    'Why each stage of the Language Acquisition Formula has to happen before the next — skipping ahead (e.g. conversation before vocabulary, or grammar before real usage) undermines the stages that follow.',
    [
      { name: 'Alphabet & sounds', text: 'Comes first so no word gets memorized later with the wrong pronunciation.' },
      { name: 'Vocabulary', text: 'The ~200 most-used words give you material to actually practice with in the next stage.' },
      { name: 'Listening & reading', text: 'Needs the vocabulary from stage 2 already in place to be comprehensible rather than noise.' },
      { name: 'Creating need', text: 'Builds on stories and vocabulary already acquired, turning them into real, personal use.' },
      { name: 'Losing the fear', text: 'Only works once there is already something to say — speaking before this stage leads to a one-word freeze.' },
      { name: 'Autonomy', text: 'Grammar as fine-tuning only makes sense once you are already producing real mistakes to correct.' },
    ]
  ),
  'm-sr-ci-ao-explained': howTo(
    'How the M + SR + CI + AO formula works',
    'The four components of the Language Acquisition Formula and the foundation underneath them: Planning, Memorization, Spaced Repetition, Comprehensible Input, and Active Output.',
    [
      { name: 'Planning (the foundation)', text: 'A weekly plan/do/check/adjust cycle and a Video Zero recording, so progress becomes visible against a real starting point.' },
      { name: 'M — Memorization', text: 'Learn the ~200 most-used words in the language, each tied to a vivid personal image instead of a flat translation.' },
      { name: 'SR — Spaced Repetition', text: 'Review each word right before you would forget it, with the gap growing every time you get it right.' },
      { name: 'CI — Comprehensible Input', text: 'Listen to and read short stories built from those same words until you understand every line, before touching native-speaker material.' },
      { name: 'AO — Active Output', text: 'Speak what you have absorbed, starting with the Mirror Method, then alone out loud, then with a real person.' },
    ]
  ),
  'the-mirror-method-explained': howTo(
    'How the Mirror Method works',
    'A notebook-based technique from the Language Acquisition Formula that turns real moments in your day into practiced sentences in the language you are acquiring.',
    [
      { name: 'Wait for the situation', text: 'Notice when your day actually calls for a sentence — needing to say you will be late, or need something.' },
      { name: 'Try to build it in your head', text: 'Attempt the sentence with the words you already know, even if it comes out incomplete.' },
      { name: 'Translate it if you cannot', text: 'Look up the sentence and write it in your notebook, native language on one side, new language on the other.' },
      { name: 'Say the sentence', text: 'Say it out loud, or in your head, inside the real situation it came from.' },
      { name: 'Repeat it when the situation returns', text: 'Try to recall the sentence from memory before checking the translation again.' },
      { name: 'Reuse the structure', text: 'Swap one word in a sentence you already have to produce a new one for free.' },
    ]
  ),
}

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

const BASE_URL = 'https://hanielrolemberg.com'

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
  if (!post) notFound()
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

  // HowTo schema for the Language Acquisition Formula cluster's process-shaped
  // posts — these describe a literal sequence of steps, which is exactly what
  // HowTo targets for "how to acquire/learn a language" style queries. Kept
  // in English across locales (schema metadata, not visible page content) —
  // a reasonable simplification given the small number of pages involved.
  const howToData = HOWTO_SCHEMAS[slug]
  const howToSchema = howToData ? { '@context': 'https://schema.org', '@type': 'HowTo', ...howToData } : null

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
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
