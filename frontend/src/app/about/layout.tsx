import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'About',
  description: 'Learn about Haniel Rolemberg — problem solver, founder of the Problem Solver Foundation, on a mission to impact 1 billion lives by 2035.',
  alternates: {
    canonical: 'https://hanielrolemberg.com/about',
  },
  openGraph: {
    title: 'About — Haniel Rolemberg',
    description: 'Problem solver, founder, builder. On a mission to impact 1 billion lives by 2035.',
    url: 'https://hanielrolemberg.com/about',
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
