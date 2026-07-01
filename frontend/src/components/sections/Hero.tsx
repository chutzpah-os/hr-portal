'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import CVDownloadModal from '@/components/ui/CVDownloadModal'
import { getUiStrings } from '@/i18n/uiStrings'

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: 'easeOut' } },
})

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false)
  const locale = useLocale()
  const ui = getUiStrings(locale)
  const [h1, h2, h3] = ui.heroHeadline

  return (
    <section
      id="hero"
      className="section-fullscreen relative overflow-hidden flex flex-col"
      style={{ backgroundColor: 'rgb(255,255,255)' }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(10,10,15,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 0,
        }}
      />

      {/* ── Two-column content ── */}
      <div
        className="relative flex-1 flex flex-col md:flex-row md:items-center max-w-content mx-auto w-full px-6 md:px-10 gap-12 md:gap-0"
        style={{ zIndex: 2, paddingTop: '6rem', paddingBottom: '5rem' }}
      >

        {/* Left: text */}
        <div className="md:w-[55%] flex flex-col justify-center">

          {/* Headline */}
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(3rem, 9vw, 7.5rem)',
              lineHeight: 1,
              color: 'var(--white-100)',
              letterSpacing: '-0.025em',
              fontWeight: 700,
              textTransform: 'none',
              marginBottom: '2rem',
            }}
          >
            {h1}<br /><mark>{h2}</mark><br />{h3}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base leading-relaxed mb-10 max-w-md"
            style={{ color: 'var(--white-65)' }}
            initial="hidden" animate="visible" variants={fadeUp(0.28)}
          >
            {ui.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial="hidden" animate="visible" variants={fadeUp(0.4)}
          >
            <button
              onClick={() => setCvOpen(true)}
              className="text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'rgb(255,255,255)',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              {ui.downloadCv}
            </button>
            <a
              href="https://calendly.com/hanielrolemberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
              style={{ border: '1px solid var(--white-20)', color: 'var(--white-60)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--white-50)'
                e.currentTarget.style.color = 'var(--white-90)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--white-20)'
                e.currentTarget.style.color = 'var(--white-60)'
              }}
            >
              {ui.bookCall}
            </a>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end items-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
            style={{ position: 'relative', paddingBottom: '24px', paddingLeft: '8px' }}
          >
            {/* Portrait frame */}
            <div
              style={{
                width: 'clamp(220px, 60vw, 380px)',
                height: 'clamp(290px, 75vw, 500px)',
                borderRadius: '28px',
                overflow: 'hidden',
                transform: 'rotate(-2deg) scale(1.08)',
                boxShadow: '0 32px 80px rgba(10,10,15,0.13), 0 8px 24px rgba(10,10,15,0.08)',
                position: 'relative',
              }}
            >
              <Image
                src="/images/portfolio-profile.jpg"
                alt="Haniel Rolemberg"
                fill
                priority
                sizes="(max-width: 768px) 60vw, 380px"
                quality={85}
                className="object-cover object-top"
              />
            </div>

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: '0px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgb(255,255,255)',
                border: '1px solid rgba(10,10,15,0.09)',
                borderRadius: '18px',
                padding: '8px 18px',
                boxShadow: '0 8px 32px rgba(10,10,15,0.10)',
                whiteSpace: 'nowrap',
              }}
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]" style={{ color: 'var(--white-80)' }}>
                Problem Solver · <span style={{ color: 'var(--accent)' }}>1b2035</span>
              </p>
            </motion.div>

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                backgroundColor: 'rgb(255,255,255)',
                border: '1px solid rgba(10,10,15,0.09)',
                borderRadius: '18px',
                padding: '10px 16px',
                boxShadow: '0 8px 32px rgba(10,10,15,0.10)',
                display: 'flex',
                gap: '16px',
              }}
            >
              {[
                { value: '6+',  label: ui.statsYears    },
                { value: '6',   label: ui.statsResearch },
                { value: '30+', label: ui.statsProjects },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="text-lg font-bold leading-none mb-0.5"
                    style={{
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-syne, var(--font-inter))',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: 'var(--white-80)' }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div
        className="relative w-full overflow-hidden shrink-0"
        style={{
          borderTop: '1px solid rgba(10,10,15,0.07)',
          zIndex: 2,
          paddingTop: '14px',
          paddingBottom: '14px',
        }}
      >
        <div className="marquee-track">
          {[...ui.marqueeItems, ...ui.marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center"
              style={{
                color: 'var(--white-30)',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginRight: '2.5rem',
              }}
            >
              {item}
              <span style={{ color: 'var(--accent)', marginLeft: '2.5rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <CVDownloadModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  )
}
