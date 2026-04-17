'use client'

import { useState } from 'react'

interface BlogTagFilterProps {
  availableTags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  onClearTags: () => void
}

export default function BlogTagFilter({
  availableTags,
  selectedTags,
  onTagToggle,
  onClearTags
}: BlogTagFilterProps) {
  const [showAllTags, setShowAllTags] = useState(false)

  const maxVisibleTags = 8
  const visibleTags = showAllTags ? availableTags : availableTags.slice(0, maxVisibleTags)
  const hasMoreTags = availableTags.length > maxVisibleTags

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3
          className="text-sm font-medium"
          style={{ color: 'var(--white-80)' }}
        >
          Tags
        </h3>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearTags}
            className="text-xs hover:opacity-80 transition-opacity"
            style={{ color: 'var(--white-50)' }}
          >
            Clear all
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => {
          const isSelected = selectedTags.includes(tag)
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 hover:scale-105 ${
                isSelected ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              }`}
              style={{
                backgroundColor: isSelected
                  ? 'var(--white-15)'
                  : 'rgba(5, 5, 5, 0.9)',
                border: isSelected
                  ? '1px solid var(--white-25)'
                  : '1px solid var(--white-10)',
                color: isSelected
                  ? 'var(--white-100)'
                  : 'var(--white-60)',
              }}
            >
              {tag}
            </button>
          )
        })}

        {hasMoreTags && (
          <button
            onClick={() => setShowAllTags(!showAllTags)}
            className="px-3 py-1.5 text-xs rounded-full border transition-all duration-200"
            style={{
              backgroundColor: 'rgba(5, 5, 5, 0.9)',
              border: '1px solid var(--white-15)',
              color: 'var(--white-70)',
            }}
          >
            {showAllTags ? 'Show less' : `+${availableTags.length - maxVisibleTags} more`}
          </button>
        )}
      </div>

      {selectedTags.length > 0 && (
        <div className="pt-2">
          <p className="text-xs" style={{ color: 'var(--white-50)' }}>
            {selectedTags.length} tag{selectedTags.length !== 1 ? 's' : ''} selected
          </p>
        </div>
      )}
    </div>
  )
}