'use client'

import { useState } from 'react'
import { useSectionScroller } from './SectionScroller'

interface TocEntry {
  label: string
  index: number
}

export default function TOCSummary({
  entries,
  title,
}: {
  entries: TocEntry[]
  title: string
}) {
  const { goTo } = useSectionScroller()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div>
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-8"
        style={{
          color: 'var(--white-30)',
          borderBottom: '1px solid rgba(10,10,15,0.06)',
          paddingBottom: '0.5rem',
        }}
      >
        {title}
      </div>

      <div className="grid grid-cols-2 gap-x-6">
        {entries.map((entry, i) => {
          const isHovered = hovered === entry.index
          return (
            <button
              key={entry.index}
              onClick={() => goTo(entry.index)}
              onMouseEnter={() => setHovered(entry.index)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center gap-3 w-full text-left bg-transparent border-0 cursor-pointer py-2.5"
              style={{ borderBottom: '1px solid rgba(10,10,15,0.06)' }}
            >
              <span
                className="text-[0.55rem] font-bold tabular-nums shrink-0"
                style={{
                  fontFamily: 'var(--font-syne)',
                  color: isHovered ? 'var(--accent)' : 'rgba(10,10,15,0.2)',
                  transition: 'color 0.15s ease',
                  width: '1.4rem',
                  letterSpacing: '0.06em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span
                className="flex-1 text-xs font-semibold uppercase tracking-widest"
                style={{
                  fontFamily: 'var(--font-syne)',
                  color: isHovered ? 'var(--white-100)' : 'var(--white-60)',
                  transition: 'color 0.15s ease',
                  letterSpacing: '0.09em',
                }}
              >
                {entry.label}
              </span>

              <span
                className="text-xs shrink-0"
                style={{
                  color: 'var(--accent)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.15s ease',
                }}
              >
                →
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
