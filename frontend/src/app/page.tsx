import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProjectsSection from '@/components/sections/Projects'
import ResearchesSection from '@/components/sections/Researches'
import EducationSection from '@/components/sections/Education'
import LanguagesSection from '@/components/sections/Languages'
import VolunteeringSection from '@/components/sections/Volunteering'
import CertificationsSection from '@/components/sections/Certifications'
import ExperienceSection from '@/components/sections/Experience'
import AboutSection from '@/components/sections/AboutSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactSection from '@/components/sections/Contact'
import PortfolioSection from '@/components/sections/PortfolioSection'
import SkillsSection from '@/components/sections/SkillsSection'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero ── */}
        <Hero />

        <hr className="section-divider" />

        {/* ── Portfolio ── */}
        <PortfolioSection>
          <ProjectsSection />
          <hr className="section-divider" />
          <ResearchesSection />
          <hr className="section-divider" />
          <EducationSection />
          <hr className="section-divider" />
          <LanguagesSection />
          <hr className="section-divider" />
          <VolunteeringSection />
          <hr className="section-divider" />
          <CertificationsSection />

          <hr className="section-divider" />
          <SkillsSection />
        </PortfolioSection>

        <hr className="section-divider" />

        {/* ── Experience ── */}
        <ExperienceSection />

        <hr className="section-divider" />

        {/* ── About + Skills ── */}
        <AboutSection />

        <hr className="section-divider" />

        {/* ── Process ── */}
        <ProcessSection />

        <hr className="section-divider" />

        {/* ── Contact ── */}
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
