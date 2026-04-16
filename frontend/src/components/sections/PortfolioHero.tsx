'use client'

import { useState } from 'react'
import CVDownloadModal from '@/components/ui/CVDownloadModal'
import CTA from '@/components/ui/CTA'

export default function PortfolioHero() {
  const [cvModalOpen, setCvModalOpen] = useState(false)

  return (
    <section className="flex flex-col md:flex-row items-center" style={{ minHeight: '600px' }}>
      {/* Text — left */}
      <div className="flex-1 px-6 md:px-10 py-20 md:py-28 max-w-2xl">
        <p
          className="text-xs uppercase tracking-widest mb-5"
          style={{ color: 'var(--white-40)' }}
        >
          Portfolio
        </p>
        <p
          className="text-base md:text-lg leading-relaxed mb-6"
          style={{ color: 'var(--white-60)' }}
        >
          Problem solver working across software development, data engineering, cybersecurity, and AI/ML.
          Every project here represents a real challenge tackled with purpose and precision.
        </p>
        <p
          className="text-sm md:text-base leading-relaxed mb-10"
          style={{ color: 'var(--white-40)' }}
        >
          Explore my experience, certifications, open-source work, and the skills I&apos;ve built along the way.
        </p>
        <CTA onClick={() => setCvModalOpen(true)}>Download CV</CTA>
      </div>

      <CVDownloadModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Image — right, bleeds to edge */}
      <div
        className="relative hidden md:block flex-shrink-0 overflow-hidden"
        style={{ width: '45%', height: '600px' }}
      >
        {/* Dark tint */}
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
        {/* Left fade */}
        <div
          className="absolute inset-y-0 left-0 z-10"
          style={{ width: '65%', background: 'linear-gradient(to right, rgb(0,0,0) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2) 70%, transparent 100%)' }}
        />
        {/* Right fade */}
        <div
          className="absolute inset-y-0 right-0 z-10"
          style={{ width: '45%', background: 'linear-gradient(to left, rgb(0,0,0) 0%, rgba(0,0,0,0.7) 30%, transparent 100%)' }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 z-10"
          style={{ height: '55%', background: 'linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0.6) 30%, transparent 100%)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 z-10"
          style={{ height: '55%', background: 'linear-gradient(to top, rgb(0,0,0) 0%, rgba(0,0,0,0.6) 30%, transparent 100%)' }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/portfolio-profile.jpg"
          alt="Haniel Rolemberg"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
      </div>
    </section>
  )
}
