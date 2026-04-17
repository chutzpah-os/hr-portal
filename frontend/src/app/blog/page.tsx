'use client'

import { Suspense } from 'react'
import BlogPageContent from './BlogPageContent'

// Force this page to be client-only to avoid SSR issues
export const dynamic = 'force-dynamic'

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogPageSkeleton />}>
      <BlogPageContent />
    </Suspense>
  )
}

function BlogPageSkeleton() {
  return (
    <main style={{ minHeight: '100svh', backgroundColor: 'rgb(0,0,0)', paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-800 rounded w-32"></div>
          <div className="h-4 bg-gray-800 rounded w-64"></div>
          <div className="h-32 bg-gray-800 rounded"></div>
        </div>
      </div>
    </main>
  )
}
