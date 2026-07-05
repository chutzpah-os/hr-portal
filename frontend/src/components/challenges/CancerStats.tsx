import type { NarrativeLocale, KMilesNarrative } from '@/data/1k-miles-narrative'

const LETHALITY = [
  { type: 'Thyroid', rate: 98, color: '#4ade80' },
  { type: 'Prostate', rate: 98, color: '#4ade80' },
  { type: 'Breast', rate: 90, color: '#86efac' },
  { type: 'Colorectal', rate: 65, color: '#fde047' },
  { type: 'Leukemia', rate: 60, color: '#fde047' },
  { type: 'Brain', rate: 36, color: '#fb923c' },
  { type: 'Lung', rate: 28, color: '#f87171' },
  { type: 'Pancreas (IV)', rate: 3, color: '#ef4444' },
]

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
            <div
              key={i}
              className="p-6"
              style={{ backgroundColor: 'rgb(255,255,255)' }}
            >
              <div
                className="font-bold leading-none mb-2"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-syne)',
                }}
              >
                {item.stat}
              </div>
              <div className="text-sm leading-snug" style={{ color: 'var(--white-60)' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-[0.45rem] mt-2 text-right uppercase tracking-widest"
          style={{ color: 'var(--white-25)' }}
        >
          {sourceLabel}: WHO 2024 · INCA 2026
        </div>
      </div>

      {/* Why hard */}
      <div
        className="rounded-2xl p-7"
        style={{ border: '1px solid rgba(10,10,15,0.07)', backgroundColor: 'rgba(10,10,15,0.015)' }}
      >
        <div
          className="text-[0.55rem] uppercase tracking-widest mb-4"
          style={{ color: 'var(--white-30)' }}
        >
          {narrative.whyHardTitle}
        </div>
        <p
          className="text-base leading-relaxed"
          style={{ color: 'var(--white-70)', fontStyle: 'italic' }}
        >
          {narrative.whyHard}
        </p>
      </div>

      {/* Lethality table */}
      <div>
        <div
          className="text-[0.55rem] uppercase tracking-widest mb-4"
          style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
        >
          {narrative.lethalityTitle}
        </div>
        <div className="space-y-2">
          {LETHALITY.map((item) => (
            <div key={item.type} className="flex items-center gap-3">
              <div className="text-sm font-medium w-32 shrink-0" style={{ color: 'var(--white-65)', fontFamily: 'var(--font-syne)' }}>
                {item.type}
              </div>
              <div className="flex-1 rounded-full overflow-hidden" style={{ height: '5px', backgroundColor: 'rgba(10,10,15,0.06)' }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${item.rate}%`, backgroundColor: item.color, opacity: 0.7 }}
                />
              </div>
              <div
                className="text-xs font-semibold w-10 text-right shrink-0"
                style={{ color: item.color, fontFamily: 'var(--font-syne)' }}
              >
                {item.rate}%
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-[0.45rem] uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
          {survivalLabel} · {sourceLabel}: ACS Cancer Statistics 2026
        </div>
        <p
          className="mt-4 text-sm font-semibold"
          style={{ color: 'var(--white-80)', fontFamily: 'var(--font-syne)' }}
        >
          {narrative.lethalityClosing}
        </p>
      </div>

      {/* Survivors / Lost */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Survived */}
        <div
          className="rounded-2xl p-6"
          style={{ border: '1px solid rgba(74,222,128,0.15)', backgroundColor: 'rgba(74,222,128,0.02)' }}
        >
          <div
            className="text-[0.55rem] uppercase tracking-widest mb-4"
            style={{ color: 'rgba(74,222,128,0.6)' }}
          >
            {narrative.survivorsTitle}
          </div>
          <ul className="space-y-2.5">
            {[
              { name: 'Shannon Miller', detail: 'Olympic gymnast — ovarian cancer (2011)' },
              { name: 'Robin Roberts', detail: 'Journalist — breast cancer + myelodysplastic syndrome' },
              { name: 'Fran Drescher', detail: 'Actress — uterine cancer, now research advocate' },
            ].map((p) => (
              <li key={p.name}>
                <div className="text-sm font-semibold" style={{ color: 'var(--white-80)', fontFamily: 'var(--font-syne)' }}>
                  {p.name}
                </div>
                <div className="text-xs" style={{ color: 'var(--white-45)' }}>
                  {p.detail}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Lost */}
        <div
          className="rounded-2xl p-6"
          style={{ border: '1px solid rgba(239,68,68,0.12)', backgroundColor: 'rgba(239,68,68,0.015)' }}
        >
          <div
            className="text-[0.55rem] uppercase tracking-widest mb-4"
            style={{ color: 'rgba(239,68,68,0.5)' }}
          >
            {narrative.lostTitle}
          </div>
          <ul className="space-y-2.5">
            {[
              { name: 'Chadwick Boseman', detail: 'Actor — colon cancer, age 43' },
              { name: 'Patrick Swayze', detail: 'Actor — pancreatic cancer' },
              { name: 'David Bowie', detail: 'Musician — liver cancer, 18 months after diagnosis' },
            ].map((p) => (
              <li key={p.name}>
                <div className="text-sm font-semibold" style={{ color: 'var(--white-80)', fontFamily: 'var(--font-syne)' }}>
                  {p.name}
                </div>
                <div className="text-xs" style={{ color: 'var(--white-45)' }}>
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
