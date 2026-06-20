import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press — Haniel Rolemberg',
  description: 'Media appearances, podcast interviews, and press coverage featuring Haniel Rolemberg.',
  alternates: { canonical: 'https://hanielrolemberg.com/press' },
  robots: { index: false, follow: true },
}

export default function PressPage() {
  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">

        <p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-4 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          Press
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
          Featured Media Appearances
        </h1>
        <p
          className="text-base leading-relaxed mb-16 max-w-xl"
          style={{ color: 'var(--white-55)' }}
        >
          Interviews, podcast appearances, and press coverage will be listed here.
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
          </div>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--white-35)' }}
          >
            No appearances yet
          </p>
        </div>

      </div>
    </main>
  )
}
