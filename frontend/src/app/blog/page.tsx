import Link from 'next/link'
import { blogApi, type Post } from '@/lib/api'

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
          Artigos, reflexões e notas técnicas.
        </p>

        {posts.length === 0 ? (
          <p className="text-sm" style={{ color: 'var(--white-35)' }}>
            Nenhum post publicado ainda.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
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
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{ border: '1px solid var(--white-15)', color: 'var(--white-40)' }}
                      >
                        {tag}
                      </span>
                    ))}
                    {post.publishedAt && (
                      <span className="text-xs ml-auto" style={{ color: 'var(--white-35)' }}>
                        {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
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
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
