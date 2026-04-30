'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { blogApi, type Post } from '@/lib/api'
import BlogPostCard from './BlogPostCard'
import BlogFilters, { type FilterState } from '../../components/blog/BlogFilters'

type Category = 'Technical' | 'Non-Technical'
type DateFilterOption = 'all' | 'last-month' | 'last-3-months' | 'this-year' | 'custom'

const MAX_ATTEMPTS = 12
const RETRY_INTERVAL = 5000

function PostsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-lg p-8 border"
          style={{ border: '1px solid var(--white-8)', backgroundColor: 'rgba(5,5,5,0.9)' }}
        >
          <div className="h-3 rounded w-24 mb-4" style={{ backgroundColor: 'var(--white-10)' }} />
          <div className="h-5 rounded w-3/4 mb-3" style={{ backgroundColor: 'var(--white-10)' }} />
          <div className="h-3 rounded w-full mb-2" style={{ backgroundColor: 'var(--white-8)' }} />
          <div className="h-3 rounded w-2/3" style={{ backgroundColor: 'var(--white-8)' }} />
        </div>
      ))}
    </div>
  )
}

export default function BlogPageContent() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: searchParams.get('search') || '',
    selectedTags: searchParams.get('tags')?.split(',').filter(Boolean) || [],
    selectedCategory: (searchParams.get('category') as Category | 'All') || 'All',
    dateFilter: (searchParams.get('date') as DateFilterOption) || 'all',
  })

  useEffect(() => {
    let attempts = 0
    let timer: ReturnType<typeof setTimeout>
    let cancelled = false

    const fetchPosts = async () => {
      try {
        const data = await blogApi.getPosts()
        if (cancelled) return
        setPosts(data)
        setLoading(false)
        return
      } catch {
        if (cancelled) return
        attempts++
        if (attempts < MAX_ATTEMPTS) {
          timer = setTimeout(fetchPosts, RETRY_INTERVAL)
        } else {
          setLoading(false)
          setFailed(true)
        }
      }
    }

    fetchPosts()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  const filteredPosts = useMemo(() => {
    let result = posts.filter(post => post.published)

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      result = result.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    if (filters.selectedCategory !== 'All') {
      result = result.filter(post => post.category === filters.selectedCategory)
    }

    if (filters.selectedTags.length > 0) {
      result = result.filter(post =>
        filters.selectedTags.every(tag => post.tags.includes(tag))
      )
    }

    if (filters.dateFilter !== 'all') {
      const now = new Date()
      let startDate: Date

      switch (filters.dateFilter) {
        case 'last-month':
          startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
          break
        case 'last-3-months':
          startDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate())
          break
        case 'this-year':
          startDate = new Date(now.getFullYear(), 0, 1)
          break
        case 'custom':
          if (filters.customDateRange) {
            const fromDate = new Date(filters.customDateRange.from)
            const toDate = new Date(filters.customDateRange.to)
            result = result.filter(post => {
              const postDate = new Date(post.publishedAt || post.createdAt)
              return postDate >= fromDate && postDate <= toDate
            })
          }
          break
        default:
          break
      }

      if (startDate!) {
        result = result.filter(post => {
          const postDate = new Date(post.publishedAt || post.createdAt)
          return postDate >= startDate
        })
      }
    }

    return result.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt)
      const dateB = new Date(b.publishedAt || b.createdAt)
      return dateB.getTime() - dateA.getTime()
    })
  }, [posts, filters])

  return (
    <main style={{ minHeight: '100svh', backgroundColor: 'rgb(0,0,0)', paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1
          className="mb-2"
          style={{ color: 'var(--white-100)', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          Blog
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--white-50)' }}>
          Articles, reflections, and technical notes.
        </p>

        {loading ? (
          <>
            <p className="text-xs mb-6" style={{ color: 'var(--white-30)' }}>
              Loading posts...
            </p>
            <PostsSkeleton />
          </>
        ) : failed ? (
          <div
            className="rounded p-8 text-center border"
            style={{ border: '1px solid var(--white-10)', backgroundColor: 'rgba(5,5,5,0.9)' }}
          >
            <p className="text-sm" style={{ color: 'var(--white-40)' }}>
              Could not load posts. Please try again later.
            </p>
          </div>
        ) : (
          <>
            <BlogFilters
              posts={posts}
              filters={filters}
              onFiltersChange={setFilters}
            />

            <div className="mb-6">
              <p className="text-sm" style={{ color: 'var(--white-60)' }}>
                {filteredPosts.length === 0
                  ? 'No posts found'
                  : filteredPosts.length === 1
                  ? '1 post found'
                  : `${filteredPosts.length} posts found`}
                {posts.length !== filteredPosts.length && (
                  <span style={{ color: 'var(--white-40)' }}>
                    {' '}(filtered from {posts.length} total)
                  </span>
                )}
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div
                className="text-center py-12 rounded-lg border"
                style={{ backgroundColor: 'rgba(5,5,5,0.5)', border: '1px solid var(--white-8)' }}
              >
                <p className="text-sm mb-2" style={{ color: 'var(--white-60)' }}>
                  No posts match your current filters
                </p>
                <button
                  onClick={() => setFilters({
                    searchQuery: '',
                    selectedTags: [],
                    selectedCategory: 'All',
                    dateFilter: 'all',
                  })}
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--white-80)' }}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
