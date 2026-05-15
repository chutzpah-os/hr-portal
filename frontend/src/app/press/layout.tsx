import type { ReactNode } from 'react'

export const metadata = {
  title: 'Press — Haniel Rolemberg',
  description: 'Media appearances, interviews, and press coverage featuring Haniel Rolemberg.',
  alternates: { canonical: 'https://hanielrolemberg.com/press' },
  openGraph: {
    title: 'Press — Haniel Rolemberg',
    description: 'Media appearances, interviews, and press coverage.',
    url: 'https://hanielrolemberg.com/press',
  },
}

export default function PressLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
