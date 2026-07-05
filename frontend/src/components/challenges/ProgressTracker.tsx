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

export default function ProgressTracker({ progress }: { progress: ChallengeProgress }) {
  const t = useTranslations('challenges')
  const milesPercent = Math.min((progress.milesRun / progress.goalMiles) * 100, 100)
  const daysPercent = Math.min((progress.daysCompleted / progress.goalDays) * 100, 100)

  return (
    <div
      className="rounded-2xl mb-12 overflow-hidden"
      style={{ border: '1px solid rgba(212,119,90,0.18)', backgroundColor: 'rgba(212,119,90,0.03)' }}
    >
      {/* Metrics row */}
      <div className="grid grid-cols-3 divide-x divide-[rgba(212,119,90,0.12)]" style={{ borderBottom: '1px solid rgba(212,119,90,0.12)' }}>
        {/* Days completed */}
        <div className="p-6 text-center">
          <div
            className="font-bold leading-none mb-1"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
          >
            <AnimatedCounter to={progress.daysCompleted} />
          </div>
          <div className="text-[0.55rem] uppercase tracking-widest mt-1" style={{ color: 'var(--white-40)' }}>
            {t('progressDays')}
          </div>
          <div className="text-[0.5rem] uppercase tracking-widest mt-0.5" style={{ color: 'var(--white-25)' }}>
            / {progress.goalDays} {t('progressGoal')}
          </div>
        </div>

        {/* Miles run */}
        <div className="p-6 text-center">
          <div
            className="font-bold leading-none mb-1"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
          >
            <AnimatedCounter to={progress.milesRun} />
          </div>
          <div className="text-[0.55rem] uppercase tracking-widest mt-1" style={{ color: 'var(--white-40)' }}>
            {t('progressMiles')}
          </div>
          <div className="text-[0.5rem] uppercase tracking-widest mt-0.5" style={{ color: 'var(--white-25)' }}>
            / {progress.goalMiles.toLocaleString()} {t('progressGoal')}
          </div>
        </div>

        {/* Last updated */}
        <div className="p-6 text-center flex flex-col items-center justify-center">
          <div
            className="font-semibold mb-1"
            style={{ fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: 'var(--white-60)', fontFamily: 'var(--font-syne)' }}
          >
            {progress.lastUpdated}
          </div>
          <div className="text-[0.5rem] uppercase tracking-widest" style={{ color: 'var(--white-30)' }}>
            {t('progressLastUpdated')}
          </div>
        </div>
      </div>

      {/* Miles progress bar */}
      <div className="px-6 py-4">
        <div className="flex justify-between mb-2">
          <span className="text-[0.5rem] uppercase tracking-widest" style={{ color: 'var(--white-30)' }}>
            {t('progressMiles')}
          </span>
          <span className="text-[0.5rem] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            {milesPercent.toFixed(1)}%
          </span>
        </div>
        <div
          className="rounded-full overflow-hidden"
          style={{ height: '6px', backgroundColor: 'rgba(212,119,90,0.12)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
            initial={{ width: 0 }}
            whileInView={{ width: `${milesPercent}%` }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        {/* Day milestones */}
        <div
          className="rounded-full overflow-hidden mt-2"
          style={{ height: '3px', backgroundColor: 'rgba(212,119,90,0.08)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: 'rgba(212,119,90,0.35)' }}
            initial={{ width: 0 }}
            whileInView={{ width: `${daysPercent}%` }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[0.45rem] uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
            0
          </span>
          <span className="text-[0.45rem] uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
            {t('progressDays')}: {daysPercent.toFixed(0)}%
          </span>
          <span className="text-[0.45rem] uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
            1,000
          </span>
        </div>
      </div>
    </div>
  )
}
