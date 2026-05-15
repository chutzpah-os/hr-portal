'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { portfolioData, type Volunteering } from '@/data/portfolio'

const LIMIT = 3

function VolunteeringTimelineItem({
  vol,
  index,
  isLast,
  onClick,
}: {
  vol: Volunteering
  index: number
  isLast: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      className="flex gap-5"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center shrink-0" style={{ width: '20px' }}>
        <div
          className="rounded-full shrink-0"
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: 'var(--accent)',
            marginTop: '6px',
            boxShadow: '0 0 0 3px rgba(212,119,90,0.15)',
          }}
        />
        {!isLast && (
          <div
            className="flex-1 mt-2"
            style={{ width: '1px', backgroundColor: 'rgba(10,10,15,0.1)', minHeight: '32px' }}
          />
        )}
      </div>

      {/* Clickable content */}
      <button onClick={onClick} className="group text-left pb-8 flex-1">
        <div className="flex items-start gap-4">
          {/* Image thumbnail */}
          <div
            className="shrink-0 rounded-xl overflow-hidden"
            style={{ width: '68px', height: '68px', backgroundColor: 'rgba(212,119,90,0.10)' }}
          >
            {vol.image ? (
              <Image
                src={vol.image}
                alt={vol.organization}
                width={68}
                height={68}
                quality={75}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-sm font-semibold uppercase" style={{ color: 'var(--accent)' }}>
                  {vol.organization.slice(0, 2)}
                </span>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="min-w-0 pt-1">
            <h3
              className="leading-snug mb-1 transition-colors duration-200 group-hover:text-[var(--accent)]"
              style={{
                color: 'var(--white-90)',
                fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                fontWeight: 600,
              }}
            >
              {vol.title}
            </h3>
            <p className="text-xs" style={{ color: 'var(--white-45)' }}>
              {vol.organization}
            </p>
            <span
              className="inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: 'var(--accent)' }}
            >
              View details →
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

function VolunteeringModal({
  vol,
  onClose,
}: {
  vol: Volunteering | null
  onClose: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (vol) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [vol])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {vol && (
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
            {/* Cover image banner */}
            {vol.image && (
              <div className="relative w-full shrink-0" style={{ height: '200px' }}>
                <Image
                  src={vol.image}
                  alt={vol.organization}
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

            <div
              className="flex items-start justify-between px-6 py-5 shrink-0"
              style={{
                borderBottom: '1px solid rgba(10,10,15,0.08)',
                backgroundColor: 'rgb(248,248,252)',
                marginTop: vol.image ? '-2rem' : 0,
              }}
            >
              <div className="pr-4 min-w-0">
                <span
                  className="text-[0.6rem] uppercase tracking-widest block mb-1"
                  style={{ color: 'var(--white-35)' }}
                >
                  {vol.organization}
                </span>
                <h2
                  className="font-bold leading-tight mb-1.5"
                  style={{
                    color: 'var(--white-100)',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {vol.title}
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
                  {vol.description}
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
              ref={scrollRef}
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
              style={{ touchAction: 'pan-y' } as React.CSSProperties}
              onWheel={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="px-6 sm:px-10 py-8 max-w-2xl mx-auto w-full">
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--white-70)' }}>
                  {vol.details.overview}
                </p>

                {vol.details.focusAreas && (
                  <>
                    <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                      Focus Areas
                    </p>
                    <ul className="space-y-2 mb-8">
                      {vol.details.focusAreas.map((area, i) => (
                        <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                          <span style={{ color: 'var(--white-30)' }}>—</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {vol.details.responsibilities && (
                  <>
                    <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                      Responsibilities
                    </p>
                    <ul className="space-y-2 mb-8">
                      {vol.details.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                          <span style={{ color: 'var(--white-30)' }}>—</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--white-35)' }}>
                  Category
                </p>
                <p className="text-sm" style={{ color: 'var(--white-65)' }}>
                  {vol.details.category}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function VolunteeringSection() {
  const [active, setActive] = useState<Volunteering | null>(null)
  const [expanded, setExpanded] = useState(false)

  const all = portfolioData.volunteering
  const displayed = expanded ? all : all.slice(0, LIMIT)

  return (
    <section id="volunteering">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-10 pb-14">
        <motion.p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-8 font-medium"
          style={{ color: 'var(--white-35)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Volunteering
        </motion.p>

        <div>
          {displayed.map((vol, i) => (
            <VolunteeringTimelineItem
              key={vol.id}
              vol={vol}
              index={i}
              isLast={i === displayed.length - 1}
              onClick={() => setActive(vol)}
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

      <VolunteeringModal vol={active} onClose={() => setActive(null)} />
    </section>
  )
}
