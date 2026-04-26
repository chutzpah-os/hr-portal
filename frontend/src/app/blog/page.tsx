import { Suspense } from 'react'
import { blogApi, type Post } from '@/lib/api'
import BlogPageContent from './BlogPageContent'

export const revalidate = 60

export default async function BlogPage() {
  let posts: Post[] = []
  try {
    posts = await blogApi.getPosts()
  } catch {
    posts = []
  }

  return (
    <Suspense fallback={<BlogPageSkeleton />}>
      <BlogPageContent initialPosts={posts} />
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
