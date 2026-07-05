import Image from 'next/image'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

async function getTerryFoxPhoto(): Promise<string | null> {
  try {
    const res = await fetch(
      'https://en.wikipedia.org/api/rest_v1/page/summary/Terry_Fox',
      { next: { revalidate: 604800 } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return (data.thumbnail?.source as string) ?? null
  } catch {
    return null
  }
}

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

export function WhyIRun({ narrative }: { narrative: KMilesNarrative }) {
  return (
    <div>
      <SectionLabel>{narrative.whyIRunTitle}</SectionLabel>
      <div className="space-y-5">
        {narrative.whyIRunBlocks.map((block, i) => (
          <p
            key={i}
            className="text-base leading-relaxed"
            style={{
              color: i === narrative.whyIRunBlocks.length - 1 ? 'var(--white-85)' : 'var(--white-65)',
              fontWeight: i === narrative.whyIRunBlocks.length - 1 ? 500 : 400,
            }}
          >
            {block}
          </p>
        ))}
      </div>
    </div>
  )
}

export async function TerryFox({ narrative }: { narrative: KMilesNarrative }) {
  const terryPhoto = await getTerryFoxPhoto()
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(212,119,90,0.15)', backgroundColor: 'rgba(212,119,90,0.025)' }}
    >
      {terryPhoto && (
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: '16/7', backgroundColor: 'rgba(10,10,15,0.06)' }}
        >
          <Image
            src={terryPhoto}
            alt="Terry Fox — Marathon of Hope, Toronto, 1980"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            style={{ objectFit: 'cover', objectPosition: 'center 5%' }}
          />
          <div
            className="absolute bottom-2 right-4 text-[0.4rem] uppercase tracking-widest"
            style={{ color: 'rgba(240,240,250,0.55)', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          >
            Toronto · 1980 · Wikimedia Commons
          </div>
        </div>
      )}
      <div className="p-7">
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
      </div>
    </div>
  )
}

export function WorldWithCure({ narrative }: { narrative: KMilesNarrative }) {
  return (
    <div className="space-y-8">
      <div>
        <SectionLabel>{narrative.worldTitle}</SectionLabel>
        <p className="text-base leading-relaxed" style={{ color: 'var(--white-60)' }}>
          {narrative.worldContext}
        </p>
      </div>

      {/* Anchor stat */}
      <div
        className="text-center py-7 rounded-2xl"
        style={{ backgroundColor: 'rgba(212,119,90,0.04)', border: '1px solid rgba(212,119,90,0.14)' }}
      >
        <div
          className="font-bold leading-none mb-2"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
        >
          US$185T
        </div>
        <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-40)' }}>
          {narrative.worldStat}
        </p>
      </div>

      {/* Scale stats */}
      <div className="grid grid-cols-3 gap-3">
        {narrative.worldStats.map((s, i) => (
          <div
            key={i}
            className="rounded-xl py-4 px-3 text-center"
            style={{ backgroundColor: 'rgba(10,10,15,0.03)', border: '1px solid rgba(10,10,15,0.07)' }}
          >
            <div
              className="font-bold leading-none mb-1.5"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--white-85)', fontFamily: 'var(--font-syne)' }}
            >
              {s.value}
            </div>
            <p className="text-[0.5rem] uppercase tracking-widest leading-snug" style={{ color: 'var(--white-35)' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Human stories — two-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {narrative.worldHuman.map((line, i) => (
          <div
            key={i}
            className="py-3 px-4 rounded-xl"
            style={{
              borderLeft: '2px solid rgba(212,119,90,0.25)',
              backgroundColor: 'rgba(10,10,15,0.02)',
            }}
          >
            <p
              className="text-sm font-medium leading-snug"
              style={{ color: 'var(--white-72)', fontFamily: 'var(--font-syne)' }}
            >
              {line}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
