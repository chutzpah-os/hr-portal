import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Syne, Playfair_Display } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
    default: 'Haniel Rolemberg — Cybersecurity Specialist',
    template: '%s — Haniel Rolemberg',
  },
  description:
    'Cybersecurity Specialist & Problem Solver — penetration testing, threat modeling, secure systems design, and AI-driven security. On a mission to impact 1 billion lives by 2035.',
  keywords: [
    'Cybersecurity',
    'Penetration Testing',
    'Threat Modeling',
    'Security Engineer',
    'Problem Solver',
    'Haniel Rolemberg',
    'Red Team',
    'CTF',
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
    title: 'Haniel Rolemberg — Problem Solver',
    description: 'Problem Solver | Software · Cybersecurity · Data · AI/ML',
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
    title: 'Haniel Rolemberg — Problem Solver',
    description: 'Problem Solver | Software · Cybersecurity · Data · AI/ML',
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
  jobTitle: 'Cybersecurity Specialist',
  description: 'Cybersecurity Specialist and Problem Solver. Penetration testing, threat modeling, secure systems design. Founder of the Problem Solver Foundation. Mission: impact 1 billion lives by 2035.',
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
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${syne.variable} ${playfair.variable}`}>
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
