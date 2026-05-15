import type { ReactNode } from 'react'

export const metadata = {
  title: 'Research — Haniel Rolemberg',
  description: 'Academic and applied research by Haniel Rolemberg across cybersecurity, data systems, and AI.',
  alternates: { canonical: 'https://hanielrolemberg.com/researches' },
  openGraph: {
    title: 'Research — Haniel Rolemberg',
    description: 'Academic and applied research across cybersecurity, data systems, and AI.',
    url: 'https://hanielrolemberg.com/researches',
  },
}

export default function ResearchesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
