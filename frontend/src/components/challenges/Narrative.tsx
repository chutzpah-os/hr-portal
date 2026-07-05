import type { KMilesNarrative } from '@/data/1k-miles-narrative'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[0.55rem] uppercase tracking-widest mb-5"
      style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
    >
      {children}
    </div>
  )
}

export default function Narrative({ narrative }: { narrative: KMilesNarrative }) {
  return (
    <div className="space-y-14 mb-12">
      {/* Why I Run */}
      <div>
        <SectionLabel>{narrative.whyIRunTitle}</SectionLabel>
        <div className="space-y-5">
          {narrative.whyIRunBlocks.map((block, i) => (
            <p
              key={i}
              className="text-base leading-relaxed"
              style={{ color: i === narrative.whyIRunBlocks.length - 1 ? 'var(--white-85)' : 'var(--white-65)', fontWeight: i === narrative.whyIRunBlocks.length - 1 ? 500 : 400 }}
            >
              {block}
            </p>
          ))}
        </div>
      </div>

      {/* Terry Fox */}
      <div
        className="rounded-2xl p-7"
        style={{ border: '1px solid rgba(212,119,90,0.15)', backgroundColor: 'rgba(212,119,90,0.025)' }}
      >
        <SectionLabel>{narrative.terryFoxTitle}</SectionLabel>
        <div className="space-y-0 divide-y divide-[rgba(212,119,90,0.1)]">
          {narrative.terryFoxBlocks.map((block, i) => (
            <p
              key={i}
              className="py-3 text-sm leading-relaxed"
              style={{ color: 'var(--white-65)' }}
            >
              {block}
            </p>
          ))}
        </div>
        <p
          className="mt-4 text-sm font-semibold italic"
          style={{ color: 'var(--white-75)', fontFamily: 'var(--font-syne)' }}
        >
          {narrative.terryFoxClosing}
        </p>
      </div>

      {/* World with cure */}
      <div>
        <SectionLabel>{narrative.worldTitle}</SectionLabel>
        <div
          className="mb-4 text-center py-6 rounded-2xl"
          style={{ backgroundColor: 'rgba(10,10,15,0.02)', border: '1px solid rgba(10,10,15,0.06)' }}
        >
          <div
            className="font-bold leading-none mb-2"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
          >
            US$185T
          </div>
          <p className="text-sm" style={{ color: 'var(--white-55)' }}>
            {narrative.worldStat}
          </p>
        </div>
        <div className="space-y-2 mt-4">
          {narrative.worldHuman.map((line, i) => (
            <p
              key={i}
              className="text-base font-medium"
              style={{ color: 'var(--white-75)', fontFamily: 'var(--font-syne)', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(212,119,90,0.2)' }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
