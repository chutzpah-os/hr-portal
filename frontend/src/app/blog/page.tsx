import { getAllPosts } from '@/lib/blog'
import BlogList from './BlogList'

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
        <p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-3 font-medium"
          style={{ color: 'var(--white-35)' }}
        >
          Blog
        </p>
        <h1
          className="font-bold mb-10"
          style={{
            color: 'var(--white-100)',
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-syne)',
          }}
        >
          Blog
        </h1>
        <BlogList posts={posts} />
      </div>
    </main>
  )
}
