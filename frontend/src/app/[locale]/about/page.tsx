import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'

const BASE_URL = 'https://hanielrolemberg.com'

const METADATA_BY_LOCALE = {
  en: {
    title: 'About — Haniel Rolemberg',
    description: 'Problem Solver from Aracaju, Brazil. R&D Consultant, Professor, and Founder of the Problem Solvers Foundation. On a mission to impact 1 billion lives by 2035 through technology and human connection.',
    ogTitle: 'About Haniel Rolemberg',
    ogDescription: 'Problem Solver, R&D Consultant, and Professor. Founder of the Problem Solvers Foundation. Mission: impact 1 billion lives by 2035.',
  },
  pt: {
    title: 'Sobre — Haniel Rolemberg',
    description: 'Solucionador de Problemas nascido em Aracaju, Brasil. Consultor de P&D, Professor e Fundador da Problem Solvers Foundation. Em uma missão para impactar 1 bilhão de vidas até 2035 através de tecnologia e conexão humana.',
    ogTitle: 'Sobre Haniel Rolemberg',
    ogDescription: 'Solucionador de Problemas, Consultor de P&D e Professor. Fundador da Problem Solvers Foundation. Missão: impactar 1 bilhão de vidas até 2035.',
  },
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const m = locale === 'pt' ? METADATA_BY_LOCALE.pt : METADATA_BY_LOCALE.en

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `${BASE_URL}/about` },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: `${BASE_URL}/about`,
      type: 'profile',
    },
  }
}

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '5.5rem' }}>
      <AboutSection />
    </main>
  )
}
