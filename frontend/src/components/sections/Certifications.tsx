'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Certification } from '@/data/portfolio'

const LIMIT = 4
const rotations = [-3, 4, -2, 5, -4, 3, -5, 2, -3, 4]

const CATEGORY_LABEL: Record<Certification['category'], string> = {
  cloud:       'Cloud',
  security:    'Security',
  networking:  'Networking',
  data:        'Data',
  development: 'Development',
}

const CATEGORY_GRADIENTS: Record<Certification['category'], string> = {
  cloud:       'from-[#f2d0c4] to-[#D4775A]',
  security:    'from-[#f2d0c4] to-[#D4775A]',
  networking:  'from-[#f2d0c4] to-[#D4775A]',
  data:        'from-[#f2d0c4] to-[#D4775A]',
  development: 'from-[#f2d0c4] to-[#D4775A]',
}

function CertCard({
  cert,
  index,
  onClick,
}: {
  cert: Certification
  index: number
  onClick: () => void
}) {
  const rot = rotations[index % rotations.length]
  const gradient = CATEGORY_GRADIENTS[cert.category]

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
        className="rounded-2xl transition-all duration-200"
        style={{
          padding: '20px 24px',
          backgroundColor: 'rgba(248,248,252,0.92)',
          border: '1px solid var(--white-10)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,119,90,0.3)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--white-10)' }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span
              className="text-[0.58rem] uppercase tracking-widest block mb-1.5"
              style={{ color: 'var(--accent)' }}
            >
              {CATEGORY_LABEL[cert.category]}
            </span>
            <h3
              className="leading-snug mb-1.5"
              style={{
                color: 'var(--white-90)',
                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                fontWeight: 600,
              }}
            >
              {cert.title}
            </h3>
            <p className="text-xs" style={{ color: 'var(--white-45)' }}>
              {cert.issuer}
            </p>
          </div>
          <span
            className="shrink-0 text-lg leading-none mt-1 group-hover:translate-x-1 transition-transform duration-200"
            style={{ color: 'var(--white-25)' }}
          >
            →
          </span>
        </div>
      </div>
    </motion.button>
  )
}

function CertModal({
  cert,
  onClose,
}: {
  cert: Certification | null
  onClose: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cert) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [cert])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {cert && (
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
                  {CATEGORY_LABEL[cert.category]}
                </span>
                <h2
                  className="font-bold leading-tight mb-1.5"
                  style={{
                    color: 'var(--white-100)',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {cert.title}
                </h2>
                <p className="text-sm" style={{ color: 'var(--white-55)' }}>
                  {cert.issuer} · {cert.date}
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
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: 'var(--white-50)', border: '1px solid var(--white-10)' }}
                >
                  {tag}
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
                <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--white-35)' }}>
                  Issuer
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--white-65)' }}>
                  {cert.issuer}
                </p>

                <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--white-35)' }}>
                  Date
                </p>
                <p className="text-sm mb-8" style={{ color: 'var(--white-65)' }}>
                  {cert.date}
                </p>

                {cert.credentialId && (
                  <>
                    <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--white-35)' }}>
                      Credential ID
                    </p>
                    <p className="text-sm mb-8 font-mono" style={{ color: 'var(--white-55)' }}>
                      {cert.credentialId}
                    </p>
                  </>
                )}

                {cert.verifyUrl && cert.verifyUrl !== '#' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60"
                    style={{ color: 'var(--accent)' }}
                  >
                    Verify Credential →
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

export default function CertificationsSection() {
  const [active, setActive] = useState<Certification | null>(null)
  const [expanded, setExpanded] = useState(false)

  const all = portfolioData.certifications
  const displayed = expanded ? all : all.slice(0, LIMIT)

  return (
    <SectionWrapper id="certifications" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <motion.p
              className="section-label"
              style={{ color: 'var(--white-45)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Certifications
            </motion.p>
          </div>
        </div>

        <motion.p layout className="text-xs mb-6" style={{ color: 'var(--white-30)' }}>
          {all.length} certification{all.length !== 1 ? 's' : ''}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {displayed.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              index={i}
              onClick={() => setActive(cert)}
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
                <><span>Show all {all.length} certifications</span><span>↓</span></>
              )}
            </button>
          </motion.div>
        )}
      </div>

      <CertModal cert={active} onClose={() => setActive(null)} />
    </SectionWrapper>
  )
}
