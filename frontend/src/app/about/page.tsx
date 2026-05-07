import type { Metadata } from 'next'
import DNACanvas3D from '@/components/ui/DNACanvas3D'

export const metadata: Metadata = {
  title: 'About — Haniel Rolemberg',
}

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '5rem' }}>

      {/* About — text + DNA side by side */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">

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

          {/* DNA — replaces image */}
          <div
            className="flex-shrink-0 w-full md:w-auto rounded overflow-hidden"
            style={{ width: '340px', height: 'clamp(320px, 50vh, 460px)' }}
          >
            <DNACanvas3D />
          </div>

        </div>
      </section>

    </main>
  )
}
