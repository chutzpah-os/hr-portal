'use client'

import Link from 'next/link'
import { type Post } from '@/lib/api'

interface BlogPostCardProps {
  post: Post
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article
        className="rounded p-6 transition-all duration-300"
        style={{
          border: '1px solid var(--white-10)',
          backgroundColor: 'rgba(5,5,5,0.9)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'var(--white-25)'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'var(--white-10)'
          el.style.transform = 'translateY(0)'
        }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {/* Category Badge */}
          {post.category && (
            <span
              className="text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded font-medium"
              style={{
                backgroundColor: post.category === 'Technical'
                  ? 'rgba(59, 130, 246, 0.15)'
                  : 'rgba(16, 185, 129, 0.15)',
                border: `1px solid ${post.category === 'Technical'
                  ? 'rgba(59, 130, 246, 0.3)'
                  : 'rgba(16, 185, 129, 0.3)'}`,
                color: post.category === 'Technical'
                  ? '#93C5FD'
                  : '#6EE7B7',
              }}
            >
              {post.category}
            </span>
          )}

          {/* Tags */}
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] uppercase tracking-widest px-2 py-0.5 rounded"
              style={{ border: '1px solid var(--white-15)', color: 'var(--white-40)' }}
            >
              {tag}
            </span>
          ))}

          {/* Date */}
          {post.publishedAt && (
            <span className="text-xs ml-auto" style={{ color: 'var(--white-35)' }}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          )}
        </div>
        <h2
          className="mb-2 text-base font-bold normal-case"
          style={{ color: 'var(--white-90)', letterSpacing: 'normal' }}
        >
          {post.title}
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--white-55)' }}>
          {post.excerpt}
        </p>
      </article>
    </Link>
  )
}