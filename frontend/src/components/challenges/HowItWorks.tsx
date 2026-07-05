'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import type { ChallengeProgress } from '@/data/challenges'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'
import ProgressTracker from './ProgressTracker'

const LIVE_LABELS: Record<string, string> = {
  en: 'Live', pt: 'Ao Vivo', es: 'En Vivo', fr: 'En Direct', ca: 'En Directe',
}

export default function HowItWorks({
  narrative,
  progress,
}: {
  narrative: KMilesNarrative
  progress: ChallengeProgress
}) {
  const locale = useLocale()
  const steps = narrative.howItWorksSteps

  return (
    <div className="mb-16">
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-8"
        style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
      >
        {narrative.howItWorksTitle}
      </div>

      {/* Step flow — horizontal on desktop, vertical on mobile */}
      <div className="hidden md:flex items-start mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start flex-1 min-w-0">
            {/* Step content */}
            <motion.div
              className="flex-1 pr-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="text-[0.42rem] uppercase tracking-widest mb-2"
                style={{ color: i === 0 ? 'var(--accent)' : 'var(--white-22)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className="font-bold uppercase mb-2"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(0.72rem, 1.4vw, 0.88rem)',
                  color: i === 0 ? 'var(--white-92)' : 'var(--white-65)',
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--white-40)' }}>
                {step.description}
              </p>
            </motion.div>

            {/* Arrow connector — all except last */}
            {i < steps.length - 1 && (
              <div
                className="shrink-0 self-center mb-4 px-1"
                style={{ color: 'rgba(212,119,90,0.25)', fontSize: '0.65rem' }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col md:hidden mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[0.42rem] font-semibold"
                style={{
                  backgroundColor: i === 0 ? 'rgba(212,119,90,0.12)' : 'rgba(10,10,15,0.04)',
                  color: i === 0 ? 'var(--accent)' : 'var(--white-30)',
                  fontFamily: 'var(--font-syne)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 my-1" style={{ backgroundColor: 'rgba(10,10,15,0.08)', minHeight: '2rem' }} />
              )}
            </div>
            <div className="pb-5">
              <div
                className="font-bold uppercase mb-1"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.82rem',
                  color: i === 0 ? 'var(--white-92)' : 'var(--white-65)',
                }}
              >
                {step.title}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--white-42)' }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Live progress — proof of concept */}
      <div
        className="text-[0.42rem] uppercase tracking-widest mb-3"
        style={{ color: 'rgba(212,119,90,0.5)', paddingTop: '0.75rem', borderTop: '1px solid rgba(212,119,90,0.1)' }}
      >
        {LIVE_LABELS[locale] ?? LIVE_LABELS.en}
      </div>
      <ProgressTracker progress={progress} />
    </div>
  )
}
