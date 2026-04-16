'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import ShowMoreButton from '@/components/ui/ShowMoreButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Education } from '@/data/portfolio'

const LIMIT = 3

function EducationCard({
  edu,
  onClick,
}: {
  edu: Education
  onClick: (item: Education) => void
}) {
  return (
    <div onClick={() => onClick(edu)} className="portfolio-card p-6 rounded">
      <div className="flex gap-4 items-start">
        <div className="flex-grow min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
            <h3 style={{ color: 'var(--white-100)' }}>{edu.title}</h3>
            <span
              className="text-xs uppercase tracking-widest flex-shrink-0"
              style={{ color: 'var(--white-50)' }}
            >
              {edu.period}
            </span>
          </div>
          <p className="text-sm mb-2" style={{ color: 'var(--white-60)' }}>
            {edu.institution}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--white-70)' }}>
            {edu.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function EducationSection() {
  const [active, setActive] = useState<Education | null>(null)
  const [showMore, setShowMore] = useState(false)

  const all = portfolioData.education
  const visible = all.slice(0, LIMIT)
  const extra = all.slice(LIMIT)

  const openDetail = (item: Education) => {
    setShowMore(false)
    setActive(item)
  }

  return (
    <SectionWrapper
      id="education"
      fullscreen={false}
      style={{ backgroundColor: 'rgba(5, 5, 5, 0.5)' }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="text-center mb-12" style={{ color: 'var(--white-100)' }}>
          Education
        </h2>

        <div className="space-y-4">
          {visible.map((edu) => (
            <EducationCard key={edu.id} edu={edu} onClick={() => setActive(edu)} />
          ))}
        </div>

        {extra.length > 0 && (
          <ShowMoreButton extraCount={extra.length} onClick={() => setShowMore(true)} />
        )}
      </div>

      {/* Show More modal */}
      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--white-50)' }}>
          Education
        </h2>
        <div className="space-y-4">
          {extra.map((edu) => (
            <EducationCard key={edu.id} edu={edu} onClick={openDetail} />
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
              {active.institution} · {active.period}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white-80)' }}>
              {active.details.overview}
            </p>
            {active.details.gpa && (
              <p className="text-sm mb-6" style={{ color: 'var(--white-70)' }}>
                <span className="uppercase tracking-widest text-xs mr-2" style={{ color: 'var(--white-50)' }}>
                  GPA:
                </span>
                {active.details.gpa}
              </p>
            )}
            {active.details.keyAreas && (
              <>
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
              </>
            )}
            {active.details.keyCourses && (
              <>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--white-50)' }}>
                  Key Courses
                </p>
                <ul className="space-y-2 mb-6">
                  {active.details.keyCourses.map((course, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-70)' }}>
                      <span style={{ color: 'var(--white-35)' }}>—</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {active.details.skillsDeveloped && (
              <>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--white-50)' }}>
                  Skills Developed
                </p>
                <ul className="space-y-2">
                  {active.details.skillsDeveloped.map((skill, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-70)' }}>
                      <span style={{ color: 'var(--white-35)' }}>—</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </Modal>
    </SectionWrapper>
  )
}
