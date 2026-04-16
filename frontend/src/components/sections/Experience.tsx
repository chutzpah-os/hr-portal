'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import ShowMoreButton from '@/components/ui/ShowMoreButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Experience } from '@/data/portfolio'

const LIMIT = 3

function ExperienceCard({
  exp,
  onClick,
}: {
  exp: Experience
  onClick: (item: Experience) => void
}) {
  return (
    <div onClick={() => onClick(exp)} className="portfolio-card p-6 rounded">
      <div className="flex gap-4 items-start">
        <div className="flex-grow min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
            <h3 style={{ color: 'var(--white-100)' }}>{exp.title}</h3>
            <span
              className="text-xs uppercase tracking-widest flex-shrink-0"
              style={{ color: 'var(--white-50)' }}
            >
              {exp.period}
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: 'var(--white-60)' }}>
            {exp.company}
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--white-70)' }}>
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const [active, setActive] = useState<Experience | null>(null)
  const [showMore, setShowMore] = useState(false)

  const all = portfolioData.experience
  const visible = all.slice(0, LIMIT)
  const extra = all.slice(LIMIT)

  const openDetail = (item: Experience) => {
    setShowMore(false)
    setActive(item)
  }

  return (
    <SectionWrapper id="experience" fullscreen={false}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="text-center mb-12" style={{ color: 'var(--white-100)' }}>
          Experience
        </h2>

        <div className="space-y-4">
          {visible.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} onClick={() => setActive(exp)} />
          ))}
        </div>

        {extra.length > 0 && (
          <ShowMoreButton extraCount={extra.length} onClick={() => setShowMore(true)} />
        )}
      </div>

      {/* Show More modal */}
      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--white-50)' }}>
          Experience
        </h2>
        <div className="space-y-4">
          {extra.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} onClick={openDetail} />
          ))}
        </div>
      </Modal>

      {/* Detail modal */}
      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--white-100)' }}>
              {active.title}
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--white-50)' }}>
              {active.company} · {active.period}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white-80)' }}>
              {active.details.overview}
            </p>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--white-50)' }}>
              Key Focus Areas
            </p>
            <ul className="space-y-2 mb-6">
              {active.details.keyAreas.map((area, i) => (
                <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-70)' }}>
                  <span style={{ color: 'var(--white-35)' }}>—</span>
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--white-50)' }}>
              Technologies
            </p>
            <p className="text-sm" style={{ color: 'var(--white-70)' }}>
              {active.details.technologies}
            </p>
          </div>
        )}
      </Modal>
    </SectionWrapper>
  )
}
