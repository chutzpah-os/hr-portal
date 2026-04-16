import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Blog',
  description: 'Articles, reflections, and technical notes by Haniel Rolemberg on software, cybersecurity, data engineering, and AI/ML.',
  alternates: {
    canonical: 'https://hanielrolemberg.com/blog',
  },
  openGraph: {
    title: 'Blog — Haniel Rolemberg',
    description: 'Articles, reflections, and technical notes.',
    url: 'https://hanielrolemberg.com/blog',
  },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}