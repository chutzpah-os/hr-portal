import type { NarrativeLocale, KMilesNarrative } from '@/data/1k-miles-narrative'

const LETHALITY_RATES = [98, 98, 90, 65, 60, 36, 28, 3]

function rateColor(rate: number): string {
  if (rate >= 85) return '#4ade80'
  if (rate >= 55) return '#fde047'
  if (rate >= 35) return '#fb923c'
  return '#ef4444'
}

export default function CancerStats({
  narrative,
  locale,
  survivalLabel,
  sourceLabel,
}: {
  narrative: KMilesNarrative
  locale: NarrativeLocale
  survivalLabel: string
  sourceLabel: string
}) {
  return (
    <div className="mb-12 space-y-12">
      {/* Stats grid */}
      <div>
        <div
          className="text-[0.55rem] uppercase tracking-widest mb-6"
          style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
        >
          {narrative.statsTitle}
        </div>
        <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(10,10,15,0.06)' }}>
          {narrative.cancerStatsItems.map((item, i) => (
            <div key={i} className="p-6" style={{ backgroundColor: 'rgb(255,255,255)' }}>
              <div
                className="font-bold leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
              >
                {item.stat}
              </div>
              <div className="text-sm leading-snug" style={{ color: 'var(--white-60)' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="text-[0.45rem] mt-2 text-right uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
          {sourceLabel}: WHO 2024 · INCA 2026
        </div>
      </div>

      {/* Why hard */}
      <div
        className="rounded-2xl p-7"
        style={{ border: '1px solid rgba(10,10,15,0.07)', backgroundColor: 'rgba(10,10,15,0.015)' }}
      >
        <div className="text-[0.55rem] uppercase tracking-widest mb-4" style={{ color: 'var(--white-30)' }}>
          {narrative.whyHardTitle}
        </div>
        <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)', fontStyle: 'italic' }}>
          {narrative.whyHard}
        </p>
      </div>

      {/* Lethality table */}
      <div>
        <div
          className="text-[0.55rem] uppercase tracking-widest mb-5"
          style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
        >
          {narrative.lethalityTitle}
        </div>
        <div className="space-y-3">
          {narrative.lethalityTypes.map((typeName, i) => {
            const rate = LETHALITY_RATES[i]
            const color = rateColor(rate)
            return (
              <div key={typeName} className="flex items-center gap-3">
                <div
                  className="font-medium shrink-0"
                  style={{ color: 'var(--white-65)', fontFamily: 'var(--font-syne)', width: '7.5rem', fontSize: '0.8rem' }}
                >
                  {typeName}
                </div>
                <div
                  className="flex-1 rounded-full overflow-hidden"
                  style={{ height: '6px', backgroundColor: 'rgba(10,10,15,0.07)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${rate}%`, backgroundColor: color, opacity: 0.75 }}
                  />
                </div>
                <div
                  className="text-xs font-semibold shrink-0 text-right"
                  style={{ color, fontFamily: 'var(--font-syne)', width: '2.5rem' }}
                >
                  {rate}%
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-4 text-[0.45rem] uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
          {survivalLabel} · {sourceLabel}: ACS Cancer Statistics 2026
        </div>
        <p className="mt-5 text-sm font-semibold" style={{ color: 'var(--white-80)', fontFamily: 'var(--font-syne)' }}>
          {narrative.lethalityClosing}
        </p>
      </div>

      {/* Survivors / Lost */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Survived */}
        <div
          className="rounded-2xl p-6"
          style={{ border: '1px solid rgba(74,222,128,0.2)', backgroundColor: 'rgba(74,222,128,0.03)' }}
        >
          <div
            className="text-[0.55rem] uppercase tracking-widest mb-5 pb-3"
            style={{ color: 'rgba(74,222,128,0.7)', borderBottom: '1px solid rgba(74,222,128,0.12)' }}
          >
            {narrative.survivorsTitle}
          </div>
          <ul className="space-y-3.5">
            {narrative.survivorsList.map((p) => (
              <li key={p.name}>
                <div className="text-sm font-semibold" style={{ color: 'var(--white-82)', fontFamily: 'var(--font-syne)' }}>
                  {p.name}
                </div>
                <div className="text-xs mt-0.5 leading-snug" style={{ color: 'var(--white-48)' }}>
                  {p.detail}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Lost */}
        <div
          className="rounded-2xl p-6"
          style={{ border: '1px solid rgba(239,68,68,0.18)', backgroundColor: 'rgba(239,68,68,0.02)' }}
        >
          <div
            className="text-[0.55rem] uppercase tracking-widest mb-5 pb-3"
            style={{ color: 'rgba(239,68,68,0.6)', borderBottom: '1px solid rgba(239,68,68,0.1)' }}
          >
            {narrative.lostTitle}
          </div>
          <ul className="space-y-3.5">
            {narrative.lostList.map((p) => (
              <li key={p.name}>
                <div className="text-sm font-semibold" style={{ color: 'var(--white-82)', fontFamily: 'var(--font-syne)' }}>
                  {p.name}
                </div>
                <div className="text-xs mt-0.5 leading-snug" style={{ color: 'var(--white-48)' }}>
                  {p.detail}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="text-sm leading-relaxed italic"
        style={{ color: 'var(--white-55)', borderLeft: '2px solid rgba(212,119,90,0.3)', paddingLeft: '1rem' }}
      >
        {narrative.survivorsOutro}
      </p>
    </div>
  )
}
