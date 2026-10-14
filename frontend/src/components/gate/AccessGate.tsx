'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import { hasValidAccess, grantAccess } from '@/lib/accessGate'
import AccessGateForm from './AccessGateForm'

export default function AccessGate() {
  const t = useTranslations('accessGate')
  const [status, setStatus] = useState<'checking' | 'show' | 'granted'>('checking')

  useEffect(() => {
    setStatus(hasValidAccess() ? 'granted' : 'show')
  }, [])

  useEffect(() => {
    if (status !== 'show') return

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
    <AnimatePresence>
      {status === 'show' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto px-6 py-10 no-print"
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
            className="w-full max-w-sm rounded-2xl p-7"
            style={{
              backgroundColor: 'rgb(255,255,255)',
              border: '1px solid rgba(10,10,15,0.10)',
              boxShadow: '0 8px 36px rgba(10,10,15,0.14), 0 2px 8px rgba(10,10,15,0.06)',
            }}
          >
            <h2
              className="font-bold leading-tight mb-2"
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
  )
}
