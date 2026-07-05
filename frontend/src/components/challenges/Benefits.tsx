'use client'

import { useState } from 'react'
import type { BenefitItem } from '@/data/challenges'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

export default function Benefits({
  benefits,
  narrative,
}: {
  benefits: BenefitItem[]
  narrative: KMilesNarrative
}) {
  const [tab, setTab] = useState<'company' | 'individual'>('company')
  const filtered = benefits.filter((b) => b.type === tab)

  return (
    <div>
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-2"
        style={{ color: 'var(--label)', borderBottom: '1px solid var(--divider)', paddingBottom: '0.5rem' }}
      >
        {narrative.benefitsSectionTitle}
      </div>
      <p className="text-sm mb-6 italic" style={{ color: 'var(--white-45)' }}>
        {narrative.benefitsSubtitle}
      </p>

      {/* Tabs */}
      <div className="flex gap-0 mb-6" style={{ borderBottom: '1px solid rgba(10,10,15,0.08)' }}>
        {(['company', 'individual'] as const).map((t) => {
          const label = t === 'company' ? narrative.benefitsTabCompany : narrative.benefitsTabIndividual
          const active = tab === t
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="text-xs uppercase tracking-widest pb-3 px-1 mr-6 transition-colors duration-150"
              style={{
                color: active ? 'var(--accent)' : 'var(--white-35)',
                borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
                marginBottom: '-1px',
                background: 'none',
                cursor: 'pointer',
                fontWeight: active ? 600 : 400,
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--divider)' }}>
        {filtered.map((item) => (
          <div
            key={item.title}
            className="p-6 card-light"
            style={{ backgroundColor: 'rgb(255,255,255)' }}
          >
            <div
              className="text-[0.6rem] uppercase tracking-widest font-semibold mb-2"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
            >
              {item.title}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--white-58)' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
