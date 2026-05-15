import Footer from '@/components/layout/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Contact — Haniel Rolemberg',
  description: 'Get in touch with Haniel Rolemberg.',
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
