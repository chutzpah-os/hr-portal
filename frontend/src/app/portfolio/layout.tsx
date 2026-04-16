import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Portfolio',
  description: 'Experience, education, projects, skills, and certifications of Haniel Rolemberg — Problem Solver working across software, data, cybersecurity, and AI/ML.',
  alternates: {
    canonical: 'https://hanielrolemberg.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio — Haniel Rolemberg',
    description: 'Experience, education, projects, skills, and certifications.',
    url: 'https://hanielrolemberg.com/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
