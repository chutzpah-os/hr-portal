import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing — Haniel Rolemberg',
  description: 'Long-form books and essays on technology, problem-solving, and the future of society by Haniel Rolemberg.',
  alternates: { canonical: 'https://hanielrolemberg.com/writing' },
  robots: { index: false, follow: true },
}

export default function WritingPage() {
  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">

        <p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-4 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          Writing
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
          Published Books
        </h1>
        <p
          className="text-base leading-relaxed mb-16 max-w-xl"
          style={{ color: 'var(--white-55)' }}
        >
          Long-form work on technology, problem-solving, and the future of society will appear here.
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--white-35)' }}
          >
            No books published yet
          </p>
        </div>

      </div>
    </main>
  )
}
