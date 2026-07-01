'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'

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

        {/* Separator */}
        <div className="hidden md:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Desktop nav items */}
        <nav className="hidden md:flex items-center gap-1">
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

        {/* Separator */}
        <div className="hidden md:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Language switcher — desktop */}
        <div className="hidden md:flex items-center gap-0.5 px-1">
          {(['en', 'pt', 'es', 'fr', 'ca'] as const).map((loc, i, arr) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className="text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded-full transition-all duration-200"
              style={{
                color: locale === loc ? 'var(--accent)' : 'var(--white-35)',
                fontWeight: locale === loc ? 700 : 400,
                backgroundColor: locale === loc ? 'rgba(212,119,90,0.08)' : 'transparent',
              }}
            >
              {loc.toUpperCase()}
              {i < arr.length - 1 && <span style={{ color: 'rgba(10,10,15,0.2)', marginLeft: '2px' }}> |</span>}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Book a Call — desktop */}
        <a
          href="https://calendly.com/hanielrolemberg"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex text-xs uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
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

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 px-3 py-1.5 rounded-full transition-colors duration-200"
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

            {/* Language switcher — mobile */}
            <div className="flex gap-1 px-4 py-1.5">
              {(['en', 'pt', 'es', 'fr', 'ca'] as const).map((loc) => (
                <button
                  key={loc}
                  onClick={() => { switchLocale(loc); setMobileOpen(false) }}
                  className="text-[0.6rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    color: locale === loc ? 'var(--accent)' : 'var(--white-35)',
                    fontWeight: locale === loc ? 700 : 400,
                    backgroundColor: locale === loc ? 'rgba(212,119,90,0.08)' : 'transparent',
                    border: locale === loc ? '1px solid rgba(212,119,90,0.2)' : '1px solid transparent',
                  }}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
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
