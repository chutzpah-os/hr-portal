'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import { hasValidAccess, grantAccess } from '@/lib/accessGate'
import AccessGateForm from './AccessGateForm'

export default function AccessGate() {
  const t = useTranslations('accessGate')
  const [status, setStatus] = useState<'checking' | 'minimized' | 'expanded' | 'granted'>('checking')

  // Starts minimized (not a blocking overlay) rather than forcing every
  // visitor — including search crawlers — through a full-screen interstitial
  // before they see any real content. Real visitors can still expand it; it
  // just isn't the first thing rendered.
  useEffect(() => {
    setStatus(hasValidAccess() ? 'granted' : 'minimized')
  }, [])

  useEffect(() => {
    if (status !== 'expanded') return

    // Plain `overflow: hidden` on body doesn't reliably block scroll on
    // mobile Safari/Chrome — touch drags can still pan the page, which (since
    // `position: fixed` is pinned to the layout viewport, not the visual one)
    // makes this overlay appear to drift sideways. Pinning the body itself
    // with `position: fixed` is the robust cross-browser lock.
    const scrollY = window.scrollY
    const { style } = document.body
    const previous = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
      overflow: style.overflow,
    }

    style.position = 'fixed'
    style.top = `-${scrollY}px`
    style.left = '0'
    style.right = '0'
    style.width = '100%'
    style.overflow = 'hidden'

    return () => {
      style.position = previous.position
      style.top = previous.top
      style.left = previous.left
      style.right = previous.right
      style.width = previous.width
      style.overflow = previous.overflow
      window.scrollTo(0, scrollY)
    }
  }, [status])

  const handleGranted = () => {
    grantAccess()
    setStatus('granted')
  }

  return (
    <>
      <AnimatePresence>
        {status === 'minimized' && (
          <motion.button
            type="button"
            onClick={() => setStatus('expanded')}
            aria-label={t('title')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 z-[200] flex items-center justify-center w-12 h-12 rounded-full no-print"
            style={{
              backgroundColor: 'var(--accent)',
              boxShadow: '0 6px 24px rgba(212,119,90,0.4)',
              border: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.26-1.07L3 21l1.07-3.74A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {status === 'expanded' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex flex-col items-center overflow-y-auto px-6 py-10 no-print"
            style={{
              backgroundColor: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              overscrollBehavior: 'contain',
              touchAction: 'pan-y',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative w-full max-w-sm rounded-2xl p-7 my-auto"
              style={{
                backgroundColor: 'rgb(255,255,255)',
                border: '1px solid rgba(10,10,15,0.10)',
                boxShadow: '0 8px 36px rgba(10,10,15,0.14), 0 2px 8px rgba(10,10,15,0.06)',
              }}
            >
              <button
                type="button"
                onClick={() => setStatus('minimized')}
                aria-label={t('minimizeAriaLabel')}
                className="absolute top-4 right-4 flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200"
                style={{ color: 'var(--white-40)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>

              <h2
                className="font-bold leading-tight mb-2 pr-6"
                style={{ color: 'var(--white-100)', fontSize: '1.3rem', letterSpacing: '-0.02em', fontFamily: 'var(--font-syne)' }}
              >
                {t('title')}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--white-55)' }}>
                {t('body')}
              </p>
              <AccessGateForm onGranted={handleGranted} />
              <p className="text-xs leading-relaxed mt-4" style={{ color: 'var(--white-40)' }}>
                {t('consent')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
