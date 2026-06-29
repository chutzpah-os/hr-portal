import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'

export const metadata: Metadata = {
  title: 'Portfolio — Haniel Rolemberg',
  description: '6+ years of experience across cybersecurity, software engineering, data engineering, and AI/ML. 30+ projects, 22 certifications, and research across 6 initiatives. Full professional history and skills.',
  alternates: { canonical: 'https://hanielrolemberg.com/portfolio' },
  openGraph: {
    title: 'Portfolio — Haniel Rolemberg',
    description: 'Cybersecurity, software engineering, data and AI/ML. 6+ years of experience, 30+ projects, 22 certifications.',
    url: 'https://hanielrolemberg.com/portfolio',
    type: 'website',
  },
}
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
