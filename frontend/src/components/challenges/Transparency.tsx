'use client'

import { motion } from 'framer-motion'
import type { TransparencyItem } from '@/data/challenges'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

const BAR_OPACITIES = [1, 0.45, 0.28]

export default function Transparency({
  items,
  narrative,
}: {
  items: TransparencyItem[]
  narrative: KMilesNarrative
}) {
  return (
    <div className="mb-16">
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-2"
        style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
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
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <span
                  className="font-bold mr-3"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: i === 0 ? 'clamp(1.8rem, 5vw, 2.6rem)' : 'clamp(1.1rem, 3vw, 1.5rem)',
                    color: `rgba(212,119,90,${BAR_OPACITIES[i]})`,
                    lineHeight: 1,
                  }}
                >
                  {item.percent}%
                </span>
                <span
                  className="uppercase tracking-widest"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: i === 0 ? '0.72rem' : '0.6rem',
                    color: i === 0 ? 'var(--white-75)' : 'var(--white-45)',
                    fontWeight: 600,
                  }}
                >
                  {item.category}
                </span>
              </div>
            </div>

            {/* Animated bar */}
            <div
              className="rounded-full overflow-hidden mb-2"
              style={{ height: i === 0 ? '8px' : '4px', backgroundColor: 'rgba(10,10,15,0.07)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: `rgba(212,119,90,${BAR_OPACITIES[i]})` }}
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
        ))}
      </div>

      <div className="mt-6 text-[0.45rem] uppercase tracking-widest text-right" style={{ color: 'var(--white-22)' }}>
        Source: Terry Fox Foundation Annual Report · terryfox.ca
      </div>
    </div>
  )
}
