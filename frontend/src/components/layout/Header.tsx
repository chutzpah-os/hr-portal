'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'

const LOCALES = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'ca', name: 'Català' },
] as const

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.15" />
      <ellipse cx="6.5" cy="6.5" rx="2.6" ry="5.5" stroke="currentColor" strokeWidth="1.15" />
      <line x1="1" y1="6.5" x2="12" y2="6.5" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  )
}

function LanguagePicker({
  locale,
  onSwitch,
  onClose,
  align = 'right',
}: {
  locale: string
  onSwitch: (l: string) => void
  onClose?: () => void
  align?: 'left' | 'right'
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LOCALES.find(l => l.code === locale) ?? LOCALES[0]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Select language"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all duration-200"
        style={{
          color: open ? 'var(--accent)' : 'var(--white-50)',
          backgroundColor: open ? 'rgba(212,119,90,0.09)' : 'transparent',
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          fontWeight: 600,
        }}
        onMouseEnter={e => {
          if (!open) {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.backgroundColor = 'rgba(212,119,90,0.06)'
          }
        }}
        onMouseLeave={e => {
          if (!open) {
            e.currentTarget.style.color = 'var(--white-50)'
            e.currentTarget.style.backgroundColor = 'transparent'
          }
        }}
      >
        <GlobeIcon />
        <span>{current.code.toUpperCase()}</span>
        <svg
          width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden
          style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.5 }}
        >
          <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              [align === 'right' ? 'right' : 'left']: 0,
              backgroundColor: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(10,10,15,0.09)',
              borderRadius: '14px',
              boxShadow: '0 8px 36px rgba(10,10,15,0.12), 0 2px 8px rgba(10,10,15,0.06)',
              minWidth: '156px',
              overflow: 'hidden',
              zIndex: 200,
              pointerEvents: 'auto',
            }}
          >
            {LOCALES.map((l, i) => {
              const active = l.code === locale
              return (
                <button
                  key={l.code}
                  onClick={() => { onSwitch(l.code); setOpen(false); onClose?.() }}
                  className="w-full flex items-center gap-3 px-4 transition-all duration-150"
                  style={{
                    paddingTop: i === 0 ? '10px' : '7px',
                    paddingBottom: i === LOCALES.length - 1 ? '10px' : '7px',
                    backgroundColor: active ? 'rgba(212,119,90,0.07)' : 'transparent',
                    color: active ? 'var(--accent)' : 'var(--white-65)',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.04)' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  <span style={{
                    fontSize: '0.55rem',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: active ? 'var(--accent)' : 'rgba(10,10,15,0.28)',
                    minWidth: '20px',
                    flexShrink: 0,
                  }}>
                    {l.code.toUpperCase()}
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: active ? 600 : 400, flex: 1 }}>
                    {l.name}
                  </span>
                  {active && (
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M1.5 5.5l3 3 5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const NAV_ITEMS = [
    { label: t('portfolio'), href: '/portfolio' },
    { label: t('lab'), href: '/solutions' },
    { label: t('challenges'), href: '/challenges' },
    { label: t('blog'), href: '/blog' },
    { label: t('press'), href: '/press' },
    { label: t('writing'), href: '/writing' },
    { label: t('research'), href: '/researches' },
    { label: t('about'), href: '/about' },
  ]

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="fixed top-5 left-0 right-0 z-[100] flex flex-col items-center no-print pointer-events-none">
      {/* Pill nav */}
      <motion.div
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          backgroundColor: 'rgba(255,255,255,0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(10,10,15,0.10)',
          boxShadow: '0 4px 32px rgba(10,10,15,0.10), 0 1px 0 rgba(10,10,15,0.04) inset',
        }}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center px-3 py-1.5 rounded-full transition-colors duration-200"
          style={{ color: 'var(--white-100)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.07)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>HR</span>
        </Link>

        <div className="hidden xl:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Desktop nav items */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
              style={{ color: 'var(--accent)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7'
                e.currentTarget.style.backgroundColor = 'rgba(212,119,90,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Language picker — desktop */}
        <div className="hidden xl:block">
          <LanguagePicker locale={locale} onSwitch={switchLocale} align="right" />
        </div>

        <div className="hidden xl:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Book a Call — desktop */}
        <a
          href="https://calendly.com/hanielrolemberg"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:flex text-xs uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
          style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent)'
            e.currentTarget.style.color = 'rgb(255,255,255)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
          }}
        >
          {t('bookCall')}
        </a>

        {/* Hamburger — mobile/tablet */}
        <button
          className="xl:hidden flex flex-col gap-1.5 px-3 py-1.5 rounded-full transition-colors duration-200"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ color: 'var(--white-100)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.07)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <motion.span
            className="block w-5 h-px"
            style={{ backgroundColor: 'var(--white-100)', transformOrigin: 'center' }}
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-5 h-px"
            style={{ backgroundColor: 'var(--white-100)' }}
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-5 h-px"
            style={{ backgroundColor: 'var(--white-100)', transformOrigin: 'center' }}
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="pointer-events-auto mt-2 flex flex-col gap-1 px-3 py-3 rounded-2xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(10,10,15,0.10)',
              boxShadow: '0 8px 32px rgba(10,10,15,0.10)',
              minWidth: '200px',
            }}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-200"
                style={{ color: 'var(--accent)' }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7'
                  e.currentTarget.style.backgroundColor = 'rgba(212,119,90,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {item.label}
              </Link>
            ))}

            <div className="mx-3 my-1 h-px" style={{ backgroundColor: 'rgba(10,10,15,0.08)' }} />

            {/* Language picker — mobile */}
            <div className="px-2 py-1">
              <LanguagePicker
                locale={locale}
                onSwitch={switchLocale}
                onClose={() => setMobileOpen(false)}
                align="left"
              />
            </div>

            <div className="mx-3 my-1 h-px" style={{ backgroundColor: 'rgba(10,10,15,0.08)' }} />

            <a
              href="https://calendly.com/hanielrolemberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-200"
              style={{ color: 'var(--accent)' }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7'
                e.currentTarget.style.backgroundColor = 'rgba(212,119,90,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {t('bookCall')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
