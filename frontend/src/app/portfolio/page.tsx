import PortfolioHero from '@/components/sections/PortfolioHero'
import ExperienceSection from '@/components/sections/Experience'
import EducationSection from '@/components/sections/Education'
import VolunteeringSection from '@/components/sections/Volunteering'
import ProjectsSection from '@/components/sections/Projects'
import SkillsSection from '@/components/sections/Skills'
import LanguagesSection from '@/components/sections/Languages'
import CertificationsSection from '@/components/sections/Certifications'
import ResearchesSection from '@/components/sections/Researches'

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: '5rem' }}>
      <PortfolioHero />
      <hr className="section-divider" />
      <ProjectsSection />
      <hr className="section-divider" />
      <ExperienceSection />
      <hr className="section-divider" />
      <ResearchesSection />
      <hr className="section-divider" />
      <EducationSection />
      <hr className="section-divider" />
      <LanguagesSection />
      <hr className="section-divider" />
      <VolunteeringSection />
      <hr className="section-divider" />
      <SkillsSection />
      <hr className="section-divider" />
      <CertificationsSection />
    </main>
  )
}
