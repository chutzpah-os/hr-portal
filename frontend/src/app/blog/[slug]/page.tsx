import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { blogApi, type Post } from '@/lib/api'
import BackLink from '../BackLink'

export const revalidate = 60

const BASE_URL = 'https://hanielrolemberg.com'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await blogApi.getPost(slug)
    const url = `${BASE_URL}/blog/${post.slug}`
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: url },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url,
        type: 'article',
        publishedTime: post.publishedAt ?? undefined,
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    }
  } catch {
    return {}
  }
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Haniel Rolemberg',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Haniel Rolemberg',
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `${BASE_URL}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  }

  return (
    <main
      style={{ minHeight: '100svh', backgroundColor: 'rgb(0,0,0)', paddingTop: '7rem', paddingBottom: '5rem' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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

// Corrigido: Agora usa o tipo 'Post' em vez de 'any' para satisfazer o ESLint na Vercel
export async function generateStaticParams() {
  try {
    const posts = await blogApi.getPosts()
    return posts.map((post: Post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}