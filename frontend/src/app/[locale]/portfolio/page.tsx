import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import RecommendationsCarousel from '@/components/sections/RecommendationsCarousel'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ExperienceSection from '@/components/sections/Experience'
import VolunteeringSection from '@/components/sections/Volunteering'
import ProjectsSection from '@/components/sections/Projects'
import ResearchesSection from '@/components/sections/Researches'
import EducationSection from '@/components/sections/Education'
import LanguagesSection from '@/components/sections/Languages'
import CertificationsSection from '@/components/sections/Certifications'
import SkillsSection from '@/components/sections/SkillsSection'
import AwardsSection from '@/components/sections/AwardsSection'

const BASE_URL = 'https://hanielrolemberg.com'

const METADATA_BY_LOCALE: Record<string, { title: string; description: string; ogDescription: string }> = {
  en: {
    title: 'Portfolio — Haniel Rolemberg',
    description: '6+ years of experience across cybersecurity, software engineering, data engineering, and AI/ML. 30+ projects, 22 certifications, and research across 6 initiatives. Full professional history and skills.',
    ogDescription: 'Cybersecurity, software engineering, data and AI/ML. 6+ years of experience, 30+ projects, 22 certifications.',
  },
  pt: {
    title: 'Portfólio — Haniel Rolemberg',
    description: 'Mais de 6 anos de experiência em cibersegurança, engenharia de software, engenharia de dados e IA/ML. 30+ projetos, 22 certificações e pesquisas em 6 iniciativas. Histórico profissional completo e habilidades.',
    ogDescription: 'Cibersegurança, engenharia de software, dados e IA/ML. 6+ anos de experiência, 30+ projetos, 22 certificações.',
  },
  es: {
    title: 'Portafolio — Haniel Rolemberg',
    description: 'Más de 6 años de experiencia en ciberseguridad, ingeniería de software, ingeniería de datos e IA/ML. 30+ proyectos, 22 certificaciones e investigaciones en 6 iniciativas. Historial profesional completo y habilidades.',
    ogDescription: 'Ciberseguridad, ingeniería de software, datos e IA/ML. 6+ años de experiencia, 30+ proyectos, 22 certificaciones.',
  },
  fr: {
    title: 'Portfolio — Haniel Rolemberg',
    description: 'Plus de 6 ans d\'expérience en cybersécurité, génie logiciel, ingénierie des données et IA/ML. 30+ projets, 22 certifications et recherches sur 6 initiatives. Parcours professionnel complet et compétences.',
    ogDescription: 'Cybersécurité, génie logiciel, données et IA/ML. 6+ ans d\'expérience, 30+ projets, 22 certifications.',
  },
  ca: {
    title: 'Portfolio — Haniel Rolemberg',
    description: 'Més de 6 anys d\'experiència en ciberseguretat, enginyeria de programari, enginyeria de dades i IA/ML. 30+ projectes, 22 certificacions i recerques en 6 iniciatives. Historial professional complet i habilitats.',
    ogDescription: 'Ciberseguretat, enginyeria de programari, dades i IA/ML. 6+ anys d\'experiència, 30+ projectes, 22 certificacions.',
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
    alternates: { canonical: `${BASE_URL}/portfolio` },
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: `${BASE_URL}/portfolio`,
      type: 'website',
    },
  }
}

export default function PortfolioPage() {
  return (
    <main>
      <Hero />
      <hr className="section-divider" />
      <RecommendationsCarousel />
      <hr className="section-divider" />
      <PortfolioSection>
        <ExperienceSection />
        <hr className="section-divider" />
        <VolunteeringSection />
        <hr className="section-divider" />
        <ProjectsSection />
        <hr className="section-divider" />
        <ResearchesSection />
        <hr className="section-divider" />
        <EducationSection />
        <hr className="section-divider" />
        <LanguagesSection />
        <hr className="section-divider" />
        <CertificationsSection />
        <hr className="section-divider" />
        <SkillsSection />
        <hr className="section-divider" />
        <AwardsSection />
      </PortfolioSection>
    </main>
  )
}
