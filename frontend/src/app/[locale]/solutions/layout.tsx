import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { buildAlternates } from '@/lib/metadata'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Lab — Haniel Rolemberg',
    description: 'R&D showcase — software, AI/ML, and systems built end-to-end by Haniel Rolemberg, from compliance intelligence to physical security, governance, and education.',
    alternates: buildAlternates(locale, '/solutions'),
    openGraph: {
      title: 'Lab — Haniel Rolemberg',
      description: 'R&D showcase — software, AI/ML, and systems built end-to-end by Haniel Rolemberg.',
      url: `https://www.hanielrolemberg.com/${locale}/solutions`,
      type: 'website',
    },
  }
}

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
