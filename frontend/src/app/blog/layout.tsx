import type { ReactNode } from 'react'

export const metadata = {
  title: 'Blog — Haniel Rolemberg',
  description: 'Reflections on time, technology, problem-solving, and what it means to build a meaningful life.',
  alternates: { canonical: 'https://hanielrolemberg.com/blog' },
  openGraph: {
    title: 'Blog — Haniel Rolemberg',
    description: 'Reflections on time, technology, and problem-solving.',
    url: 'https://hanielrolemberg.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://hanielrolemberg.com/images/Haniel-Rolemberg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Haniel Rolemberg — Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Haniel Rolemberg',
    description: 'Reflections on time, technology, and problem-solving.',
    images: ['https://hanielrolemberg.com/images/Haniel-Rolemberg.jpeg'],
  },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
