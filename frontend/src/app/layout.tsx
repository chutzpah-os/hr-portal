import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Syne, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const BASE_URL = 'https://hanielrolemberg.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Haniel Rolemberg — Problem Solver | R&D Consultant | Professor',
    template: '%s — Haniel Rolemberg',
  },
  description:
    'Problem Solver, R&D Consultant & Professor — software engineering, cybersecurity, data, AI/ML. On a mission to impact 1 billion lives by 2035.',
  keywords: [
    'Problem Solver',
    'R&D Consultant',
    'Professor',
    'Haniel Rolemberg',
    'Cybersecurity',
    'Software Engineering',
    'Data Engineering',
    'AI ML',
  ],
  authors: [{ name: 'Haniel Rolemberg', url: BASE_URL }],
  creator: 'Haniel Rolemberg',
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Haniel Rolemberg — Problem Solver | R&D Consultant | Professor',
    description: 'Problem Solver, R&D Consultant & Professor — software, cybersecurity, data, AI/ML.',
    url: BASE_URL,
    siteName: 'Haniel Rolemberg',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/Haniel-Rolemberg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Haniel Rolemberg — Problem Solver',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haniel Rolemberg — Problem Solver | R&D Consultant | Professor',
    description: 'Problem Solver, R&D Consultant & Professor — software, cybersecurity, data, AI/ML.',
    images: ['/images/Haniel-Rolemberg.jpeg'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Haniel Rolemberg',
  url: BASE_URL,
  sameAs: [
    'https://linkedin.com/in/hanielrolemberg',
    'https://github.com/hanielrolemberg',
  ],
  jobTitle: 'Problem Solver | R&D Consultant | Professor',
  description: 'Problem Solver, R&D Consultant and Professor. Software engineering, cybersecurity, data engineering, AI/ML. Founder of the Problem Solver Foundation. Mission: impact 1 billion lives by 2035.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Haniel Rolemberg',
  url: BASE_URL,
  author: { '@type': 'Person', name: 'Haniel Rolemberg' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${robotoMono.variable} ${syne.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
