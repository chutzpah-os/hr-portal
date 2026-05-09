'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Research } from '@/data/portfolio'
import { AREA_LABELS } from '@/utils/cvAreaMap'

const LIMIT = 3
const GRADIENT = 'from-[#f2d0c4] to-[#D4775A]'
const rotations = [-3, 4, -2, 5, -4, 3, -5, 2, -3, 4]

function ResearchCard({
  research,
  index,
  onClick,
}: {
  research: Research
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
              {research.field}
            </span>
            <h3
              className="mb-3 leading-tight"
              style={{
                color: 'var(--white-95)',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                fontWeight: 700,
              }}
            >
              {research.title}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
              <span className="text-xs" style={{ color: 'var(--white-40)' }}>
                {research.status}
              </span>
              {research.cvAreas.slice(0, 2).map((area) => (
                <span key={area} className="text-xs" style={{ color: 'var(--white-40)' }}>
                  {AREA_LABELS[area]}
                </span>
              ))}
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
              <div className="w-full h-full flex items-end p-4">
                <span
                  className="text-[0.55rem] uppercase tracking-widest font-medium"
                  style={{ color: 'rgba(10,10,15,0.28)' }}
                >
                  {research.field}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

function ResearchModal({
  research,
  onClose,
}: {
  research: Research | null
  onClose: () => void
}) {
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
                aria-label="Close"
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
                {research.status}
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
                    View Publication →
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

  const all = portfolioData.researches
  const displayed = expanded ? all : all.slice(0, LIMIT)

  return (
    <SectionWrapper id="researches" fullscreen={false}>
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
              Researches
            </motion.h2>
          </div>
        </div>

        <motion.p layout className="text-xs mb-6" style={{ color: 'var(--white-30)' }}>
          {all.length} research{all.length !== 1 ? 'es' : ''}
        </motion.p>

        <div className="flex flex-col gap-4">
          {displayed.map((research, i) => (
            <ResearchCard
              key={research.id}
              research={research}
              index={i}
              onClick={() => setActive(research)}
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
                <><span>Show all {all.length} researches</span><span>↓</span></>
              )}
            </button>
          </motion.div>
        )}
      </div>

      <ResearchModal research={active} onClose={() => setActive(null)} />
    </SectionWrapper>
  )
}
