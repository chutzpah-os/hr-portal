'use client'

import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function BlogTeaser() {
  return (
    <SectionWrapper id="blog" fullscreen={false}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <h2 style={{ color: 'var(--white-100)' }}>Blog</h2>
          <p className="text-sm" style={{ color: 'var(--white-50)' }}>
            Articles, reflections, and technical notes.
          </p>
        </div>

        <div
          className="rounded p-8 md:p-12 flex flex-col items-center justify-center text-center"
          style={{
            border: '1px solid var(--white-10)',
            backgroundColor: 'rgba(5, 5, 5, 0.9)',
            minHeight: '180px',
          }}
        >
          <p className="text-sm mb-6" style={{ color: 'var(--white-40)' }}>
            Posts coming soon.
          </p>
          <Link href="/blog" className="cta-button text-xs">
            Read the blog
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
