'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import ShowMoreButton from '@/components/ui/ShowMoreButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Language } from '@/data/portfolio'

const LIMIT = 3

function LanguageCard({
  lang,
  onClick,
}: {
  lang: Language
  onClick: (item: Language) => void
}) {
  return (
    <div onClick={() => onClick(lang)} className="portfolio-card p-6 rounded">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm" style={{ color: 'var(--white-100)' }}>
          {lang.language}
        </h3>
        <span className="text-xs" style={{ color: 'var(--white-50)' }}>
          {lang.proficiency}%
        </span>
      </div>
      <p className="text-xs mb-4" style={{ color: 'var(--white-50)' }}>
        {lang.level}
      </p>
      <div
        className="w-full h-px relative overflow-hidden rounded-full"
        style={{ backgroundColor: 'var(--white-15)' }}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
          style={{
            width: `${lang.proficiency}%`,
            backgroundColor: 'var(--white-60)',
          }}
        />
      </div>
    </div>
  )
}

export default function LanguagesSection() {
  const [active, setActive] = useState<Language | null>(null)
  const [showMore, setShowMore] = useState(false)

  const all = portfolioData.languages
  const visible = all.slice(0, LIMIT)
  const extra = all.slice(LIMIT)

  const openDetail = (item: Language) => {
    setShowMore(false)
    setActive(item)
  }

  return (
    <SectionWrapper
      id="languages"
      fullscreen={false}
      style={{ backgroundColor: 'rgba(5, 5, 5, 0.5)' }}
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="text-center mb-12" style={{ color: 'var(--white-100)' }}>
          Languages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((lang) => (
            <LanguageCard key={lang.id} lang={lang} onClick={() => setActive(lang)} />
          ))}
        </div>

        {extra.length > 0 && (
          <ShowMoreButton extraCount={extra.length} onClick={() => setShowMore(true)} />
        )}
      </div>

      {/* Show More modal */}
      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--white-50)' }}>
          Languages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {extra.map((lang) => (
            <LanguageCard key={lang.id} lang={lang} onClick={openDetail} />
          ))}
        </div>
      </Modal>

      {/* Detail modal */}
      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--white-100)' }}>
              {active.language}
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--white-50)' }}>
              {active.level}
            </p>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: 'var(--white-50)' }}
                >
                  Proficiency Level
                </span>
                <span className="text-sm font-bold" style={{ color: 'var(--white-100)' }}>
                  {active.proficiency}%
                </span>
              </div>
              <div
                className="w-full h-1 rounded-full"
                style={{ backgroundColor: 'var(--white-15)' }}
              >
                <div
                  className="h-1 rounded-full"
                  style={{
                    width: `${active.proficiency}%`,
                    backgroundColor: 'var(--white-80)',
                  }}
                />
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white-80)' }}>
              {active.details.description}
            </p>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--white-50)' }}>
              Certifications &amp; Skills
            </p>
            <ul className="space-y-2 mb-6">
              {active.details.certifications.map((cert, i) => (
                <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-70)' }}>
                  <span style={{ color: 'var(--white-35)' }}>—</span>
                  {cert}
                </li>
              ))}
            </ul>
            {active.details.verificationLink && active.details.verificationLink !== '#' && (
              <a
                href={active.details.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-widest transition-colors duration-200"
                style={{ color: 'var(--white-60)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-100)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-60)')}
              >
                Verify Language Proficiency →
              </a>
            )}
          </div>
        )}
      </Modal>
    </SectionWrapper>
  )
}
