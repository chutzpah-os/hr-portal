import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { buildAlternates } from '@/lib/metadata'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Challenges — Haniel Rolemberg',
    description: 'Personal and professional challenges — from running 1,000 miles against cancer to frontier research projects.',
    alternates: buildAlternates(locale, '/challenges'),
    openGraph: {
      title: 'Challenges — Haniel Rolemberg',
      description: 'Personal and professional challenges — from running 1,000 miles against cancer to frontier research projects.',
      url: `https://hanielrolemberg.com/${locale}/challenges`,
      type: 'website',
    },
  }
}

export default function ChallengesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
