'use client'

import { useState, useEffect, useRef, useCallback, Children, createContext, useContext } from 'react'

interface ScrollerCtx { goTo: (i: number) => void }
const SectionScrollerContext = createContext<ScrollerCtx>({ goTo: () => {} })
export function useSectionScroller() { return useContext(SectionScrollerContext) }

const DURATION = 800
const EASING = 'cubic-bezier(0.65, 0, 0.35, 1)'

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
              transition: `all ${DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`,
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
  const innerRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const isAnimating = useRef(false)
  const lastScrollAt = useRef(0)

  const sections = Children.toArray(children).filter(Boolean)
  const total = sections.length

  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= total) return
      if (isAnimating.current) return
      const now = Date.now()
      if (now - lastScrollAt.current < DURATION + 50) return
      lastScrollAt.current = now
      isAnimating.current = true
      setCurrent(idx)
      if (innerRef.current) {
        innerRef.current.style.transform = `translateY(calc(${-idx} * 100vh))`
      }
      setTimeout(() => {
        isAnimating.current = false
      }, DURATION + 150)
    },
    [total]
  )

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isAnimating.current) return
      const now = Date.now()
      if (now - lastScrollAt.current < DURATION + 50) return

      const panel = panelRefs.current[current]
      const isScrollable = panel ? panel.scrollHeight > panel.clientHeight + 4 : false
      const atBottom =
        !isScrollable ||
        (panel != null && panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 4)
      const atTop = !panel || panel.scrollTop <= 0

      if (e.deltaY > 5) {
        if (atBottom) goTo(current + 1)
        else if (panel) panel.scrollTop += e.deltaY
      } else if (e.deltaY < -5) {
        if (atTop) goTo(current - 1)
        else if (panel) panel.scrollTop += e.deltaY
      }
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [current, goTo])

  useEffect(() => {
    let startY = 0
    const onStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
    }
    const onEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY
      if (Math.abs(diff) < 50) return
      if (diff > 0) goTo(current + 1)
      else goTo(current - 1)
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [current, goTo])

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

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  return (
    <SectionScrollerContext.Provider value={{ goTo }}>
    <>
      {/* Dot grid — above panels, below header */}
      <div
        className="pointer-events-none"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(10,10,15,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 12,
        }}
      />

      {/* Scroller container */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'hidden',
          zIndex: 10,
          backgroundColor: 'rgb(255,255,255)',
        }}
      >
        <div
          ref={innerRef}
          style={{
            transform: 'translateY(0)',
            transition: `transform ${DURATION}ms ${EASING}`,
            willChange: 'transform',
          }}
        >
          {sections.map((section, i) => (
            <div
              key={i}
              ref={(el) => {
                panelRefs.current[i] = el
              }}
              style={{
                height: '100vh',
                overflowY: 'auto',
                overflowX: 'hidden',
                position: 'relative',
              }}
            >
              {section}
            </div>
          ))}
        </div>
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
