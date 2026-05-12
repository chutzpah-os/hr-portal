'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Experience } from '@/data/portfolio'

const LIMIT = 3
const rotations = [-3, 4, -2, 5, -4, 3]

const AREA_GRADIENTS: Record<string, string> = {
  cyber:    'from-[#f2d0c4] to-[#D4775A]',
  data:     'from-[#f2d0c4] to-[#D4775A]',
  aiml:     'from-[#f2d0c4] to-[#D4775A]',
  software: 'from-[#f2d0c4] to-[#D4775A]',
}

function cardGradient(exp: Experience) {
  const area = exp.cvAreas?.[0]
  return AREA_GRADIENTS[area] ?? 'from-[#f2d0c4] to-[#D4775A]'
}

// ── Card ──────────────────────────────────────────────────────────────────────
function ExperienceCard({
  exp,
  index,
  onClick,
}: {
  exp: Experience
  index: number
  onClick: () => void
}) {
  const rot = rotations[index % rotations.length]
  const gradient = cardGradient(exp)

  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
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

          {/* Left: text */}
          <div className="sm:w-1/2">
            <h3
              className="mb-1 leading-tight"
              style={{
                color: 'var(--white-95)',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                fontWeight: 700,
              }}
            >
              {exp.title}
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--white-55)' }}>
              {exp.company}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
              {exp.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs" style={{ color: 'var(--white-40)' }}>
                  {tag}
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

          {/* Right: tilted image or gradient block */}
          <div className="sm:w-[45%] relative h-[140px] sm:h-[160px]">
            <motion.div
              className={`absolute inset-0 overflow-hidden rounded-2xl ${!exp.image ? `bg-gradient-to-br ${gradient}` : ''}`}
              style={{
                rotate: rot,
                boxShadow: '0 8px 24px rgba(10,10,15,0.07)',
                backgroundColor: exp.image ? 'transparent' : undefined,
              }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {exp.image ? (
                <Image
                  src={exp.image}
                  alt={exp.company}
                  fill
                  sizes="(max-width: 640px) 90vw, 45vw"
                  quality={80}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-end p-4">
                  <span
                    className="text-[0.55rem] uppercase tracking-widest font-medium"
                    style={{ color: 'rgba(10,10,15,0.28)' }}
                  >
                    {exp.company}
                  </span>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </motion.button>
  )
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function ExperienceModal({
  exp,
  onClose,
}: {
  exp: Experience | null
  onClose: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (exp) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [exp])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {exp && (
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
              top: 72, left: 8, right: 8, bottom: 16,
              zIndex: 50,
              backgroundColor: 'rgb(248,248,252)',
            }}
          >
            {/* Cover image banner */}
            {exp.image && (
              <div className="relative w-full shrink-0" style={{ height: '200px' }}>
                <Image
                  src={exp.image}
                  alt={exp.company}
                  fill
                  sizes="100vw"
                  quality={80}
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgb(248,248,252))' }}
                />
              </div>
            )}

            {/* Top bar */}
            <div
              className="flex items-start justify-between px-6 py-5 shrink-0"
              style={{
                borderBottom: '1px solid rgba(10,10,15,0.08)',
                backgroundColor: 'rgb(248,248,252)',
                marginTop: exp.image ? '-2rem' : 0,
              }}
            >
              <div className="pr-4 min-w-0">
                <span
                  className="text-[0.6rem] uppercase tracking-widest block mb-1"
                  style={{ color: 'var(--white-35)' }}
                >
                  {exp.company}
                </span>
                <h2
                  className="font-bold leading-tight mb-1.5"
                  style={{
                    color: 'var(--white-100)',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {exp.title}
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
                  {exp.description}
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

            {/* Tags */}
            <div
              className="flex flex-wrap gap-2 px-6 py-3 shrink-0"
              style={{ borderBottom: '1px solid rgba(10,10,15,0.06)' }}
            >
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    color: 'var(--white-50)',
                    border: '1px solid var(--white-10)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Scrollable body */}
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
                  {exp.details.overview}
                </p>

                <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                  Key Focus Areas
                </p>
                <ul className="space-y-2 mb-8">
                  {exp.details.keyAreas.map((area, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                      <span style={{ color: 'var(--white-30)' }}>—</span>
                      {area}
                    </li>
                  ))}
                </ul>

                <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--white-35)' }}>
                  Technologies
                </p>
                <p className="text-sm" style={{ color: 'var(--white-65)' }}>
                  {exp.details.technologies}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ExperienceSection() {
  const [active, setActive] = useState<Experience | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [collapsed, setCollapsed] = useState(true)

  const all = portfolioData.experience
  const displayed = showAll ? all : all.slice(0, LIMIT)

  return (
    <SectionWrapper id="experience" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">

        {/* Header */}
        <div
          className="flex items-center justify-between"
          style={{ paddingBottom: '2.5rem' }}
        >
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Work History
          </motion.p>

          <motion.button
            onClick={() => setCollapsed((v) => !v)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-[0.6rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200"
            style={{ border: '1px solid var(--white-15)', color: 'var(--white-45)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--white-40)'
              e.currentTarget.style.color = 'var(--white-80)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--white-15)'
              e.currentTarget.style.color = 'var(--white-45)'
            }}
          >
            {collapsed ? <><span>Expand</span><span>↓</span></> : <><span>Collapse</span><span>↑</span></>}
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {collapsed ? (
            /* ── Collapsed: dot-leader index card ── */
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ paddingBottom: '5rem' }}
            >
              <div
                className="rounded-3xl"
                style={{
                  border: '1px solid var(--white-10)',
                  backgroundColor: 'rgba(248,248,252,0.92)',
                  padding: '2rem 2.5rem',
                }}
              >
                {all.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-baseline py-3"
                    style={{
                      borderBottom: i < all.length - 1
                        ? '1px solid rgba(10,10,15,0.05)'
                        : '1px solid rgba(10,10,15,0.10)',
                    }}
                  >
                    <span
                      className="text-sm font-medium shrink-0"
                      style={{ color: 'var(--white-80)', minWidth: '10rem' }}
                    >
                      {exp.title}
                    </span>
                    <span
                      className="text-xs shrink-0 mx-3"
                      style={{ color: 'var(--white-40)' }}
                    >
                      {exp.company}
                    </span>
                    <span
                      className="flex-1 mx-4"
                      style={{ borderBottom: '1px dotted rgba(10,10,15,0.18)', marginBottom: '5px' }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: all.length * 0.05 + 0.1 }}
                  className="flex items-center justify-end gap-5 pt-5"
                >
                  <span className="text-[0.6rem] uppercase tracking-widest" style={{ color: 'var(--white-30)' }}>
                    Total
                  </span>
                  <span
                    className="text-2xl font-bold tabular-nums leading-none"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-syne, var(--font-inter))' }}
                  >
                    {String(all.length).padStart(2, '0')}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* ── Expanded: full cards ── */
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-col gap-4">
                {displayed.map((exp, i) => (
                  <ExperienceCard
                    key={exp.id}
                    exp={exp}
                    index={i}
                    onClick={() => setActive(exp)}
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
                    onClick={() => setShowAll((v) => !v)}
                    className="text-xs uppercase tracking-widest flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
                    style={{ color: 'var(--accent)' }}
                  >
                    {showAll ? (
                      <><span>Show less</span><span>↑</span></>
                    ) : (
                      <><span>Show all {all.length}</span><span>↓</span></>
                    )}
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ExperienceModal exp={active} onClose={() => setActive(null)} />
    </SectionWrapper>
  )
}
