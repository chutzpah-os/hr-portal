'use client'

import { useState, useEffect, useRef, useCallback, Children, createContext, useContext } from 'react'

interface ScrollerCtx { goTo: (i: number) => void }
const SectionScrollerContext = createContext<ScrollerCtx>({ goTo: () => {} })
export function useSectionScroller() { return useContext(SectionScrollerContext) }

function NavIndicator({
  current,
  total,
  names,
  onNavigate,
}: {
  current: number
  total: number
  names: string[]
  onNavigate: (i: number) => void
}) {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <div
      className="hidden md:flex fixed flex-col items-end z-[9999]"
      style={{ right: '1.25rem', top: '50%', transform: 'translateY(-50%)', gap: '5px' }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          aria-label={names[i] ?? `Section ${i + 1}`}
          className="flex items-center bg-transparent border-0 cursor-pointer"
          style={{ padding: '3px 0', gap: '8px' }}
        >
          <span
            className="whitespace-nowrap"
            style={{
              fontSize: '0.37rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-syne)',
              color: i === current ? 'var(--accent)' : 'rgba(10,10,15,0.45)',
              opacity: hovered === i ? 1 : 0,
              transition: 'opacity 0.15s ease',
            }}
          >
            {names[i]}
          </span>
          <div
            style={{
              width: i === current ? 2 : 1,
              height: i === current ? 32 : 12,
              borderRadius: 1,
              backgroundColor: i === current ? 'var(--accent)' : 'rgba(10,10,15,0.15)',
              transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
              flexShrink: 0,
            }}
          />
        </button>
      ))}
    </div>
  )
}

export default function SectionScroller({
  children,
  names = [],
}: {
  children: React.ReactNode
  names?: string[]
}) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])

  const sections = Children.toArray(children).filter(Boolean)
  const total = sections.length

  // Navigate to a section by index — browser handles smooth animation
  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= total) return
      const container = containerRef.current
      const panel = panelRefs.current[idx]
      if (container && panel) {
        container.scrollTo({ top: panel.offsetTop, behavior: 'smooth' })
      }
    },
    [total]
  )

  // Sync current indicator from scroll position (passive — no blocking)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const onScroll = () => {
      const idx = Math.round(container.scrollTop / window.innerHeight)
      setCurrent(Math.max(0, Math.min(idx, total - 1)))
    }
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [total])

  // Keyboard: arrows still jump one section at a time
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        goTo(current + 1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(current - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo])

  // Hide body scrollbar so only the container scrolls
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return (
    <SectionScrollerContext.Provider value={{ goTo }}>
      <>
        {/* Dot grid */}
        <div
          className="pointer-events-none"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(10,10,15,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            zIndex: 12,
          }}
        />

        {/*
          CSS-native scroll container.
          scroll-snap-type: y mandatory  → browser snaps naturally after momentum,
                                           no JS wheel handling, no cooldown, no transforms.
          overflowY: scroll              → receives wheel/touch events natively.
          Each panel: height: 100vh + scroll-snap-align: start + overflowY: auto
          → inner panels scroll their own overflow before advancing to the next section.
        */}
        <div
          ref={containerRef}
          style={{
            position: 'fixed',
            inset: 0,
            overflowY: 'scroll',
            scrollSnapType: 'y mandatory',
            WebkitOverflowScrolling: 'touch',
            zIndex: 10,
            backgroundColor: 'rgb(255,255,255)',
          }}
        >
          {sections.map((section, i) => (
            <div
              key={i}
              ref={(el) => { panelRefs.current[i] = el }}
              style={{
                height: '100vh',
                overflowY: 'auto',
                overflowX: 'hidden',
                position: 'relative',
                scrollSnapAlign: 'start',
              }}
            >
              {section}
            </div>
          ))}
        </div>

        <NavIndicator
          current={current}
          total={total}
          names={names}
          onNavigate={goTo}
        />
      </>
    </SectionScrollerContext.Provider>
  )
}
