'use client'

import { useTranslations } from 'next-intl'
import type { FundraisingGoals } from '@/data/challenges'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

const DONATE_HREF = 'https://international.terryfox.ca/page/1k-miles-of-hope'

function formatAmount(n: number) {
  if (n >= 1_000_000) return `US$${(n / 1_000_000).toFixed(0)}M`
  if (n >= 1_000) return `US$${(n / 1_000).toFixed(0)}K`
  return `US$${n}`
}

export default function FundraisingTiers({
  goals,
  narrative,
}: {
  goals: FundraisingGoals
  narrative: KMilesNarrative
}) {
  const t = useTranslations('challenges')
  const raisedPercent = Math.min((goals.current / goals.tiers[0].amount) * 100, 100)
  const currentTierIdx = goals.tiers.findIndex((tier) => goals.current < tier.amount)
  const activeTierIdx = currentTierIdx === -1 ? goals.tiers.length - 1 : currentTierIdx

  return (
    <div className="mb-16">
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-7"
        style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
      >
        {narrative.goalsSectionTitle}
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
                      <path d="M2 7l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

      <div className="mt-8 flex justify-center">
        <a
          href={DONATE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-opacity duration-200 font-semibold hover:opacity-85"
          style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)' }}
        >
          {t('donateNow')}
        </a>
      </div>
    </div>
  )
}
