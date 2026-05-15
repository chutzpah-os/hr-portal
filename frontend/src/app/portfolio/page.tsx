import Hero from '@/components/sections/Hero'
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
