import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'
import { buildAlternates } from '@/lib/metadata'

const BASE_URL = 'https://hanielrolemberg.com'

const METADATA_BY_LOCALE: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
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
  es: {
    title: 'Acerca de — Haniel Rolemberg',
    description: 'Solucionador de Problemas de Aracaju, Brasil. Consultor de I+D, Profesor y Fundador de la Problem Solvers Foundation. En una misión para impactar 1 mil millones de vidas para 2035 a través de la tecnología y la conexión humana.',
    ogTitle: 'Acerca de Haniel Rolemberg',
    ogDescription: 'Solucionador de Problemas, Consultor de I+D y Profesor. Fundador de la Problem Solvers Foundation. Misión: impactar 1 mil millones de vidas para 2035.',
  },
  fr: {
    title: 'À propos — Haniel Rolemberg',
    description: 'Solutionneur de Problèmes d\'Aracaju, Brésil. Consultant en R&D, Professeur et Fondateur de la Problem Solvers Foundation. En mission pour impacter 1 milliard de vies d\'ici 2035 grâce à la technologie et à la connexion humaine.',
    ogTitle: 'À propos de Haniel Rolemberg',
    ogDescription: 'Solutionneur de Problèmes, Consultant en R&D et Professeur. Fondateur de la Problem Solvers Foundation. Mission : impacter 1 milliard de vies d\'ici 2035.',
  },
  ca: {
    title: 'Sobre mi — Haniel Rolemberg',
    description: 'Solucionador de Problemes d\'Aracaju, Brasil. Consultor d\'R+D, Professor i Fundador de la Problem Solvers Foundation. En missió per impactar 1.000 milions de vides per al 2035 a través de la tecnologia i la connexió humana.',
    ogTitle: 'Sobre Haniel Rolemberg',
    ogDescription: 'Solucionador de Problemes, Consultor d\'R+D i Professor. Fundador de la Problem Solvers Foundation. Missió: impactar 1.000 milions de vides per al 2035.',
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
    alternates: buildAlternates(locale, '/about'),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: `${BASE_URL}/${locale}/about`,
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
