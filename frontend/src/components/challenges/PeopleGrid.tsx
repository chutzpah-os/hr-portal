'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLocale } from 'next-intl'
import type { KMilesNarrative } from '@/data/1k-miles-narrative'

const LIGHTBOX_LABELS: Record<string, { close: string; hint: string }> = {
  en: { close: 'close', hint: 'click anywhere or press esc to close' },
  pt: { close: 'fechar', hint: 'clique em qualquer lugar ou pressione esc para fechar' },
  es: { close: 'cerrar', hint: 'haz clic en cualquier lugar o presiona esc para cerrar' },
  fr: { close: 'fermer', hint: 'cliquez n\'importe où ou appuyez sur échap pour fermer' },
  ca: { close: 'tancar', hint: 'feu clic a qualsevol lloc o premeu esc per tancar' },
}

interface PersonData {
  name: string
  detail: string
  photo: string | null
}

function Initials({ name, accent }: { name: string; accent: boolean }) {
  const parts = name.split(' ')
  const initials = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0][0]
  return (
    <div
      className="w-full h-full flex items-center justify-center text-[0.55rem] font-bold uppercase"
      style={{
        backgroundColor: accent ? 'var(--chart-track)' : 'var(--white-8)',
        color: accent ? 'var(--accent)' : 'var(--white-55)',
        fontFamily: 'var(--font-syne)',
      }}
    >
      {initials}
    </div>
  )
}

export default function PeopleGrid({
  survivors,
  lost,
  narrative,
}: {
  survivors: PersonData[]
  lost: PersonData[]
  narrative: Pick<KMilesNarrative, 'survivorsTitle' | 'lostTitle'>
}) {
  const locale = useLocale()
  const labels = LIGHTBOX_LABELS[locale] ?? LIGHTBOX_LABELS.en
  const [expanded, setExpanded] = useState<{ src: string; name: string } | null>(null)

  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpanded(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded])

  function renderList(people: PersonData[], accent: boolean) {
    return (
      <ul className="space-y-4">
        {people.map((p) => (
          <li key={p.name} className="flex items-center gap-3">
            <div
              className="shrink-0 rounded-full overflow-hidden transition-opacity duration-150"
              style={{
                width: 44,
                height: 44,
                border: `1.5px solid ${accent ? 'var(--chart-secondary)' : 'var(--divider)'}`,
                cursor: p.photo ? 'zoom-in' : 'default',
              }}
              onClick={() => p.photo && setExpanded({ src: p.photo, name: p.name })}
            >
              {p.photo ? (
                <Image
                  src={p.photo}
                  alt={p.name}
                  width={44}
                  height={44}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <Initials name={p.name} accent={accent} />
              )}
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--white-82)', fontFamily: 'var(--font-syne)' }}>
                {p.name}
              </div>
              <div className="text-xs mt-0.5 leading-snug" style={{ color: 'var(--white-48)' }}>
                {p.detail}
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Survived */}
        <div
          className="rounded-2xl p-6"
          style={{ border: '1px solid var(--chart-secondary)', backgroundColor: 'var(--chart-track)' }}
        >
          <div
            className="text-[0.55rem] uppercase tracking-widest mb-5 pb-3"
            style={{ color: 'var(--accent)', borderBottom: '1px solid var(--divider)' }}
          >
            {narrative.survivorsTitle}
          </div>
          {renderList(survivors, true)}
        </div>

        {/* Lost */}
        <div
          className="rounded-2xl p-6"
          style={{ border: '1px solid var(--divider)', backgroundColor: 'var(--white-5)' }}
        >
          <div
            className="text-[0.55rem] uppercase tracking-widest mb-5 pb-3"
            style={{ color: 'var(--white-55)', borderBottom: '1px solid var(--divider)' }}
          >
            {narrative.lostTitle}
          </div>
          {renderList(lost, false)}
        </div>
      </div>

      {/* Lightbox — portaled to body to escape transform:translateY stacking context */}
      {expanded && createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(10px)', zIndex: 99999 }}
          onClick={() => setExpanded(null)}
        >
          <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setExpanded(null)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-[0.6rem] uppercase tracking-widest transition-opacity duration-150 hover:opacity-100"
              style={{ color: 'rgba(240,240,250,0.55)' }}
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {labels.close}
            </button>

            {/* Photo */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                width: 'min(75vw, 320px)',
                height: 'min(75vw, 320px)',
                position: 'relative',
                border: '1px solid rgba(240,240,250,0.1)',
              }}
            >
              <Image
                src={expanded.src}
                alt={expanded.name}
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>

            {/* Name */}
            <p
              className="mt-4 text-sm font-semibold uppercase tracking-widest"
              style={{ color: 'rgba(240,240,250,0.75)', fontFamily: 'var(--font-syne)' }}
            >
              {expanded.name}
            </p>

            {/* Hint */}
            <p
              className="mt-1.5 text-[0.5rem] uppercase tracking-widest"
              style={{ color: 'rgba(240,240,250,0.28)' }}
            >
              {labels.hint}
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
