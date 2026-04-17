'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

interface BlogSearchInputProps {
  onSearchChange: (query: string) => void
  placeholder?: string
}

export default function BlogSearchInput({
  onSearchChange,
  placeholder = "Search posts..."
}: BlogSearchInputProps) {
  const [searchQuery, setSearchQuery] = useState('')

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, onSearchChange])

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search
          className="w-4 h-4"
          style={{ color: 'var(--white-40)' }}
        />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        style={{
          backgroundColor: 'rgba(5, 5, 5, 0.9)',
          border: '1px solid var(--white-10)',
          color: 'var(--white-90)',
          fontSize: '0.9rem',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--white-25)'
          e.target.style.backgroundColor = 'rgba(10, 10, 10, 0.95)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--white-10)'
          e.target.style.backgroundColor = 'rgba(5, 5, 5, 0.9)'
        }}
      />
      <style jsx>{`
        input::placeholder {
          color: var(--white-40);
        }
      `}</style>
    </div>
  )
}