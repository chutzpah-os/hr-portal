'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import type { ImpactMetric } from '@/data/challenges'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

function AnimatedValue({ raw }: { raw: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  const numeric = parseFloat(raw.replace(/[^0-9.]/g, ''))
  const isNumeric = !isNaN(numeric) && raw.replace(/[^0-9.]/g, '') === raw.trim()

  useEffect(() => {
    if (!inView) return
    if (!isNumeric) { setDisplay(raw); return }
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    })
    return controls.stop
  }, [inView, isNumeric, numeric, raw])

  return <span ref={ref}>{isNumeric ? display : raw}</span>
}

export default function ImpactSection({
  metrics,
  narrative,
}: {
  metrics: ImpactMetric[]
  narrative: KMilesNarrative
}) {
  return (
    <div>
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-5"
        style={{ color: 'var(--label)', borderBottom: '1px solid var(--divider)', paddingBottom: '0.5rem' }}
      >
        {narrative.impactSectionTitle}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ backgroundColor: 'transparent' }}>
        {metrics.map((m, i) => (
          <div
            key={i}
            className="p-5 card-light rounded-xl"
            style={{ backgroundColor: 'rgb(255,255,255)' }}
          >
            <div
              className="font-bold leading-none mb-2"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                color: 'var(--accent)',
              }}
            >
              <AnimatedValue raw={m.value} />
            </div>
            <div
              className="text-[0.58rem] uppercase tracking-widest mb-0.5"
              style={{ color: 'var(--white-65)' }}
            >
              {m.label}
            </div>
            {m.sublabel && (
              <div className="text-[0.48rem] uppercase tracking-widest" style={{ color: 'var(--white-45)' }}>
                {m.sublabel}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
