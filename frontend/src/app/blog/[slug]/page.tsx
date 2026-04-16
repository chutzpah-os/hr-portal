import { notFound } from 'next/navigation'
import { blogApi } from '@/lib/api'
import BackLink from '../BackLink'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = await blogApi.getPost(slug)
  } catch {
    notFound()
  }

  if (!post || !post.published) notFound()

  return (
    <main
      style={{ minHeight: '100svh', backgroundColor: 'rgb(0,0,0)', paddingTop: '7rem', paddingBottom: '5rem' }}
    >
      <article className="max-w-2xl mx-auto px-6 md:px-10">
        {/* Back */}
        <BackLink />

        {/* Tags & date */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {post.tags.map((tag: string) => (
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
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        {/* Title */}
        <h1
          className="mb-4 normal-case"
          style={{
            color: 'var(--white-100)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            lineHeight: '1.15',
            letterSpacing: 'normal',
            fontWeight: 700,
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-base mb-10 leading-relaxed" style={{ color: 'var(--white-55)' }}>
          {post.excerpt}
        </p>

        <hr style={{ borderColor: 'var(--white-10)', marginBottom: '2.5rem' }} />

        {/* Content — rendered as plain text (markdown renderer can be added later) */}
        <div
          className="text-sm leading-loose whitespace-pre-wrap"
          style={{ color: 'var(--white-75)' }}
        >
          {post.content}
        </div>
      </article>
    </main>
  )
}
