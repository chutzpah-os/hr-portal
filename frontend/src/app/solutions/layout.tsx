import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Solutions',
  description: 'Problems I solved and am solving — technical, social, and strategic. Each with a clear approach, my role, and measurable impact.',
  alternates: {
    canonical: 'https://hanielrolemberg.com/solutions',
  },
  openGraph: {
    title: 'Solutions — Haniel Rolemberg',
    description: 'Problems I solved and am solving. Focus on real impact.',
    url: 'https://hanielrolemberg.com/solutions',
  },
}

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
