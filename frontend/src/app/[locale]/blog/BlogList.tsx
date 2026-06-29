'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { PostMeta, PostCategory } from '@/lib/blog'
import { useTranslations, useLocale } from 'next-intl'

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

const PAGE_SIZE = 10

type CategoryFilter = 'all' | PostCategory

function FilterButton({ active, onClick, children, small }: { active: boolean; onClick: () => void; children: React.ReactNode; small?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="uppercase tracking-widest transition-all duration-200 rounded-full"
      style={{
        fontSize: small ? '0.58rem' : '0.65rem',
        padding: small ? '0.25rem 0.75rem' : '0.375rem 0.75rem',
        ...(active ? {
          backgroundColor: 'var(--accent)',
          color: '#fff',
        } : {
          border: '1px solid rgba(10,10,15,0.12)',
          color: 'var(--white-45)',
          backgroundColor: 'transparent',
        }),
      }}
    >
      {children}
    </button>
  )
}

function buildGroupTree(posts: PostMeta[]): Map<string, Set<string>> {
  const tree = new Map<string, Set<string>>()
  for (const post of posts) {
    for (const g of post.groups) {
      const slash = g.indexOf('/')
      const parent = slash === -1 ? g : g.slice(0, slash)
      const child = slash === -1 ? null : g.slice(slash + 1)
      if (!tree.has(parent)) tree.set(parent, new Set())
      if (child) tree.get(parent)!.add(child)
    }
  }
  return tree
}

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const t = useTranslations('blog')
  const locale = useLocale()

  const [order, setOrder] = useState<'newest' | 'oldest'>('newest')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [selectedParent, setSelectedParent] = useState<string | null>(null)
  const [selectedChild, setSelectedChild] = useState<string | null>(null)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const reset = () => setVisible(PAGE_SIZE)

  const groupTree = useMemo(() => buildGroupTree(posts), [posts])
  const parents = useMemo(() => Array.from(groupTree.keys()).sort(), [groupTree])
  const children = useMemo(
    () => selectedParent ? Array.from(groupTree.get(selectedParent) ?? []).sort() : [],
    [groupTree, selectedParent]
  )

  function selectParent(p: string) {
    if (selectedParent === p) {
      setSelectedParent(null)
      setSelectedChild(null)
    } else {
      setSelectedParent(p)
      setSelectedChild(null)
    }
    reset()
  }

  function selectChild(c: string) {
    setSelectedChild(selectedChild === c ? null : c)
    reset()
  }

  const filtered = posts.filter((p) => {
    if (category !== 'all' && p.category !== category) return false
    if (!selectedParent) return true
    const fullPath = selectedChild ? `${selectedParent}/${selectedChild}` : null
    return p.groups.some((g) =>
      fullPath ? g === fullPath : g === selectedParent || g.startsWith(`${selectedParent}/`)
    )
  })

  const sorted = order === 'newest' ? filtered : [...filtered].reverse()
  const shown = sorted.slice(0, visible)
  const hasMore = visible < sorted.length

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col gap-4 mb-10">

        {/* Order + Category */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <div className="flex gap-2">
            <FilterButton active={order === 'newest'} onClick={() => { setOrder('newest'); reset() }}>{t('sortNewest')}</FilterButton>
            <FilterButton active={order === 'oldest'} onClick={() => { setOrder('oldest'); reset() }}>{t('sortOldest')}</FilterButton>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(10,10,15,0.1)', alignSelf: 'stretch' }} />
          <div className="flex gap-2">
            <FilterButton active={category === 'all'} onClick={() => { setCategory('all'); reset() }}>{t('filterAll')}</FilterButton>
            <FilterButton active={category === 'technical'} onClick={() => { setCategory('technical'); reset() }}>{t('filterTechnical')}</FilterButton>
            <FilterButton active={category === 'non-technical'} onClick={() => { setCategory('non-technical'); reset() }}>{t('filterNonTechnical')}</FilterButton>
          </div>
        </div>

        {/* Groups */}
        {parents.length > 0 && (
          <div className="flex flex-col gap-2">
            {/* Parent pills */}
            <div className="flex flex-wrap gap-2">
              {parents.map((p) => (
                <FilterButton key={p} active={selectedParent === p} onClick={() => selectParent(p)}>
                  {p}
                </FilterButton>
              ))}
            </div>

            {/* Sub-group pills */}
            {selectedParent && children.length > 0 && (
              <div className="flex flex-wrap gap-2 pl-3" style={{ borderLeft: '2px solid rgba(212,119,90,0.25)' }}>
                {children.map((c) => (
                  <FilterButton key={c} active={selectedChild === c} onClick={() => selectChild(c)} small>
                    {c}
                  </FilterButton>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Post list */}
      <div>
        {shown.length === 0 && (
          <p className="text-sm py-10 text-center" style={{ color: 'var(--white-35)' }}>{t('noResults')}</p>
        )}
        {shown.map((post, i) => (
          <article
            key={post.slug}
            style={{
              borderTop: i === 0 ? '1px solid rgba(10,10,15,0.08)' : undefined,
              borderBottom: '1px solid rgba(10,10,15,0.08)',
              padding: '2rem 0',
            }}
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2
                className="font-semibold mb-1.5 transition-colors duration-200 group-hover:opacity-70 line-clamp-2"
                style={{
                  color: 'var(--white-100)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-syne)',
                }}
              >
                {post.title}
              </h2>
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
                {formatDate(post.date, locale)}
              </p>
              {post.groups.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.groups.map((g) => (
                    <span
                      key={g}
                      className="text-[0.5rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'rgba(212,119,90,0.07)', color: 'var(--accent)', border: '1px solid rgba(212,119,90,0.15)' }}
                    >
                      {g.includes('/') ? g.split('/')[1] : g}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--white-60)' }}>
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--accent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {t('readMore')}
            </Link>
          </article>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="text-xs uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-200"
            style={{ border: '1px solid rgba(10,10,15,0.15)', color: 'var(--white-55)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(10,10,15,0.15)'
              e.currentTarget.style.color = 'var(--white-55)'
            }}
          >
            {t('loadMore')}
          </button>
        </div>
      )}
    </>
  )
}
