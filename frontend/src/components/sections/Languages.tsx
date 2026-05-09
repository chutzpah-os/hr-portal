'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Language } from '@/data/portfolio'

const LIMIT = 3
const GRADIENT = 'from-[#f2d0c4] to-[#D4775A]'
const rotations = [-3, 4, -2, 5, -4, 3, -5, 2, -3, 4]

function LanguageCard({
  lang,
  index,
  onClick,
}: {
  lang: Language
  index: number
  onClick: () => void
}) {
  const rot = rotations[index % rotations.length]

  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
    >
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          padding: '28px 32px',
          backgroundColor: 'rgba(248,248,252,0.92)',
          border: '1px solid var(--white-10)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="sm:w-1/2">
            <span
              className="text-[0.6rem] uppercase tracking-widest block mb-2"
              style={{ color: 'var(--white-35)' }}
            >
              {lang.level}
            </span>
            <h3
              className="mb-3 leading-tight"
              style={{
                color: 'var(--white-95)',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                fontWeight: 700,
              }}
            >
              {lang.language}
            </h3>
            <div className="mb-5 max-w-[160px]">
              <div
                className="w-full h-px relative overflow-hidden rounded-full"
                style={{ backgroundColor: 'var(--white-15)' }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ width: `${lang.proficiency}%`, backgroundColor: 'var(--white-40)' }}
                />
              </div>
            </div>
            <span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
              style={{ color: 'var(--white-40)' }}
            >
              View details <span>→</span>
            </span>
          </div>

          <div className="sm:w-[45%] relative h-[140px] sm:h-[160px]">
            <motion.div
              className={`absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br ${GRADIENT}`}
              style={{ rotate: rot, boxShadow: '0 8px 24px rgba(10,10,15,0.07)' }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full h-full flex items-end justify-between p-4">
                <span
                  className="text-[0.55rem] uppercase tracking-widest font-medium"
                  style={{ color: 'rgba(10,10,15,0.28)' }}
                >
                  {lang.level}
                </span>
                <span
                  className="text-[0.7rem] font-bold"
                  style={{ color: 'rgba(10,10,15,0.35)' }}
                >
                  {lang.proficiency}%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

function LanguageModal({
  lang,
  onClose,
}: {
  lang: Language | null
  onClose: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lang) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lang])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {lang && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(10,10,15,0.22)', backdropFilter: 'blur(3px)' }}
            onClick={onClose}
          />

          <motion.div
            key="panel"
            initial={{ y: '100%', opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed flex flex-col rounded-3xl overflow-hidden"
            style={{
              top: 72,
              left: 8,
              right: 8,
              bottom: 16,
              zIndex: 50,
              backgroundColor: 'rgb(248,248,252)',
            }}
          >
            <div
              className="flex items-start justify-between px-6 py-5 shrink-0"
              style={{ borderBottom: '1px solid rgba(10,10,15,0.08)', backgroundColor: 'rgb(248,248,252)' }}
            >
              <div className="pr-4 min-w-0">
                <span
                  className="text-[0.6rem] uppercase tracking-widest block mb-1"
                  style={{ color: 'var(--white-35)' }}
                >
                  {lang.level}
                </span>
                <h2
                  className="font-bold leading-tight mb-1.5"
                  style={{
                    color: 'var(--white-100)',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {lang.language}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 text-xl font-light"
                style={{ backgroundColor: 'rgba(10,10,15,0.08)', color: 'var(--white-60)' }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
              style={{ touchAction: 'pan-y' } as React.CSSProperties}
              onWheel={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="px-6 sm:px-10 py-8 max-w-2xl mx-auto w-full">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className="text-[0.6rem] uppercase tracking-widest"
                      style={{ color: 'var(--white-35)' }}
                    >
                      Proficiency
                    </span>
                    <span className="text-sm font-bold" style={{ color: 'var(--white-80)' }}>
                      {lang.proficiency}%
                    </span>
                  </div>
                  <div
                    className="w-full h-1 rounded-full"
                    style={{ backgroundColor: 'var(--white-15)' }}
                  >
                    <div
                      className="h-1 rounded-full"
                      style={{ width: `${lang.proficiency}%`, backgroundColor: 'var(--white-60)' }}
                    />
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--white-70)' }}>
                  {lang.details.description}
                </p>

                <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                  Certifications &amp; Skills
                </p>
                <ul className="space-y-2 mb-8">
                  {lang.details.certifications.map((cert, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                      <span style={{ color: 'var(--white-30)' }}>—</span>
                      {cert}
                    </li>
                  ))}
                </ul>

                {lang.details.verificationLink && lang.details.verificationLink !== '#' && (
                  <a
                    href={lang.details.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60"
                    style={{ color: 'var(--accent)' }}
                  >
                    Verify Language Proficiency →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function LanguagesSection() {
  const [active, setActive] = useState<Language | null>(null)
  const [expanded, setExpanded] = useState(false)

  const all = portfolioData.languages
  const displayed = expanded ? all : all.slice(0, LIMIT)

  return (
    <SectionWrapper id="languages" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <motion.h2
              style={{ color: 'var(--white-100)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Languages
            </motion.h2>
          </div>
        </div>

        <motion.p layout className="text-xs mb-6" style={{ color: 'var(--white-30)' }}>
          {all.length} language{all.length !== 1 ? 's' : ''}
        </motion.p>

        <div className="flex flex-col gap-4">
          {displayed.map((lang, i) => (
            <LanguageCard
              key={lang.id}
              lang={lang}
              index={i}
              onClick={() => setActive(lang)}
            />
          ))}
        </div>

        {all.length > LIMIT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-xs uppercase tracking-widest flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
              style={{ color: 'var(--accent)' }}
            >
              {expanded ? (
                <><span>Show less</span><span>↑</span></>
              ) : (
                <><span>Show all {all.length}</span><span>↓</span></>
              )}
            </button>
          </motion.div>
        )}
      </div>

      <LanguageModal lang={active} onClose={() => setActive(null)} />
    </SectionWrapper>
  )
}
