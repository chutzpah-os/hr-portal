'use client'

import Link from 'next/link'

export default function BackLink() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-10 transition-colors duration-200"
      style={{ color: 'var(--white-40)' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-80)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-40)')}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Blog
    </Link>
  )
}