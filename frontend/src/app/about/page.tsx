import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'About — Haniel Rolemberg',
}

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '5.5rem' }}>
      <AboutSection />
    </main>
  )
}
