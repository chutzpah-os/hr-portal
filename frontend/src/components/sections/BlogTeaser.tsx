'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { blogClientApi, type Post } from '@/lib/api'

const MAX_ATTEMPTS = 12
const RETRY_INTERVAL = 5000

function TeaserSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="rounded-lg p-8 border" style={{ border: '1px solid var(--white-8)', backgroundColor: 'rgba(5,5,5,0.9)' }}>
        <div className="h-3 rounded w-20 mb-4" style={{ backgroundColor: 'var(--white-10)' }} />
        <div className="h-5 rounded w-2/3 mb-3" style={{ backgroundColor: 'var(--white-10)' }} />
        <div className="h-3 rounded w-full mb-2" style={{ backgroundColor: 'var(--white-8)' }} />
        <div className="h-3 rounded w-1/2" style={{ backgroundColor: 'var(--white-8)' }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map(i => (
          <div key={i} className="rounded p-6 border" style={{ border: '1px solid var(--white-8)', backgroundColor: 'rgba(5,5,5,0.9)' }}>
            <div className="h-3 rounded w-16 mb-3" style={{ backgroundColor: 'var(--white-10)' }} />
            <div className="h-4 rounded w-3/4 mb-2" style={{ backgroundColor: 'var(--white-10)' }} />
            <div className="h-3 rounded w-full" style={{ backgroundColor: 'var(--white-8)' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BlogTeaser() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let attempts = 0
    let timer: ReturnType<typeof setTimeout>
    let cancelled = false

    const fetchPosts = async () => {
      try {
        const data = await blogClientApi.getPosts()
        if (cancelled) return
        const recent = data
          .filter(p => p.published)
          .sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime())
          .slice(0, 3)
        setPosts(recent)
        setLoading(false)
      } catch {
        if (cancelled) return
        attempts++
        if (attempts < MAX_ATTEMPTS) {
          timer = setTimeout(fetchPosts, RETRY_INTERVAL)
        } else {
          setLoading(false)
        }
      }
    }

    fetchPosts()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return (
    <SectionWrapper id="blog" fullscreen={false}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <h2 style={{ color: 'var(--white-100)' }}>Blog</h2>
          <p className="text-sm" style={{ color: 'var(--white-50)' }}>
            Articles, reflections, and technical notes.
          </p>
        </div>

        {loading ? (
          <TeaserSkeleton />
        ) : posts.length === 0 ? (
          <div
            className="rounded p-8 md:p-12 flex flex-col items-center justify-center text-center"
            style={{ border: '1px solid var(--white-10)', backgroundColor: 'rgba(5,5,5,0.9)', minHeight: '180px' }}
          >
            <p className="text-sm mb-6" style={{ color: 'var(--white-40)' }}>
              Posts coming soon.
            </p>
            <Link href="/blog" className="cta-button text-xs">
              Read the blog
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              <div
                className="rounded-lg p-8 border group hover:border-opacity-50 transition-all duration-300"
                style={{ border: '1px solid var(--white-15)', backgroundColor: 'rgba(5,5,5,0.9)' }}
              >
                <Link href={`/blog/${posts[0].slug}`} className="block">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {posts[0].tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: 'var(--white-8)', color: 'var(--white-50)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="font-medium group-hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--white-100)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: '1.2' }}
                    >
                      {posts[0].title}
                    </h3>
                    <p
                      className="line-clamp-3"
                      style={{ color: 'var(--white-60)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', lineHeight: '1.5' }}
                    >
                      {posts[0].excerpt}
                    </p>
                    {posts[0].publishedAt && (
                      <time className="text-xs" style={{ color: 'var(--white-40)' }} dateTime={posts[0].publishedAt}>
                        {new Date(posts[0].publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    )}
                  </div>
                </Link>
              </div>

              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {posts.slice(1).map(post => (
                    <div
                      key={post.id}
                      className="rounded p-6 border group hover:border-opacity-50 transition-all duration-300"
                      style={{ border: '1px solid var(--white-10)', backgroundColor: 'rgba(5,5,5,0.9)' }}
                    >
                      <Link href={`/blog/${post.slug}`} className="block">
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map(tag => (
                              <span
                                key={tag}
                                className="text-xs px-1.5 py-0.5 rounded"
                                style={{ backgroundColor: 'var(--white-5)', color: 'var(--white-45)' }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h4
                            className="font-medium group-hover:opacity-80 transition-opacity"
                            style={{ color: 'var(--white-100)', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', lineHeight: '1.3' }}
                          >
                            {post.title}
                          </h4>
                          <p
                            className="line-clamp-2"
                            style={{ color: 'var(--white-55)', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', lineHeight: '1.5' }}
                          >
                            {post.excerpt}
                          </p>
                          {post.publishedAt && (
                            <time className="text-xs" style={{ color: 'var(--white-35)' }} dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </time>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-center pt-8">
              <Link href="/blog" className="cta-button text-xs">
                View all posts
              </Link>
            </div>
          </>
        )}
      </div>
    </SectionWrapper>
  )
}
