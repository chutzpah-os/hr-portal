import type { RoadmapPhase } from '@/data/challenges'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

export default function Roadmap({
  phases,
  narrative,
}: {
  phases: RoadmapPhase[]
  narrative: KMilesNarrative
}) {
  return (
    <div>
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-6"
        style={{ color: 'var(--label)', borderBottom: '1px solid var(--divider)', paddingBottom: '0.5rem' }}
      >
        {narrative.roadmapSectionTitle}
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div
          className="absolute left-[3.8rem] top-3 bottom-3"
          style={{ width: '1px', backgroundColor: 'rgba(10,10,15,0.08)' }}
        />

        <div className="space-y-0">
          {phases.map((p, i) => {
            const isActive = p.status === 'active'
            const isDone = p.status === 'done'
            return (
              <div
                key={p.phase}
                className="flex items-start gap-6 py-5 relative"
                style={{ borderBottom: i < phases.length - 1 ? '1px solid rgba(10,10,15,0.04)' : undefined }}
              >
                {/* Year */}
                <div
                  className="text-[0.48rem] uppercase tracking-widest shrink-0 w-8 pt-1 text-right"
                  style={{ color: 'var(--white-25)' }}
                >
                  {p.year}
                </div>

                {/* Dot */}
                <div className="relative shrink-0 flex items-start pt-1.5">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: isActive ? 'var(--accent)' : isDone ? 'var(--accent)' : 'rgb(255,255,255)',
                      borderColor: isActive ? 'var(--accent)' : isDone ? 'var(--accent)' : 'rgba(10,10,15,0.15)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className="text-[0.42rem] uppercase tracking-widest"
                      style={{ color: isActive ? 'var(--accent)' : 'var(--white-22)' }}
                    >
                      {p.phase}
                    </span>
                    <span
                      className="font-bold uppercase tracking-wide"
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                        color: isActive ? 'var(--white-95)' : isDone ? 'var(--white-55)' : 'var(--white-65)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.label}
                    </span>
                    {isActive && (
                      <span
                        className="text-[0.4rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: 'rgba(212,119,90,0.1)',
                          color: 'var(--accent)',
                          border: '1px solid rgba(212,119,90,0.2)',
                        }}
                      >
                        {narrative.roadmapActiveLabel}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: isActive ? 'var(--white-60)' : 'var(--white-38)' }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
