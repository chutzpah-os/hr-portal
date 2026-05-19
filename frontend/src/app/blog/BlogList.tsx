'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { PostMeta, PostCategory } from '@/lib/blog'

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

const PAGE_SIZE = 10

type CategoryFilter = 'all' | PostCategory

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200"
      style={active ? {
        backgroundColor: 'var(--accent)',
        color: '#fff',
      } : {
        border: '1px solid rgba(10,10,15,0.12)',
        color: 'var(--white-45)',
        backgroundColor: 'transparent',
      }}
    >
      {children}
    </button>
  )
}

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [order, setOrder] = useState<'newest' | 'oldest'>('newest')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const reset = () => setVisible(PAGE_SIZE)

  const filtered = category === 'all' ? posts : posts.filter((p) => p.category === category)
  const sorted = order === 'newest' ? filtered : [...filtered].reverse()
  const shown = sorted.slice(0, visible)
  const hasMore = visible < sorted.length

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
        {/* Order */}
        <div className="flex gap-2">
          <FilterButton active={order === 'newest'} onClick={() => { setOrder('newest'); reset() }}>Newest</FilterButton>
          <FilterButton active={order === 'oldest'} onClick={() => { setOrder('oldest'); reset() }}>Oldest</FilterButton>
        </div>

        {/* Separator */}
        <div style={{ width: '1px', backgroundColor: 'rgba(10,10,15,0.1)', alignSelf: 'stretch' }} />

        {/* Category */}
        <div className="flex gap-2">
          <FilterButton active={category === 'all'} onClick={() => { setCategory('all'); reset() }}>All</FilterButton>
          <FilterButton active={category === 'technical'} onClick={() => { setCategory('technical'); reset() }}>Technical</FilterButton>
          <FilterButton active={category === 'non-technical'} onClick={() => { setCategory('non-technical'); reset() }}>Non-Technical</FilterButton>
        </div>
      </div>

      {/* Post list */}
      <div>
        {shown.length === 0 && (
          <p className="text-sm py-10 text-center" style={{ color: 'var(--white-35)' }}>No posts found.</p>
        )}
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
                className="font-semibold mb-1.5 transition-colors duration-200 group-hover:opacity-70 line-clamp-2"
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
