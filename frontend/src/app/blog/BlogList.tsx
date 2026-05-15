'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/blog'

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

const PAGE_SIZE = 10

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [order, setOrder] = useState<'newest' | 'oldest'>('newest')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const sorted = order === 'newest' ? posts : [...posts].reverse()
  const shown = sorted.slice(0, visible)
  const hasMore = visible < sorted.length

  return (
    <>
      {/* Filter */}
      <div className="flex gap-2 mb-10">
        {(['newest', 'oldest'] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => { setOrder(opt); setVisible(PAGE_SIZE) }}
            className="text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200"
            style={order === opt ? {
              backgroundColor: 'var(--accent)',
              color: '#fff',
            } : {
              border: '1px solid rgba(10,10,15,0.12)',
              color: 'var(--white-45)',
              backgroundColor: 'transparent',
            }}
          >
            {opt === 'newest' ? 'Newest' : 'Oldest'}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div>
        {shown.map((post, i) => (
          <article
            key={post.slug}
            style={{
              borderTop: i === 0 ? '1px solid rgba(10,10,15,0.08)' : undefined,
              borderBottom: '1px solid rgba(10,10,15,0.08)',
              padding: '2rem 0',
            }}
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2
                className="font-semibold mb-1.5 transition-colors duration-200 group-hover:opacity-70"
                style={{
                  color: 'var(--white-100)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-syne)',
                }}
              >
                {post.title}
              </h2>
            </Link>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--white-35)' }}
            >
              {formatDate(post.date)}
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--white-60)' }}
            >
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--accent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="text-xs uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-200"
            style={{
              border: '1px solid rgba(10,10,15,0.15)',
              color: 'var(--white-55)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(10,10,15,0.15)'
              e.currentTarget.style.color = 'var(--white-55)'
            }}
          >
            Load more
          </button>
        </div>
      )}
    </>
  )
}
