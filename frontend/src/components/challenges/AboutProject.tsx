import type { KMilesNarrative } from '@/data/1k-miles-narrative'

export default function AboutProject({ narrative }: { narrative: KMilesNarrative }) {
  return (
    <div className="mb-16">
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-7"
        style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
      >
        {narrative.aboutTitle}
      </div>

      <div className="space-y-0">
        {narrative.aboutBlocks.map((block, i) => (
          <p
            key={i}
            className="text-base leading-relaxed py-5"
            style={{
              color: i === 0 ? 'var(--white-85)' : 'var(--white-60)',
              fontWeight: i === 0 ? 500 : 400,
              fontFamily: i === 0 ? 'var(--font-syne)' : undefined,
              borderBottom: '1px solid rgba(10,10,15,0.05)',
            }}
          >
            {block}
          </p>
        ))}
      </div>
    </div>
  )
}
