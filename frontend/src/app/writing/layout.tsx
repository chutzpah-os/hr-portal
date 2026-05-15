import type { ReactNode } from 'react'

export const metadata = {
  title: 'Writing — Haniel Rolemberg',
  description: 'Books and long-form writing by Haniel Rolemberg on technology, problem-solving, and society.',
  alternates: { canonical: 'https://hanielrolemberg.com/writing' },
  openGraph: {
    title: 'Writing — Haniel Rolemberg',
    description: 'Books and long-form writing on technology, problem-solving, and society.',
    url: 'https://hanielrolemberg.com/writing',
  },
}

export default function WritingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
