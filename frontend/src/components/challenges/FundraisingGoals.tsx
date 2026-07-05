'use client'

import type { FundraisingGoals } from '@/data/challenges'
import type { KMilesNarrative as Narrative } from '@/data/1k-miles-narrative'

const COUNTRY_EXAMPLES = [
  { country: 'Brasil', org: 'INCA — Instituto Nacional de Câncer' },
  { country: 'Canada', org: 'Terry Fox Research Institute' },
  { country: 'USA', org: 'Dana-Farber Cancer Institute' },
  { country: 'UK', org: 'Institute of Cancer Research, London' },
  { country: 'India', org: 'TATA Memorial Centre, Mumbai' },
  { country: 'Australia', org: "Sydney Children's Hospital" },
  { country: 'Japan', org: 'National Cancer Center Japan' },
  { country: 'Germany', org: 'German Cancer Research Center (DKFZ)' },
]

function formatAmount(n: number) {
  if (n >= 1_000_000) return `US$${(n / 1_000_000).toFixed(0)}M`
  if (n >= 1_000) return `US$${(n / 1_000).toFixed(0)}K`
  return `US$${n}`
}

export default function FundraisingGoals({
  goals,
  narrative,
}: {
  goals: FundraisingGoals
  narrative: Narrative
}) {
  return (
    <div>
      {/* Donation impact block */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: '1px solid var(--chart-secondary)', backgroundColor: 'var(--chart-track)' }}
      >
        {/* Section label */}
        <div
          className="px-7 pt-6 pb-3 text-[0.55rem] uppercase tracking-widest"
          style={{ color: 'var(--label)', borderBottom: '1px solid var(--chart-track)' }}
        >
          {narrative.donationTitle}
        </div>

        {/* Hero stat row */}
        <div className="px-7 pt-6 pb-5 flex items-end gap-5">
          <div>
            <div
              className="font-bold leading-none"
              style={{
                fontSize: 'clamp(3rem, 9vw, 5.5rem)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-syne)',
              }}
            >
              78%
            </div>
            <div
              className="mt-2 text-sm leading-snug"
              style={{ color: 'var(--white-55)', fontFamily: 'var(--font-syne)' }}
            >
              {narrative.donationLines[0]}
            </div>
            <div
              className="mt-1.5 text-[0.48rem] uppercase tracking-widest"
              style={{ color: 'var(--white-28)' }}
            >
              Terry Fox Foundation · Annual Report 2024
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--divider)', marginLeft: '1.75rem', marginRight: '1.75rem' }} />

        {/* Impact paragraphs */}
        <div className="px-7 py-5 space-y-3">
          {narrative.donationLines.slice(1).map((line, i) => (
            <p
              key={i}
              className="text-base leading-relaxed"
              style={{ color: i === narrative.donationLines.length - 2 ? 'var(--white-80)' : 'var(--white-60)', fontWeight: i === narrative.donationLines.length - 2 ? 500 : 400 }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Country callout */}
        <div
          className="mx-5 mb-5 px-5 py-4 rounded-xl"
          style={{ backgroundColor: 'var(--chart-track)', border: '1px solid var(--chart-secondary)' }}
        >
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: 'var(--white-75)', fontFamily: 'var(--font-syne)' }}
          >
            {narrative.donationCountry}
          </p>
          <div className="space-y-1.5">
            {COUNTRY_EXAMPLES.map((ex) => (
              <div key={ex.country} className="text-xs" style={{ color: 'var(--white-45)' }}>
                <span className="font-semibold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}>
                  {ex.country}
                </span>
                <span style={{ color: 'var(--white-25)' }}> · </span>
                {ex.org}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fundraising tiers */}
    </div>
  )
}
