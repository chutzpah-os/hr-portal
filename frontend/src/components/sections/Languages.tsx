'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from 'next-intl'
import { getPortfolioData, type Language } from '@/data/portfolio'

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

function LanguageRow({
  lang,
  index,
  isLast,
  onClick,
}: {
  lang: Language
  index: number
  isLast: boolean
  onClick: () => void
}) {
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
        className="flex items-center gap-5 py-5"
        style={{ borderBottom: isLast ? 'none' : '1px solid rgba(10,10,15,0.07)' }}
      >
        <div className="flex-1 min-w-0">
          <h3
            className="leading-snug mb-0.5 transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{
              color: 'var(--white-90)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              fontWeight: 600,
            }}
          >
            {lang.language}
          </h3>
          <p className="text-[0.65rem] uppercase tracking-widest" style={{ color: 'var(--white-40)' }}>
            {lang.level}
          </p>
        </div>

        <span
          className="shrink-0 text-base opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
          style={{ color: 'var(--accent)' }}
        >
          →
        </span>
      </div>
    </motion.button>
  )
}

function LanguageModal({
  lang,
  onClose,
  isPt,
}: {
  lang: Language | null
  onClose: () => void
  isPt: boolean
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

  const embedUrl = lang?.details.verificationLink
    ? getYouTubeEmbedUrl(lang.details.verificationLink)
    : null

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
            style={{ top: 72, left: 8, right: 8, bottom: 16, zIndex: 50, backgroundColor: 'rgb(248,248,252)' }}
          >
            {/* Header */}
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
                  className="font-bold leading-tight"
                  style={{ color: 'var(--white-100)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', letterSpacing: '-0.02em' }}
                >
                  {lang.language}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 text-xl font-light"
                style={{ backgroundColor: 'rgba(10,10,15,0.08)', color: 'var(--white-60)' }}
                aria-label={isPt ? 'Fechar' : 'Close'}
              >
                ×
              </button>
            </div>

            {/* Body */}
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
                  {lang.details.description}
                </p>

                {lang.details.certifications.length > 0 && (
                  <>
                    <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                      {isPt ? 'Certificações & Notas' : 'Certifications & Notes'}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {lang.details.certifications.map((cert, i) => (
                        <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                          <span style={{ color: 'var(--white-30)' }}>—</span>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* YouTube embed */}
                {embedUrl && (
                  <div className="mt-2">
                    <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                      {isPt ? 'Verificação' : 'Verification'}
                    </p>
                    <div
                      className="w-full rounded-2xl overflow-hidden"
                      style={{ aspectRatio: '16/9' }}
                    >
                      <iframe
                        src={embedUrl}
                        title={`${lang.language} proficiency verification`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        style={{ border: 'none' }}
                      />
                    </div>
                  </div>
                )}

                {/* Fallback: plain link if not YouTube */}
                {!embedUrl && lang.details.verificationLink && lang.details.verificationLink !== '#' && (
                  <a
                    href={lang.details.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60"
                    style={{ color: 'var(--accent)' }}
                  >
                    {isPt ? 'Verificar Proficiência →' : 'Verify Proficiency →'}
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
  const locale = useLocale()
  const isPt = locale === 'pt'

  const all = getPortfolioData(locale).languages

  return (
    <section id="languages">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-10 pb-14">
        <motion.p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-8 font-medium"
          style={{ color: 'var(--white-35)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {isPt ? 'Idiomas' : 'Languages'}
        </motion.p>

        <div
          className="rounded-2xl"
          style={{
            border: '1px solid var(--white-10)',
            backgroundColor: 'rgba(10,10,15,0.025)',
            padding: '0 28px',
          }}
        >
          {all.map((lang, i) => (
            <LanguageRow
              key={lang.id}
              lang={lang}
              index={i}
              isLast={i === all.length - 1}
              onClick={() => setActive(lang)}
            />
          ))}
        </div>
      </div>

      <LanguageModal lang={active} onClose={() => setActive(null)} isPt={isPt} />
    </section>
  )
}
