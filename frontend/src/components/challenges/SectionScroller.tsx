'use client'

import { useState, useEffect, useRef, useCallback, Children, createContext, useContext } from 'react'

interface ScrollerCtx { goTo: (i: number) => void }
const SectionScrollerContext = createContext<ScrollerCtx>({ goTo: () => {} })
export function useSectionScroller() { return useContext(SectionScrollerContext) }

export type PanelTheme = 'white' | 'terra'
const PANEL_BG: Record<PanelTheme, string> = {
  white: 'rgb(255,255,255)',
  terra: 'rgb(212,119,90)',
}

function NavIndicator({
  current, total, names, onNavigate,
}: {
  current: number; total: number; names: string[]; onNavigate: (i: number) => void
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
          <span className="whitespace-nowrap" style={{
            fontSize: '0.37rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            fontFamily: 'var(--font-syne)',
            color: i === current ? 'var(--accent)' : 'rgba(10,10,15,0.45)',
            opacity: hovered === i ? 1 : 0,
            transition: 'opacity 0.15s ease',
          }}>
            {names[i]}
          </span>
          <div style={{
            width: i === current ? 2 : 1,
            height: i === current ? 32 : 12,
            borderRadius: 1,
            backgroundColor: i === current ? 'var(--accent)' : 'rgba(10,10,15,0.15)',
            transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            flexShrink: 0,
          }} />
        </button>
      ))}
    </div>
  )
}

export default function SectionScroller({
  children,
  names = [],
  panelThemes = [],
}: {
  children: React.ReactNode
  names?: string[]
  panelThemes?: PanelTheme[]
}) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRefs    = useRef<(HTMLDivElement | null)[]>([])

  const sections = Children.toArray(children).filter(Boolean)
  const total    = sections.length

  // Jump to section — smooth, no interception required
  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= total) return
    const container = containerRef.current
    const panel     = panelRefs.current[idx]
    if (container && panel) {
      container.scrollTo({ top: panel.offsetTop, behavior: 'smooth' })
    }
  }, [total])

  // Track current section from scroll position (passive, never blocks input)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      const scrollMid = container.scrollTop + container.clientHeight * 0.4
      let active = 0
      for (let i = 0; i < panelRefs.current.length; i++) {
        const panel = panelRefs.current[i]
        if (panel && panel.offsetTop <= scrollMid) active = i
      }
      setCurrent(active)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [total])

  // Keyboard: arrows jump one section (deliberate action, fine to preventDefault here)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Only intercept when no input/textarea is focused
      const tag = (document.activeElement as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(current + 1) }
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goTo(current - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo])

  // Body: hidden overflow so only the fixed container scrolls (no double scrollbar)
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return (
    <SectionScrollerContext.Provider value={{ goTo }}>
      <>
        <style>{`
          .ss-container::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Dot texture — fixed, above panels */}
        <div className="pointer-events-none" style={{
          position: 'fixed', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(10,10,15,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px', zIndex: 12,
        }} />

        {/*
          Free-scroll container.
          - overflow-y: scroll  → natural browser scroll, no interception
          - no scroll-snap      → user controls pace entirely
          - scrollbar-width: none → no visible scrollbar (hides double-bar issue)
        */}
        <div
          ref={containerRef}
          className="ss-container"
          style={{
            position: 'fixed', inset: 0,
            overflowY: 'scroll',
            overflowX: 'hidden',
            scrollbarWidth: 'none',
            zIndex: 10,
          }}
        >
          {sections.map((section, i) => {
            const theme = panelThemes[i] ?? 'white'
            return (
              <div
                key={i}
                ref={(el) => { panelRefs.current[i] = el }}
                data-theme={theme === 'terra' ? 'terra' : undefined}
                style={{
                  minHeight: '100vh',
                  position: 'relative',
                  backgroundColor: PANEL_BG[theme],
                }}
              >
                {section}
              </div>
            )
          })}
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
