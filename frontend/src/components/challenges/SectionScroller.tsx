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

// Cinematic easing — fast start, slow settle (like SpaceX countdowns)
const DURATION = 650
const EASING   = 'cubic-bezier(0.76, 0, 0.24, 1)'
const COOLDOWN = DURATION + 60   // 710ms — tight but not jarring

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
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
            transition: `all ${DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`,
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
  const [current, setCurrent]   = useState(0)
  const innerRef                = useRef<HTMLDivElement>(null)
  const panelRefs               = useRef<(HTMLDivElement | null)[]>([])
  const currentRef              = useRef(0)   // mutable — safe to read inside passive listeners
  const isAnimating             = useRef(false)
  const lastScrollAt            = useRef(0)
  const animFrame               = useRef(0)

  const sections = Children.toArray(children).filter(Boolean)
  const total    = sections.length

  // ── Core animation — JS-driven transform, custom easing, no CSS transition ──
  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= total) return
    if (isAnimating.current) return
    const now = Date.now()
    if (now - lastScrollAt.current < COOLDOWN) return
    lastScrollAt.current = now
    isAnimating.current  = true

    const fromIdx = currentRef.current
    const fromY   = fromIdx * window.innerHeight
    const toY     = idx    * window.innerHeight
    const start   = performance.now()

    cancelAnimationFrame(animFrame.current)

    function step(ts: number) {
      const t    = Math.min((ts - start) / DURATION, 1)
      const ease = easeInOutQuart(t)
      const y    = fromY + (toY - fromY) * ease

      if (innerRef.current) {
        innerRef.current.style.transform = `translateY(${-y}px)`
      }

      if (t < 1) {
        animFrame.current = requestAnimationFrame(step)
      } else {
        isAnimating.current   = false
        currentRef.current    = idx
        setCurrent(idx)
      }
    }

    animFrame.current = requestAnimationFrame(step)
  }, [total])

  // ── Wheel — passive listener, no preventDefault, no reload risk ──
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isAnimating.current) return
      const now = Date.now()
      if (now - lastScrollAt.current < COOLDOWN) return

      const panel = panelRefs.current[currentRef.current]
      const atBottom = !panel || (panel.scrollHeight <= panel.clientHeight + 4)
        || panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 4
      const atTop = !panel || panel.scrollTop <= 0

      if (e.deltaY > 8) {
        if (atBottom) goTo(currentRef.current + 1)
        else if (panel) panel.scrollTop += e.deltaY
      } else if (e.deltaY < -8) {
        if (atTop) goTo(currentRef.current - 1)
        else if (panel) panel.scrollTop += e.deltaY
      }
    }
    // passive: true — browser never blocks; overscroll-behavior handles the rest
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [goTo])

  // ── Touch swipe ──
  useEffect(() => {
    let startY = 0
    const onStart = (e: TouchEvent) => { startY = e.touches[0].clientY }
    const onEnd   = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY
      if (Math.abs(diff) < 55) return
      goTo(currentRef.current + (diff > 0 ? 1 : -1))
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend',   onEnd,   { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend',   onEnd)
    }
  }, [goTo])

  // ── Keyboard ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(currentRef.current + 1)
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(currentRef.current - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo])

  // ── Lock body scroll + kill overscroll navigation (fixes macOS page-reload) ──
  useEffect(() => {
    const prevOverflow  = document.body.style.overflow
    const prevOverscroll = (document.body.style as CSSStyleDeclaration & { overscrollBehavior: string }).overscrollBehavior
    document.body.style.overflow = 'hidden';
    (document.body.style as CSSStyleDeclaration & { overscrollBehavior: string }).overscrollBehavior = 'none'
    return () => {
      document.body.style.overflow = prevOverflow;
      (document.body.style as CSSStyleDeclaration & { overscrollBehavior: string }).overscrollBehavior = prevOverscroll
    }
  }, [])

  return (
    <SectionScrollerContext.Provider value={{ goTo }}>
      <>
        {/* Hide inner-panel scrollbars */}
        <style>{`.ss-panel::-webkit-scrollbar { display: none; }`}</style>

        {/* Dot grid */}
        <div className="pointer-events-none" style={{
          position: 'fixed', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(10,10,15,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px', zIndex: 12,
        }} />

        {/* Fixed viewport — overflow hidden so browser can't scroll it */}
        <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 10 }}>

          {/* Animatable strip — transform drives section transitions */}
          <div
            ref={innerRef}
            style={{ transform: 'translateY(0)', willChange: 'transform' }}
          >
            {sections.map((section, i) => {
              const theme = panelThemes[i] ?? 'white'
              return (
                <div
                  key={i}
                  ref={(el) => { panelRefs.current[i] = el }}
                  className="ss-panel"
                  data-theme={theme === 'terra' ? 'terra' : undefined}
                  style={{
                    height: '100vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    position: 'relative',
                    scrollbarWidth: 'none',
                    backgroundColor: PANEL_BG[theme],
                  }}
                >
                  {section}
                </div>
              )
            })}
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
