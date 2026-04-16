import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
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

const BASE_URL = 'https://hanielrolemberg.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Haniel Rolemberg — Problem Solver',
    template: '%s — Haniel Rolemberg',
  },
  description:
    'Problem Solver | Software Development, Cybersecurity, Data Engineering & AI/ML. On a mission to impact 1 billion lives by 2035.',
  keywords: [
    'Problem Solver',
    'Software Engineer',
    'Cybersecurity',
    'Data Engineering',
    'Machine Learning',
    'Haniel Rolemberg',
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
        url: '/images/profile.jpg',
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
    images: ['/images/profile.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
