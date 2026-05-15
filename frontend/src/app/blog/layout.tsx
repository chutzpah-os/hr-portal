import type { ReactNode } from 'react'

export const metadata = {
  title: 'Blog — Haniel Rolemberg',
  description: 'Reflections on time, technology, problem-solving, and what it means to build a meaningful life.',
  alternates: { canonical: 'https://hanielrolemberg.com/blog' },
  openGraph: {
    title: 'Blog — Haniel Rolemberg',
    description: 'Reflections on time, technology, and problem-solving.',
    url: 'https://hanielrolemberg.com/blog',
  },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
