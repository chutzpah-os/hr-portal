'use client'

import { useTranslations } from 'next-intl'
import type { FundraisingGoals } from '@/data/challenges'
import type { KMilesNarrative as Narrative } from '@/data/1k-miles-narrative'

const DONATE_HREF = 'https://international.terryfox.ca/page/1k-miles-of-hope'

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
  const t = useTranslations('challenges')
  const raisedPercent = Math.min((goals.current / goals.tiers[0].amount) * 100, 100)
  const currentTierIdx = goals.tiers.findIndex((tier) => goals.current < tier.amount)
  const activeTierIdx = currentTierIdx === -1 ? goals.tiers.length - 1 : currentTierIdx

  return (
    <div className="mb-12 space-y-8">
      {/* Donation impact block */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(212,119,90,0.18)', backgroundColor: 'rgba(212,119,90,0.025)' }}
      >
        {/* Section label */}
        <div
          className="px-7 pt-6 pb-3 text-[0.55rem] uppercase tracking-widest"
          style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(212,119,90,0.1)' }}
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
        <div style={{ height: '1px', backgroundColor: 'rgba(212,119,90,0.08)', marginLeft: '1.75rem', marginRight: '1.75rem' }} />

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
          style={{ backgroundColor: 'rgba(212,119,90,0.06)', border: '1px solid rgba(212,119,90,0.12)' }}
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
      <div
        className="rounded-2xl p-7"
        style={{ border: '1px solid rgba(10,10,15,0.07)' }}
      >
        <div
          className="text-[0.55rem] uppercase tracking-widest mb-5"
          style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
        >
          {t('fundGoalLabel')}
        </div>

        <div className="relative">
          <div
            className="absolute left-[11px] top-3 bottom-3"
            style={{ width: '2px', backgroundColor: 'rgba(212,119,90,0.12)' }}
          />
          <div className="space-y-4">
            {goals.tiers.map((tier, i) => {
              const isActive = i === activeTierIdx
              const isDone = i < activeTierIdx
              return (
                <div key={tier.amount} className="flex items-center gap-4 relative pl-7">
                  <div
                    className="absolute left-0 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      border: isActive ? '2px solid var(--accent)' : isDone ? 'none' : '2px solid rgba(10,10,15,0.12)',
                      backgroundColor: isActive ? 'rgba(212,119,90,0.1)' : isDone ? 'var(--accent)' : 'rgb(255,255,255)',
                    }}
                  >
                    {isDone && (
                      <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="font-bold"
                        style={{
                          color: isActive ? 'var(--accent)' : isDone ? 'var(--white-45)' : 'var(--white-35)',
                          fontFamily: 'var(--font-syne)',
                          fontSize: isActive ? '1.1rem' : '0.9rem',
                        }}
                      >
                        {formatAmount(tier.amount)}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--white-35)' }}>
                        {tier.label}
                      </span>
                    </div>
                    {isActive && (
                      <div className="mt-2 rounded-full overflow-hidden" style={{ height: '4px', backgroundColor: 'rgba(212,119,90,0.12)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${raisedPercent}%`, backgroundColor: 'var(--accent)', transition: 'width 1s ease' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-7 flex justify-center">
          <a
            href={DONATE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-opacity duration-200 font-semibold"
            style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {t('donateNow')}
          </a>
        </div>
      </div>
    </div>
  )
}
