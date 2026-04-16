'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import ShowMoreButton from '@/components/ui/ShowMoreButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Certification } from '@/data/portfolio'

const LIMIT = 4

const CATEGORY_LABELS: Record<Certification['category'], string> = {
  cloud: 'Cloud',
  security: 'Security',
  networking: 'Networking',
  data: 'Data',
  development: 'Development',
}

function CategoryIcon({ category }: { category: Certification['category'] }) {
  const style = { color: 'var(--white-35)', flexShrink: 0 as const }

  if (category === 'cloud')
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    )

  if (category === 'security')
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )

  if (category === 'networking')
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0zm3.75-4.5h.75a.75.75 0 01.75.75v.75M3.75 7.5H3a.75.75 0 00-.75.75v.75M3.75 16.5H3a.75.75 0 00-.75.75v.75m17.25 0h.75a.75.75 0 00.75-.75v-.75" />
      </svg>
    )

  if (category === 'data')
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={style}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  )
}

function CertCard({ cert }: { cert: Certification }) {
  return (
    <div
      className="rounded p-5"
      style={{
        border: '1px solid var(--white-10)',
        backgroundColor: 'rgba(5, 5, 5, 0.9)',
      }}
    >
      <div className="flex items-start gap-3">
        <CategoryIcon category={cert.category} />
        <div className="flex-grow min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-sm font-medium leading-tight" style={{ color: 'var(--white-90)' }}>
              {cert.title}
            </p>
            <span className="text-xs flex-shrink-0" style={{ color: 'var(--white-40)' }}>
              {cert.date}
            </span>
          </div>
          <p className="text-xs mb-1" style={{ color: 'var(--white-50)' }}>
            {cert.issuer}
          </p>
          <p className="text-xs mb-3" style={{ color: 'var(--white-35)' }}>
            {CATEGORY_LABELS[cert.category]}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {cert.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded"
                style={{
                  border: '1px solid var(--white-10)',
                  color: 'var(--white-40)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          {cert.verifyUrl && cert.verifyUrl !== '#' && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--white-40)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-80)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-40)')}
            >
              Verify Language Proficiency →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CertificationsSection() {
  const [showMore, setShowMore] = useState(false)

  const all = portfolioData.certifications
  const visible = all.slice(0, LIMIT)
  const extra = all.slice(LIMIT)

  return (
    <SectionWrapper id="certifications" fullscreen={false}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="text-center mb-12" style={{ color: 'var(--white-100)' }}>
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {visible.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>

        {extra.length > 0 && (
          <ShowMoreButton extraCount={extra.length} onClick={() => setShowMore(true)} />
        )}
      </div>

      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--white-50)' }}>
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {extra.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </Modal>
    </SectionWrapper>
  )
}
