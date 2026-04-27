'use client'

import { useState } from 'react'
import { SOLUTIONS, GROUPS, type Solution, type SolutionGroup } from '@/data/solutions'

const STAGES: { label: string; short: string; color: string }[] = [
  { label: 'Idea / Problem Discovery',     short: 'Idea',     color: 'rgba(148,163,184,1)' },
  { label: 'Problem-Solution Fit',         short: 'PS Fit',   color: 'rgba(96,165,250,1)'  },
  { label: 'MVP (Build Fast, Test Fast)',  short: 'MVP',      color: 'rgba(251,191,36,1)'  },
  { label: 'Early Users / Initial Traction', short: 'Early Users', color: 'rgba(251,146,60,1)' },
  { label: 'Product-Market Fit (PMF)',     short: 'PMF',      color: 'rgba(74,222,128,1)'  },
  { label: 'Growth',                       short: 'Growth',   color: 'rgba(52,211,153,1)'  },
  { label: 'Scale',                        short: 'Scale',    color: 'rgba(34,211,238,1)'  },
]

function getStage(status: string) {
  return STAGES.find(s => s.label === status) ?? STAGES[0]
}

function getStageIndex(status: string) {
  return STAGES.findIndex(s => s.label === status)
}

function StageIndicator({ status, compact = false }: { status: string; compact?: boolean }) {
  const idx = getStageIndex(status)
  const stage = getStage(status)
  const total = STAGES.length

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span
          className="text-[0.6rem] font-medium uppercase tracking-widest"
          style={{ color: stage.color }}
        >
          {stage.short}
        </span>
        <div className="flex gap-0.5">
          {STAGES.map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: '4px',
                height: '4px',
                backgroundColor: i <= idx ? stage.color : 'rgba(255,255,255,0.12)',
              }}
            />
          ))}
        </div>
        <span className="text-[0.55rem]" style={{ color: 'rgba(255,255,255,0.25)' }}>
          {idx + 1}/{total}
        </span>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[0.6rem] uppercase tracking-widest" style={{ color: stage.color }}>
          Stage {idx + 1} — {stage.label}
        </span>
        <span className="text-[0.55rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {idx + 1} of {total}
        </span>
      </div>
      <div className="flex gap-1">
        {STAGES.map((s, i) => (
          <div
            key={i}
            className="flex-1 rounded-full transition-all"
            style={{
              height: '3px',
              backgroundColor: i <= idx ? stage.color : 'rgba(255,255,255,0.1)',
            }}
            title={s.label}
          />
        ))}
      </div>
    </div>
  )
}

