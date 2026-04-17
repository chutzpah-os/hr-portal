'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'

type DateFilterOption = 'all' | 'last-month' | 'last-3-months' | 'this-year' | 'custom'

interface BlogDateFilterProps {
  selectedDateFilter: DateFilterOption
  onDateFilterChange: (filter: DateFilterOption, customRange?: { from: string; to: string }) => void
}

export default function BlogDateFilter({
  selectedDateFilter,
  onDateFilterChange
}: BlogDateFilterProps) {
  const [showCustomRange, setShowCustomRange] = useState(false)
  const [customFrom, setCustomFrom] = useState('')
  const [customTo, setCustomTo] = useState('')

  const dateOptions = [
    { value: 'all', label: 'All time' },
    { value: 'last-month', label: 'Last 30 days' },
    { value: 'last-3-months', label: 'Last 3 months' },
    { value: 'this-year', label: 'This year' },
    { value: 'custom', label: 'Custom range' },
  ] as const

  const handleCustomRangeApply = () => {
    if (customFrom && customTo) {
      onDateFilterChange('custom', { from: customFrom, to: customTo })
      setShowCustomRange(false)
    }
  }

  return (
    <div className="space-y-3">
      <h3
        className="text-sm font-medium"
        style={{ color: 'var(--white-80)' }}
      >
        Date Range
      </h3>

      <div className="space-y-2">
        {dateOptions.map((option) => {
          const isSelected = selectedDateFilter === option.value
          return (
            <button
              key={option.value}
              onClick={() => {
                if (option.value === 'custom') {
                  setShowCustomRange(!showCustomRange)
                } else {
                  onDateFilterChange(option.value)
                  setShowCustomRange(false)
                }
              }}
              className={`w-full text-left px-3 py-2 text-sm rounded border transition-all duration-200 flex items-center gap-2 ${
                isSelected ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              }`}
              style={{
                backgroundColor: isSelected
                  ? 'var(--white-10)'
                  : 'rgba(5, 5, 5, 0.9)',
                border: isSelected
                  ? '1px solid var(--white-20)'
                  : '1px solid var(--white-8)',
                color: isSelected
                  ? 'var(--white-100)'
                  : 'var(--white-60)',
              }}
            >
              {option.value === 'custom' && (
                <Calendar className="w-3.5 h-3.5" />
              )}
              {option.label}
            </button>
          )
        })}
      </div>

      {/* Custom Date Range */}
      {showCustomRange && (
        <div
          className="mt-4 p-3 rounded border space-y-3"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.9)',
            border: '1px solid var(--white-15)',
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label
                className="block text-xs mb-1"
                style={{ color: 'var(--white-60)' }}
              >
                From
              </label>
              <input
                type="date"
                value={customFrom}
                onChange={(e) => setCustomFrom(e.target.value)}
                className="w-full px-2 py-1.5 text-xs rounded border"
                style={{
                  backgroundColor: 'rgba(5, 5, 5, 0.9)',
                  border: '1px solid var(--white-10)',
                  color: 'var(--white-90)',
                }}
              />
            </div>
            <div>
              <label
                className="block text-xs mb-1"
                style={{ color: 'var(--white-60)' }}
              >
                To
              </label>
              <input
                type="date"
                value={customTo}
                onChange={(e) => setCustomTo(e.target.value)}
                className="w-full px-2 py-1.5 text-xs rounded border"
                style={{
                  backgroundColor: 'rgba(5, 5, 5, 0.9)',
                  border: '1px solid var(--white-10)',
                  color: 'var(--white-90)',
                }}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCustomRangeApply}
              disabled={!customFrom || !customTo}
              className="px-3 py-1.5 text-xs rounded transition-opacity disabled:opacity-50"
              style={{
                backgroundColor: 'var(--white-15)',
                color: 'var(--white-100)',
                border: '1px solid var(--white-25)',
              }}
            >
              Apply
            </button>
            <button
              onClick={() => {
                setShowCustomRange(false)
                setCustomFrom('')
                setCustomTo('')
              }}
              className="px-3 py-1.5 text-xs rounded"
              style={{
                backgroundColor: 'rgba(5, 5, 5, 0.9)',
                color: 'var(--white-60)',
                border: '1px solid var(--white-10)',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}