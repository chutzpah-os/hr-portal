import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Haniel Rolemberg',
}

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '5rem' }}>

      {/* About — text + image side by side */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h2 className="mb-8" style={{ color: 'var(--white-100)' }}>
              About
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                I&apos;m Haniel, 26, from Aracaju, Sergipe, Brazil. I started working at 7, selling crafts alongside my father — learning early that resilience isn&apos;t optional. At 16, cancer entered my life and with it a commitment: to dedicate myself to solving problems that truly matter. I failed exams, broke financially, watched friends lose their way. Every fall taught me that passion alone is never enough.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                That drive led me to study Public Administration and Computer Science, and to work across software engineering, data systems, cybersecurity, and AI/ML. I stopped looking for a single answer and started building the capacity to tackle any problem — with knowledge, with tools, and with the right people around me.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                Today my mission is clear: impact one billion lives by 2035 —{' '}
                <span style={{ color: 'var(--white-50)' }}>1b2035</span>. That&apos;s the north star behind the{' '}
                <a
                  href="https://problemsolverfoundation.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: 'var(--white-90)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  Problem Solver Foundation
                </a>
                {' '}— a community where people learn, collaborate, and act together to solve real-world problems. The future belongs to those who are willing to think differently, connect across borders, and build it.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden md:block flex-shrink-0" style={{ width: '340px', height: '440px' }}>
            {/* Left fade */}
            <div
              className="absolute inset-y-0 left-0 z-10"
              style={{ width: '70%', background: 'linear-gradient(to right, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 30%, transparent 100%)' }}
            />
            {/* Right fade */}
            <div
              className="absolute inset-y-0 right-0 z-10"
              style={{ width: '65%', background: 'linear-gradient(to left, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 30%, transparent 100%)' }}
            />
            {/* Top fade */}
            <div
              className="absolute inset-x-0 top-0 z-10"
              style={{ height: '65%', background: 'linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0.7) 30%, transparent 100%)' }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 z-10"
              style={{ height: '65%', background: 'linear-gradient(to top, rgb(0,0,0) 0%, rgba(0,0,0,0.7) 30%, transparent 100%)' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/haniel-palestra.jpg"
              alt="Haniel Rolemberg"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
          </div>

        </div>
      </section>


    </main>
  )
}