function SolutionModal({ solution, onClose }: { solution: Solution; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(14px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg p-8 md:p-12"
        style={{ backgroundColor: 'rgb(6,6,6)', border: '1px solid var(--white-15)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
          style={{ color: 'var(--white-40)' }}
        >
          ✕ Close
        </button>

        {/* Group */}
        <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
          {solution.group}
        </p>

        {/* Stage bar */}
        <div className="mb-6">
          <StageIndicator status={solution.status} />
        </div>

        {/* Title */}
        <h2
          className="mb-2"
          style={{ color: 'var(--white-100)', fontSize: 'clamp(1.25rem, 3vw, 2rem)', lineHeight: 1.1 }}
        >
          {solution.title}
        </h2>

        {/* Problem title */}
        <p className="text-sm mb-8 italic" style={{ color: 'var(--white-45)' }}>
          "{solution.problemTitle}"
        </p>

        {/* Blocks */}
        {[
          { label: 'The Problem', content: solution.problem },
          { label: 'My Approach', content: solution.approach },
          { label: 'Impact', content: solution.impact },
        ].map(({ label, content }) => (
          <div key={label} className="mb-8">
            <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--white-30)' }}>
              {label}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--white-70)' }}>
              {content}
            </p>
          </div>
        ))}

        {/* Results now */}
        {solution.resultsNow.length > 0 && (
          <div className="mb-8">
            <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-30)' }}>
              Results Now
            </p>
            <ul className="space-y-1.5">
              {solution.resultsNow.map((r, i) => (
                <li key={i} className="text-sm flex gap-2" style={{ color: 'var(--white-65)' }}>
                  <span style={{ color: 'var(--white-30)' }}>—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr style={{ borderColor: 'var(--white-10)', marginBottom: '1.5rem' }} />

        {/* Meta row */}
        <div className="flex flex-wrap gap-8 mb-6">
          <div>
            <p className="text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: 'var(--white-30)' }}>Role</p>
            <p className="text-sm" style={{ color: 'var(--white-80)' }}>{solution.role}</p>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: 'var(--white-30)' }}>Timeline</p>
            <p className="text-sm" style={{ color: 'var(--white-80)' }}>
              {solution.startDate} — {solution.endDate ?? 'Present'}
            </p>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-widest mb-1" style={{ color: 'var(--white-30)' }}>Deadline</p>
            <p className="text-sm" style={{ color: 'var(--white-80)' }}>{solution.deadline}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {solution.tags.map(tag => (
            <span
              key={tag}
              className="text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded"
              style={{ backgroundColor: 'var(--white-8)', color: 'var(--white-45)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {solution.link && (
          <a
            href={solution.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: 'var(--white-60)' }}
          >
            Visit project →
          </a>
        )}
      </div>
    </div>
  )
}

function SolutionCard({ solution, onClick }: { solution: Solution; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-lg p-6 md:p-8 transition-all duration-300"
      style={{ border: '1px solid var(--white-10)', backgroundColor: 'rgba(5,5,5,0.9)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--white-22)'
        e.currentTarget.style.backgroundColor = 'rgba(10,10,10,0.9)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--white-10)'
        e.currentTarget.style.backgroundColor = 'rgba(5,5,5,0.9)'
      }}
    >
      {/* Stage indicator */}
      <div className="mb-4">
        <StageIndicator status={solution.status} compact />
      </div>

      {/* Group label */}
      <p className="text-[0.55rem] uppercase tracking-widest mb-1.5" style={{ color: 'var(--white-30)' }}>
        {solution.group}
      </p>

      {/* Title */}
      <h3
        className="mb-3"
        style={{
          color: 'var(--white-95)',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          lineHeight: 1.2,
        }}
      >
        {solution.title}
      </h3>

      {/* Problem title */}
      <p className="text-xs italic mb-4 line-clamp-2" style={{ color: 'var(--white-40)' }}>
        "{solution.problemTitle}"
      </p>

      {/* Impact preview */}
      <p className="text-xs leading-relaxed mb-6 line-clamp-2" style={{ color: 'var(--white-55)' }}>
        {solution.impact}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {solution.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="text-[0.55rem] uppercase tracking-widest px-1.5 py-0.5 rounded"
              style={{ backgroundColor: 'var(--white-5)', color: 'var(--white-38)' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[0.55rem]" style={{ color: 'var(--white-25)' }}>
            {solution.startDate}
          </span>
          <span className="text-[0.65rem] uppercase tracking-widest" style={{ color: 'var(--white-30)' }}>
            View →
          </span>
        </div>
      </div>
    </button>
  )
}

export default function SolutionsPage() {
  const [activeGroup, setActiveGroup] = useState<'All' | SolutionGroup>('All')
  const [selected, setSelected] = useState<Solution | null>(null)

  const filtered = activeGroup === 'All'
    ? SOLUTIONS
    : SOLUTIONS.filter(s => s.group === activeGroup)

  return (
    <>
      {selected && (
        <SolutionModal solution={selected} onClose={() => setSelected(null)} />
      )}

      <main style={{ minHeight: '100svh', backgroundColor: 'rgb(0,0,0)', paddingTop: '7rem', paddingBottom: '6rem' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* Hero */}
          <div className="mb-16">
            <p className="text-[0.65rem] uppercase tracking-widest mb-4" style={{ color: 'var(--white-35)' }}>
              Impact Record
            </p>
            <h1
              className="mb-4"
              style={{
                color: 'var(--white-100)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.05,
              }}
            >
              Problems I Solve
            </h1>
            <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--white-50)' }}>
              Every engagement starts with a real problem. Here is what I identified, what I built, and what changed because of it.
            </p>
          </div>

          {/* Pipeline stages legend */}
          <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-1">
              {STAGES.map((stage, i) => (
                <div
                  key={stage.label}
                  className={`flex flex-col items-center justify-between text-center rounded p-3${i === 6 ? ' col-span-2 md:col-span-1' : ''}`}
                  style={{
                    gap: '8px',
                    backgroundColor: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span
                    className="text-[0.5rem] uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="w-full rounded-full"
                    style={{ height: '2px', backgroundColor: stage.color }}
                  />
                  <span
                    className="text-[0.55rem] uppercase tracking-widest leading-tight"
                    style={{ color: stage.color }}
                  >
                    {stage.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {GROUPS.map(group => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className="text-[0.65rem] uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-200"
                style={{
                  border: '1px solid',
                  borderColor: activeGroup === group ? 'var(--white-60)' : 'var(--white-15)',
                  color: activeGroup === group ? 'var(--white-100)' : 'var(--white-40)',
                  backgroundColor: activeGroup === group ? 'var(--white-10)' : 'transparent',
                }}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-xs mb-6" style={{ color: 'var(--white-30)' }}>
            {filtered.length} {filtered.length === 1 ? 'solution' : 'solutions'}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
            {filtered.map(solution => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                onClick={() => setSelected(solution)}
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-lg p-10 md:p-14 text-center"
            style={{ border: '1px solid var(--white-10)', backgroundColor: 'transparent' }}
          >
            <p className="text-[0.65rem] uppercase tracking-widest mb-4" style={{ color: 'var(--white-35)' }}>
              Next Problem
            </p>
            <h2
              className="mb-4"
              style={{ color: 'var(--white-100)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.1 }}
            >
              Have a problem that needs solving?
            </h2>
            <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ color: 'var(--white-50)' }}>
              Whether it is technical, strategic, or social — if the problem is real, I want to hear about it.
            </p>
            <a href="mailto:contact@hanielrolemberg.com" className="cta-button text-xs">
              Let's Talk
            </a>
          </div>

        </div>
      </main>
    </>
  )
}
