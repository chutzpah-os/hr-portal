'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Fixed floating container */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <header
          className="flex items-center justify-between no-print px-5 py-4 md:px-10 md:py-6"
          style={{
            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0)',
            backdropFilter: scrolled ? 'blur(14px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--white-10)' : '1px solid transparent',
            transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span
              className="text-base font-bold uppercase tracking-widest"
              style={{ color: 'var(--white-100)' }}
            >
              HR
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest transition-colors duration-200 whitespace-nowrap"
                style={{ color: 'var(--white-80)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-100)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-80)')}
              >
                {item.label}
              </Link>
            ))}
          </nav>


          {/* Hamburger toggle — visible below xl */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-px transition-all duration-300"
                style={{ backgroundColor: 'var(--white-100)' }}
              />
            ))}
          </button>
        </header>

        {/* Mobile/tablet menu — visible below xl */}
        {mobileOpen && (
          <div
            className="xl:hidden flex flex-col gap-4 px-6 pb-6 pt-2"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderBottom: '1px solid var(--white-10)',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-widest"
                style={{ color: 'var(--white-80)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
