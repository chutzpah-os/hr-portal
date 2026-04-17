'use client'

import { useMemo } from 'react'
import { type Post } from '@/lib/api'
import BlogSearchInput from './BlogSearchInput'
import BlogTagFilter from './BlogTagFilter'
import BlogCategoryFilter from './BlogCategoryFilter'
import BlogDateFilter from './BlogDateFilter'

type Category = 'Technical' | 'Non-Technical'
type DateFilterOption = 'all' | 'last-month' | 'last-3-months' | 'this-year' | 'custom'

export interface FilterState {
  searchQuery: string
  selectedTags: string[]
  selectedCategory: Category | 'All'
  dateFilter: DateFilterOption
  customDateRange?: { from: string; to: string }
}

interface BlogFiltersProps {
  posts: Post[]
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export default function BlogFilters({
  posts,
  filters,
  onFiltersChange
}: BlogFiltersProps) {
  // Extract all unique tags from posts
  const availableTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [posts])

  const handleSearchChange = (query: string) => {
    onFiltersChange({ ...filters, searchQuery: query })
  }

  const handleTagToggle = (tag: string) => {
    const newTags = filters.selectedTags.includes(tag)
      ? filters.selectedTags.filter(t => t !== tag)
      : [...filters.selectedTags, tag]
    onFiltersChange({ ...filters, selectedTags: newTags })
  }

  const handleClearTags = () => {
    onFiltersChange({ ...filters, selectedTags: [] })
  }

  const handleCategoryChange = (category: Category | 'All') => {
    onFiltersChange({ ...filters, selectedCategory: category })
  }

  const handleDateFilterChange = (
    dateFilter: DateFilterOption,
    customRange?: { from: string; to: string }
  ) => {
    onFiltersChange({
      ...filters,
      dateFilter,
      customDateRange: customRange
    })
  }

  const handleClearAllFilters = () => {
    onFiltersChange({
      searchQuery: '',
      selectedTags: [],
      selectedCategory: 'All',
      dateFilter: 'all',
      customDateRange: undefined,
    })
  }

  const hasActiveFilters =
    filters.searchQuery.length > 0 ||
    filters.selectedTags.length > 0 ||
    filters.selectedCategory !== 'All' ||
    filters.dateFilter !== 'all'

  return (
    <div
      className="p-6 rounded-lg border mb-8"
      style={{
        backgroundColor: 'rgba(5, 5, 5, 0.9)',
        border: '1px solid var(--white-10)',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-lg font-medium"
          style={{ color: 'var(--white-100)' }}
        >
          Filter Posts
        </h2>
        {hasActiveFilters && (
          <button
            onClick={handleClearAllFilters}
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--white-60)' }}
          >
            Clear all filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Search */}
        <BlogSearchInput
          onSearchChange={handleSearchChange}
          placeholder="Search posts by title, content..."
        />

        {/* Layout: Category and Date side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BlogCategoryFilter
            selectedCategory={filters.selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <BlogDateFilter
            selectedDateFilter={filters.dateFilter}
            onDateFilterChange={handleDateFilterChange}
          />
        </div>

        {/* Tags - full width */}
        {availableTags.length > 0 && (
          <BlogTagFilter
            availableTags={availableTags}
            selectedTags={filters.selectedTags}
            onTagToggle={handleTagToggle}
            onClearTags={handleClearTags}
          />
        )}
      </div>
    </div>
  )
}