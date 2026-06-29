import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Research — Haniel Rolemberg',
  description: 'Academic and applied research across cybersecurity, data systems, and AI by Haniel Rolemberg.',
  alternates: { canonical: 'https://hanielrolemberg.com/researches' },
  robots: { index: false, follow: true },
}

export default async function ResearchesPage() {
  const t = await getTranslations('researches')

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
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
          className="text-base leading-relaxed mb-16 max-w-xl"
          style={{ color: 'var(--white-55)' }}
        >
          {t('subtitle')}
        </p>

        <div
          className="flex flex-col items-center justify-center py-20 rounded-2xl"
          style={{ border: '1px dashed rgba(10,10,15,0.12)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
            style={{ backgroundColor: 'rgba(212,119,90,0.08)', border: '1px solid rgba(212,119,90,0.18)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--white-35)' }}
          >
            {t('empty')}
          </p>
        </div>

      </div>
    </main>
  )
}
