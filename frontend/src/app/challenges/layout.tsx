import type { ReactNode } from 'react'

export const metadata = {
  title: 'Challenges — Haniel Rolemberg',
  description: 'Personal challenges and initiatives — from running for cancer research to causes that turn movement into meaning.',
  alternates: {
    canonical: 'https://hanielrolemberg.com/challenges',
  },
  openGraph: {
    title: 'Challenges — Haniel Rolemberg',
    description: 'Personal challenges and initiatives — from running for cancer research to causes that turn movement into meaning.',
    url: 'https://hanielrolemberg.com/challenges',
  },
}

export default function ChallengesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
