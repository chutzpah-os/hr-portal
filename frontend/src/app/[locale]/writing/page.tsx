import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata'
import { BOOKS } from '@/data/writing'
import WritingBooksGrid from '@/components/sections/WritingBooksGrid'

const BASE_URL = 'https://hanielrolemberg.com'

const METADATA_BY_LOCALE: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Books by Haniel Rolemberg — Power, Public Speaking & Language Learning',
    description: "Published books by Haniel Rolemberg: A Lei da Selva on power and influence, Pilares da Oratória on public speaking, and The Language Acquisition Formula — a 12-week system to learn any language. Available on Amazon.",
  },
  pt: {
    title: 'Livros de Haniel Rolemberg — Poder, Oratória e Aprendizado de Idiomas',
    description: 'Livros publicados por Haniel Rolemberg: A Lei da Selva, sobre poder e influência; Pilares da Oratória, sobre falar em público; Inglês em Seis Passos e A Fórmula de Aquisição de Línguas, um sistema de 12 semanas para aprender qualquer idioma. Disponíveis na Amazon.',
  },
  es: {
    title: 'Libros de Haniel Rolemberg — Poder, Oratoria y Aprendizaje de Idiomas',
    description: 'Libros publicados por Haniel Rolemberg: A Lei da Selva, sobre poder e influencia; Pilares da Oratória, sobre hablar en público; y un sistema de 12 semanas para aprender cualquier idioma. Disponibles en Amazon.',
  },
  fr: {
    title: "Livres de Haniel Rolemberg — Pouvoir, Art Oratoire et Apprentissage des Langues",
    description: "Livres publiés par Haniel Rolemberg : A Lei da Selva, sur le pouvoir et l'influence ; Pilares da Oratória, sur la prise de parole en public ; et un système de 12 semaines pour apprendre n'importe quelle langue. Disponibles sur Amazon.",
  },
  ca: {
    title: "Llibres de Haniel Rolemberg — Poder, Oratòria i Aprenentatge d'Idiomes",
    description: "Llibres publicats per Haniel Rolemberg: A Lei da Selva, sobre poder i influència; Pilares da Oratória, sobre parlar en públic; i un sistema de 12 setmanes per aprendre qualsevol idioma. Disponibles a Amazon.",
  },
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const m = METADATA_BY_LOCALE[locale] ?? METADATA_BY_LOCALE.en

  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates(locale, '/writing'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${BASE_URL}/${locale}/writing`,
      type: 'website',
    },
  }
}

export default async function WritingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('writing')

  const schema = {
    '@context': 'https://schema.org',
    '@graph': BOOKS.map((book) => ({
      '@type': 'Book',
      name: book.title,
      description: book.subtitle ?? book.description,
      abstract: book.description,
      inLanguage: book.languageCode,
      author: { '@type': 'Person', name: 'Haniel Rolemberg' },
      image: `${BASE_URL}${book.cover}`,
      url: `${BASE_URL}/${locale}/writing`,
      ...(book.status === 'published' ? { offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' } } : {}),
    })),
  }

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">

        <p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-4 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          {t('sectionLabel')}
        </p>
        <h1
          className="font-bold leading-tight mb-4"
          style={{
            color: 'var(--white-100)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-syne)',
          }}
        >
          {t('title')}
        </h1>
        <p
          className="text-base leading-relaxed mb-12 max-w-xl"
          style={{ color: 'var(--white-55)' }}
        >
          {t('subtitle')}
        </p>

        {BOOKS.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 rounded-2xl"
            style={{ border: '1px dashed rgba(10,10,15,0.12)' }}
          >
            <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
              {t('empty')}
            </p>
          </div>
        ) : (
          <WritingBooksGrid books={BOOKS} />
        )}

      </div>
    </main>
  )
}
