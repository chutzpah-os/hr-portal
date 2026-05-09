'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

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
          <span className="text-sm font-bold uppercase tracking-widest">HR</span>
        </Link>

        {/* Separator */}
        <div className="hidden md:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Desktop nav items */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
              style={{ color: 'var(--white-60)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--white-100)'
                e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.07)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--white-60)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Separator */}
        <div className="hidden md:block w-px h-4 mx-1" style={{ backgroundColor: 'rgba(10,10,15,0.1)' }} />

        {/* Book a Call — desktop */}
        <a
          href="https://calendly.com/hanielrolemberg"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex text-xs uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
          style={{
            border: '1px solid rgba(10,10,15,0.2)',
            color: 'var(--white-80)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(10,10,15,0.5)'
            e.currentTarget.style.color = 'var(--white-100)'
            e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.06)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(10,10,15,0.2)'
            e.currentTarget.style.color = 'var(--white-80)'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          Book a Call
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
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-200"
                style={{ color: 'var(--white-70)' }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--white-100)'
                  e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--white-70)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mx-3 my-1 h-px" style={{ backgroundColor: 'rgba(10,10,15,0.08)' }} />
            <a
              href="https://calendly.com/hanielrolemberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all duration-200"
              style={{ color: 'var(--white-50)' }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--white-90)'
                e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.07)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--white-50)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
