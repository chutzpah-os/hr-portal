'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getPortfolioData, type Research } from '@/data/portfolio'
import { getUiStrings } from '@/i18n/uiStrings'
import { AREA_LABELS } from '@/utils/cvAreaMap'

const LIMIT = 4

function ResearchRow({
  research,
  index,
  onClick,
  isLast,
  locale,
}: {
  research: Research
  index: number
  onClick: () => void
  isLast: boolean
  locale: string
}) {
  const ui = getUiStrings(locale)
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left group"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      <div
        className="flex items-start gap-5 py-5 transition-colors duration-200"
        style={{ borderBottom: isLast ? 'none' : '1px solid rgba(10,10,15,0.07)' }}
      >
        <div
          className="shrink-0 rounded-lg overflow-hidden"
          style={{ width: '52px', height: '52px', backgroundColor: 'rgba(212,119,90,0.10)' }}
        >
          {research.image ? (
            <Image
              src={research.image}
              alt={research.title}
              width={52}
              height={52}
              quality={75}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[0.6rem] font-semibold uppercase text-center px-1" style={{ color: 'var(--accent)' }}>
                {research.field.slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className="leading-snug mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{
              color: 'var(--white-90)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              fontWeight: 600,
            }}
          >
            {research.title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span
              className="text-[0.6rem] uppercase tracking-widest"
              style={{ color: 'var(--white-40)' }}
            >
              {research.field}
            </span>
            <span style={{ color: 'rgba(10,10,15,0.15)', fontSize: '0.5rem' }}>●</span>
            <span
              className="text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                color: 'var(--accent)',
                backgroundColor: 'var(--accent-dim)',
                letterSpacing: '0.15em',
              }}
            >
              {ui.researchStatusLabel[research.status] ?? research.status}
            </span>
          </div>
        </div>

        <span
          className="shrink-0 text-base mt-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
          style={{ color: 'var(--accent)' }}
        >
          →
        </span>
      </div>
    </motion.button>
  )
}

function ResearchModal({
  research,
  onClose,
  locale,
}: {
  research: Research | null
  onClose: () => void
  locale: string
}) {
  const ui = getUiStrings(locale)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (research) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [research])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {research && (
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
                  {research.field}
                </span>
                <h2
                  className="font-bold leading-tight mb-1.5"
                  style={{
                    color: 'var(--white-100)',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {research.title}
                </h2>
                <p
                  className="text-sm leading-snug"
                  style={{
                    color: 'var(--white-55)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  } as React.CSSProperties}
                >
                  {research.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 text-xl font-light"
                style={{ backgroundColor: 'rgba(10,10,15,0.08)', color: 'var(--white-60)' }}
                aria-label={ui.close}
              >
                ×
              </button>
            </div>

            <div
              className="flex flex-wrap gap-2 px-6 py-3 shrink-0"
              style={{ borderBottom: '1px solid rgba(10,10,15,0.06)' }}
            >
              <span
                className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: 'var(--white-50)', border: '1px solid var(--white-10)' }}
              >
                {ui.researchStatusLabel[research.status] ?? research.status}
              </span>
              {research.cvAreas.map((area) => (
                <span
                  key={area}
                  className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: 'var(--white-50)', border: '1px solid var(--white-10)' }}
                >
                  {AREA_LABELS[area]}
                </span>
              ))}
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
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--white-70)' }}>
                  {research.description}
                </p>
                {research.link && (
                  <a
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60"
                    style={{ color: 'var(--accent)' }}
                  >
                    {ui.viewPublication}
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

export default function ResearchesSection() {
  const [active, setActive] = useState<Research | null>(null)
  const [expanded, setExpanded] = useState(false)
  const locale = useLocale()
  const ui = getUiStrings(locale)

  const all = getPortfolioData(locale).researches
  const displayed = expanded ? all : all.slice(0, LIMIT)

  return (
    <SectionWrapper id="researches" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.p
          className="section-label mb-10"
          style={{ color: 'var(--white-45)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {ui.researches}
        </motion.p>

        <div
          className="rounded-2xl"
          style={{
            border: '1px solid var(--white-10)',
            backgroundColor: 'rgba(248,248,252,0.92)',
            padding: '0 28px',
          }}
        >
          {displayed.map((research, i) => (
            <ResearchRow
              key={research.id}
              research={research}
              index={i}
              isLast={i === displayed.length - 1}
              onClick={() => setActive(research)}
              locale={locale}
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
                <><span>{ui.showLess}</span><span>↑</span></>
              ) : (
                <><span>{ui.showAllResearches(all.length)}</span><span>↓</span></>
              )}
            </button>
          </motion.div>
        )}
      </div>

      <ResearchModal research={active} onClose={() => setActive(null)} locale={locale} />
    </SectionWrapper>
  )
}
