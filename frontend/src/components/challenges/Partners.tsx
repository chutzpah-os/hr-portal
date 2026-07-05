import type { KMilesNarrative } from '@/data/1k-miles-narrative'

const CONTACT_HREF = 'mailto:contact@hanielrolemberg.com?subject=Partnership%20Inquiry%20—%201K%20Miles%20of%20Hope'

export default function Partners({ narrative }: { narrative: KMilesNarrative }) {
  return (
    <div>
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-6"
        style={{ color: 'var(--label)', borderBottom: '1px solid var(--divider)', paddingBottom: '0.5rem' }}
      >
        {narrative.partnersSectionTitle}
      </div>

      {/* Empty state — invitation design */}
      <div
        className="rounded-2xl px-8 py-14 text-center"
        style={{ border: '1px solid var(--white-15)', backgroundColor: 'var(--white-5)' }}
      >
        <div
          className="w-10 h-px mx-auto mb-8"
          style={{ backgroundColor: 'var(--white-40)' }}
        />
        <p
          className="font-bold mb-4"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
            color: 'var(--white-90)',
            letterSpacing: '-0.03em',
          }}
        >
          {narrative.partnersFirstLabel}
        </p>
        <p
          className="text-sm leading-relaxed mb-8 max-w-xs mx-auto"
          style={{ color: 'var(--white-45)' }}
        >
          {narrative.partnersEmptyState}
        </p>
        <a
          href={CONTACT_HREF}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-7 py-3 rounded-full font-semibold transition-opacity hover:opacity-80"
          style={{
            border: '1.5px solid var(--white-60)',
            color: 'var(--white-90)',
            backgroundColor: 'var(--white-8)',
          }}
        >
          {narrative.partnersBecome} →
        </a>
      </div>
    </div>
  )
}
