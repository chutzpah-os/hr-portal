import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Lab — Haniel Rolemberg',
  description: 'R&D showcase — software, AI/ML, and systems built end-to-end by Haniel Rolemberg, from compliance intelligence to physical security, governance, and education.',
  alternates: { canonical: 'https://hanielrolemberg.com/solutions' },
  openGraph: {
    title: 'Lab — Haniel Rolemberg',
    description: 'R&D showcase — software, AI/ML, and systems built end-to-end by Haniel Rolemberg.',
    url: 'https://hanielrolemberg.com/solutions',
    type: 'website',
  },
}

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
