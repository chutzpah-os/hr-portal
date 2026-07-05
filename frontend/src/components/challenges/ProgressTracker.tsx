'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { useTranslations } from 'next-intl'
import type { ChallengeProgress } from '@/data/challenges'

function AnimatedCounter({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return controls.stop
  }, [inView, to, duration])

  return <span ref={ref}>{value.toLocaleString()}</span>
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

export default function ProgressTracker({ progress }: { progress: ChallengeProgress }) {
  const t = useTranslations('challenges')
  const milesPercent = Math.min((progress.milesRun / progress.goalMiles) * 100, 100)

  return (
    <div
      className="rounded-2xl mb-12 overflow-hidden"
      style={{ border: '1px solid rgba(212,119,90,0.18)', backgroundColor: 'rgba(212,119,90,0.025)' }}
    >
      {/* Three metric columns */}
      <div
        className="grid grid-cols-3"
        style={{ borderBottom: '1px solid rgba(212,119,90,0.12)' }}
      >
        {/* Days */}
        <div
          className="p-6 text-center"
          style={{ borderRight: '1px solid rgba(212,119,90,0.12)' }}
        >
          <div
            className="font-bold leading-none"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
          >
            <AnimatedCounter to={progress.daysCompleted} />
          </div>
          <div className="text-[0.55rem] uppercase tracking-widest mt-2" style={{ color: 'var(--white-45)' }}>
            {t('progressDays')}
          </div>
          <div className="text-[0.48rem] uppercase tracking-widest mt-1" style={{ color: 'var(--white-28)' }}>
            of {progress.goalDays}
          </div>
        </div>

        {/* Miles */}
        <div
          className="p-6 text-center"
          style={{ borderRight: '1px solid rgba(212,119,90,0.12)' }}
        >
          <div
            className="font-bold leading-none"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
          >
            <AnimatedCounter to={progress.milesRun} />
          </div>
          <div className="text-[0.55rem] uppercase tracking-widest mt-2" style={{ color: 'var(--white-45)' }}>
            {t('progressMiles')}
          </div>
          <div className="text-[0.48rem] uppercase tracking-widest mt-1" style={{ color: 'var(--white-28)' }}>
            of {progress.goalMiles.toLocaleString()}
          </div>
        </div>

        {/* Date */}
        <div className="p-6 text-center flex flex-col items-center justify-center gap-1.5">
          <div
            className="font-medium"
            style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)', color: 'var(--white-55)', fontFamily: 'var(--font-syne)' }}
          >
            {formatDate(progress.lastUpdated)}
          </div>
          <div className="text-[0.48rem] uppercase tracking-widest" style={{ color: 'var(--white-28)' }}>
            {t('progressLastUpdated')}
          </div>
        </div>
      </div>

      {/* Miles progress bar */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[0.5rem] uppercase tracking-widest" style={{ color: 'var(--white-32)' }}>
            {t('progressMiles')}
          </span>
          <span
            className="text-[0.6rem] font-semibold uppercase tracking-widest"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
          >
            {milesPercent.toFixed(1)}%
          </span>
        </div>
        <div
          className="rounded-full overflow-hidden"
          style={{ height: '7px', backgroundColor: 'rgba(212,119,90,0.1)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
            initial={{ width: 0 }}
            whileInView={{ width: `${milesPercent}%` }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[0.45rem] uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
            0
          </span>
          <span className="text-[0.45rem] uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
            {progress.goalMiles.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}
