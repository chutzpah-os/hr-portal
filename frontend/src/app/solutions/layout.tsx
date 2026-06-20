import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Solutions — Haniel Rolemberg',
  description: 'Products and initiatives built by Haniel Rolemberg — from life operating systems to language learning and social impact campaigns.',
  alternates: { canonical: 'https://hanielrolemberg.com/solutions' },
  openGraph: {
    title: 'Solutions — Haniel Rolemberg',
    description: 'Products and initiatives built by Haniel Rolemberg — from life operating systems to language learning and social impact campaigns.',
    url: 'https://hanielrolemberg.com/solutions',
    type: 'website',
  },
}

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
