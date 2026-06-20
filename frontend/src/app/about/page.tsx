import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'About — Haniel Rolemberg',
  description: 'Problem Solver from Aracaju, Brazil. R&D Consultant, Professor, and Founder of the Problem Solvers Foundation. On a mission to impact 1 billion lives by 2035 through technology and human connection.',
  alternates: { canonical: 'https://hanielrolemberg.com/about' },
  openGraph: {
    title: 'About Haniel Rolemberg',
    description: 'Problem Solver, R&D Consultant, and Professor. Founder of the Problem Solvers Foundation. Mission: impact 1 billion lives by 2035.',
    url: 'https://hanielrolemberg.com/about',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '5.5rem' }}>
      <AboutSection />
    </main>
  )
}
