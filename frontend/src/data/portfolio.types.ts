import type { CVArea } from '@/utils/cvAreaMap'

// ─── Type Definitions ───────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string
  title: string
  about: string[]
}

export interface ExperienceDetails {
  overview: string
  keyAreas: string[]
  technologies: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  tags: string[]
  cvAreas: CVArea[]
  details: ExperienceDetails
  image?: string
}

export interface EducationDetails {
  overview: string
  gpa?: string
  keyAreas?: string[]
  keyCourses?: string[]
  skillsDeveloped?: string[]
}

export interface Education {
  id: string
  title: string
  institution: string
  period: string
  description: string
  cvAreas: CVArea[]
  details: EducationDetails
  type?: 'degree' | 'course'
}

export interface VolunteeringDetails {
  overview: string
  focusAreas?: string[]
  responsibilities?: string[]
  category: string
}

export interface Volunteering {
  id: string
  title: string
  organization: string
  period: string
  description: string
  cvAreas: CVArea[]
  details: VolunteeringDetails
  image?: string
}

export type ProjectCategory = 'softwareDevelopment' | 'cybersecurity' | 'dataEngineering' | 'aiml' | 'challenges'

export interface ProjectDetails {
  overview: string
  features: string[]
  techStack: string
  githubLink: string
}

export interface Project {
  id: string
  gradient: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  cvAreas: CVArea[]
  details: ProjectDetails
  image?: string
}

export interface LanguageDetails {
  description: string
  certifications: string[]
  verificationLink: string
}

export interface Language {
  id: string
  language: string
  level: string
  proficiency: number
  details: LanguageDetails
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  category: 'cloud' | 'security' | 'networking' | 'data' | 'development'
  cvAreas: CVArea[]
  credentialId?: string
  verifyUrl?: string
  tags: string[]
}

export interface SkillCategory {
  name: string
  items: string[]
  cvAreas: CVArea[]
}

export interface Research {
  id: string
  title: string
  description: string
  field: string
  status: 'in development' | 'published' | 'under review'
  cvAreas: CVArea[]
  link?: string
  image?: string
}

export interface Award {
  id: string
  title: string
  issuer: string
  year: string
  description?: string
}

export interface PortfolioData {
  personal: PersonalInfo
  experience: Experience[]
  education: Education[]
  volunteering: Volunteering[]
  skills: SkillCategory[]
  languages: Language[]
  projects: Record<ProjectCategory, Project[]>
  certifications: Certification[]
  researches: Research[]
  awards: Award[]
}
