import { blogApi, type Post } from '@/lib/api'
import BlogPostCard from './BlogPostCard'

export const revalidate = 60

async function getPosts(): Promise<Post[]> {
  try {
    return await blogApi.getPosts()
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main
      style={{ minHeight: '100svh', backgroundColor: 'rgb(0,0,0)', paddingTop: '7rem', paddingBottom: '5rem' }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1
          className="mb-2"
          style={{ color: 'var(--white-100)', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          Blog
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--white-50)' }}>
          Articles, reflections, and technical notes.
        </p>

        {posts.length === 0 ? (
          <p className="text-sm" style={{ color: 'var(--white-35)' }}>
            No posts published yet.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
