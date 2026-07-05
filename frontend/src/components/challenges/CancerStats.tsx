import type { NarrativeLocale, KMilesNarrative } from '@/data/1k-miles-narrative'
import PeopleGrid from './PeopleGrid'

const LETHALITY_RATES = [98, 98, 90, 65, 60, 36, 28, 3]

const WIKI_TITLES: Record<string, string> = {
  'Kylie Minogue': 'Kylie_Minogue',
  'Shannon Miller': 'Shannon_Miller',
  'Robin Roberts': 'Robin_Roberts_(journalist)',
  'Fran Drescher': 'Fran_Drescher',
  'Pau Donés': 'Pau_Donés',
  'Chadwick Boseman': 'Chadwick_Boseman',
  'Patrick Swayze': 'Patrick_Swayze',
  'David Bowie': 'David_Bowie',
}

async function getWikiPhoto(name: string): Promise<string | null> {
  const title = WIKI_TITLES[name]
  if (!title) return null
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { next: { revalidate: 604800 } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return (data.thumbnail?.source as string) ?? null
  } catch {
    return null
  }
}

// ── Separate panel: survivors / lost grid + closing quote ──
export async function PeopleSection({ narrative }: { narrative: KMilesNarrative }) {
  const allPeople = [...narrative.survivorsList, ...narrative.lostList]
  const photoResults = await Promise.all(allPeople.map((p) => getWikiPhoto(p.name)))
  const photoMap: Record<string, string | null> = {}
  allPeople.forEach((p, i) => { photoMap[p.name] = photoResults[i] })

  return (
    <div className="space-y-8">
      <PeopleGrid
        survivors={narrative.survivorsList.map((p) => ({ ...p, photo: photoMap[p.name] ?? null }))}
        lost={narrative.lostList.map((p) => ({ ...p, photo: photoMap[p.name] ?? null }))}
        narrative={narrative}
      />
      <p
        className="text-sm leading-relaxed italic"
        style={{ color: 'var(--white-55)', borderLeft: '2px solid rgba(212,119,90,0.3)', paddingLeft: '1rem' }}
      >
        {narrative.survivorsOutro}
      </p>
    </div>
  )
}

// ── Stats panel: cancer data + lethality table (no people grid) ──
export default async function CancerStats({
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
          {narrative.cancerStatsItems.map((item, i) => {
            const isLong = item.stat.length > 5
            return (
              <div key={i} className="p-6" style={{ backgroundColor: 'rgb(255,255,255)' }}>
                <div
                  className="font-bold leading-tight mb-2"
                  style={{
                    fontSize: isLong ? 'clamp(1.5rem, 3.5vw, 2.2rem)' : 'clamp(2rem, 5vw, 3rem)',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-syne)',
                    whiteSpace: isLong ? 'nowrap' : undefined,
                  }}
                >
                  {item.stat}
                </div>
                <div className="text-sm leading-snug" style={{ color: 'var(--white-60)' }}>
                  {item.label}
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-[0.45rem] mt-2 text-right uppercase tracking-widest" style={{ color: 'var(--white-25)' }}>
          {sourceLabel}: WHO 2024 · IARC 2022
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
            const barOpacity = 0.28 + (1 - rate / 100) * 0.72
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
                    style={{ width: `${rate}%`, backgroundColor: `rgba(212,119,90,${barOpacity.toFixed(2)})` }}
                  />
                </div>
                <div
                  className="text-xs font-semibold shrink-0 text-right"
                  style={{ color: `rgba(212,119,90,${Math.max(0.45, barOpacity).toFixed(2)})`, fontFamily: 'var(--font-syne)', width: '2.5rem' }}
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
    </div>
  )
}
