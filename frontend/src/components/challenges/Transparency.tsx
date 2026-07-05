'use client'

import { motion } from 'framer-motion'
import type { TransparencyItem } from '@/data/challenges'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

const BAR_CONFIG = [
  { percent: 'var(--chart-primary)',   label: 'var(--white-80)', bar: 'var(--chart-primary)',   track: 'var(--chart-track)', height: '8px', labelSize: '0.72rem', fw: 600 },
  { percent: 'var(--chart-secondary)', label: 'var(--white-55)', bar: 'var(--chart-secondary)', track: 'var(--chart-track)', height: '4px', labelSize: '0.6rem',  fw: 500 },
  { percent: 'var(--chart-tertiary)',  label: 'var(--white-40)', bar: 'var(--chart-tertiary)',  track: 'var(--chart-track)', height: '4px', labelSize: '0.6rem',  fw: 400 },
]

export default function Transparency({
  items,
  narrative,
}: {
  items: TransparencyItem[]
  narrative: KMilesNarrative
}) {
  return (
    <div>
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-2"
        style={{ color: 'var(--label)', borderBottom: '1px solid var(--divider)', paddingBottom: '0.5rem' }}
      >
        {narrative.transparencySectionTitle}
      </div>
      <p className="text-xs mb-8 italic" style={{ color: 'var(--white-38)' }}>
        {narrative.transparencySubtitle}{' '}
        <a
          href="https://international.terryfox.ca/page/1k-miles-of-hope"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-opacity hover:opacity-70"
          style={{ color: 'var(--accent)' }}
        >
          terryfox.ca
        </a>
      </p>

      <div className="space-y-6">
        {items.map((item, i) => {
          const cfg = BAR_CONFIG[i] ?? BAR_CONFIG[BAR_CONFIG.length - 1]
          return (
            <div key={i}>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span
                    className="font-bold mr-3"
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: i === 0 ? 'clamp(1.8rem, 5vw, 2.6rem)' : 'clamp(1.1rem, 3vw, 1.5rem)',
                      color: cfg.percent,
                      lineHeight: 1,
                    }}
                  >
                    {item.percent}%
                  </span>
                  <span
                    className="uppercase tracking-widest"
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: cfg.labelSize,
                      color: cfg.label,
                      fontWeight: cfg.fw,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              <div
                className="rounded-full overflow-hidden mb-2"
                style={{ height: cfg.height, backgroundColor: cfg.track }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: cfg.bar }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                />
              </div>

              <p className="text-xs leading-relaxed" style={{ color: 'var(--white-40)' }}>
                {item.detail}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-6 text-[0.45rem] uppercase tracking-widest text-right" style={{ color: 'var(--white-22)' }}>
        {narrative.transparencySourceLabel}
      </div>
    </div>
  )
}
