import type { KMilesNarrative } from '@/data/1k-miles-narrative'

const DONATE_HREF = 'https://international.terryfox.ca/page/1k-miles-of-hope'
const PARTNER_HREF = 'mailto:hrolemberg.engineer@gmail.com?subject=Partnership%20Inquiry%20—%201K%20Miles%20of%20Hope'

export default function FinalCTA({ narrative }: { narrative: KMilesNarrative }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'rgb(255,255,255)',
        border: '1px solid rgba(10,10,15,0.10)',
        boxShadow: '0 2px 32px rgba(10,10,15,0.06)',
      }}
    >
      {/* Terracotta top accent */}
      <div style={{ height: '3px', backgroundColor: '#D4775A' }} />

      <div className="px-8 py-14 text-center">
        <h2
          className="font-bold mb-3"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(1.6rem, 4.5vw, 2.6rem)',
            color: 'rgba(10,10,15,0.92)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
          }}
        >
          {narrative.finalCtaTitle}
        </h2>

        <p
          className="text-base mb-8"
          style={{ color: 'rgba(10,10,15,0.45)', fontStyle: 'italic' }}
        >
          {narrative.finalCtaSubtitle}
        </p>

        <div className="flex flex-col items-center gap-2 mb-10">
          {narrative.finalCtaBlocks.map((line, i) => (
            <p
              key={i}
              className="text-sm"
              style={{ color: 'rgba(10,10,15,0.50)' }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DONATE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-8 py-3.5 rounded-full font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#D4775A', color: 'rgb(255,255,255)' }}
          >
            {narrative.finalCtaDonate}
          </a>
          <a
            href={PARTNER_HREF}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-8 py-3.5 rounded-full font-semibold transition-opacity hover:opacity-85"
            style={{
              border: '1px solid rgba(212,119,90,0.4)',
              color: '#D4775A',
              backgroundColor: 'transparent',
            }}
          >
            {narrative.finalCtaPartner}
          </a>
        </div>
      </div>
    </div>
  )
}
