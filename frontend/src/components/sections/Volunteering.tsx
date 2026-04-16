'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import ShowMoreButton from '@/components/ui/ShowMoreButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Volunteering } from '@/data/portfolio'

const LIMIT = 3

function VolunteeringCard({
  vol,
  onClick,
}: {
  vol: Volunteering
  onClick: (item: Volunteering) => void
}) {
  return (
    <div onClick={() => onClick(vol)} className="portfolio-card p-6 rounded">
      <div className="flex gap-4 items-start">
        <div className="flex-grow min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
            <h3 style={{ color: 'var(--white-100)' }}>{vol.title}</h3>
            <span
              className="text-xs uppercase tracking-widest flex-shrink-0"
              style={{ color: 'var(--white-50)' }}
            >
              {vol.period}
            </span>
          </div>
          <p className="text-sm mb-2" style={{ color: 'var(--white-60)' }}>
            {vol.organization}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--white-70)' }}>
            {vol.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function VolunteeringSection() {
  const [active, setActive] = useState<Volunteering | null>(null)
  const [showMore, setShowMore] = useState(false)

  const all = portfolioData.volunteering
  const visible = all.slice(0, LIMIT)
  const extra = all.slice(LIMIT)

  const openDetail = (item: Volunteering) => {
    setShowMore(false)
    setActive(item)
  }

  return (
    <SectionWrapper id="volunteering" fullscreen={false}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="text-center mb-12" style={{ color: 'var(--white-100)' }}>
          Volunteering
        </h2>

        <div className="space-y-4">
          {visible.map((vol) => (
            <VolunteeringCard key={vol.id} vol={vol} onClick={() => setActive(vol)} />
          ))}
        </div>

        {extra.length > 0 && (
          <ShowMoreButton extraCount={extra.length} onClick={() => setShowMore(true)} />
        )}
      </div>

      {/* Show More modal */}
      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--white-50)' }}>
          Volunteering
        </h2>
        <div className="space-y-4">
          {extra.map((vol) => (
            <VolunteeringCard key={vol.id} vol={vol} onClick={openDetail} />
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
              {active.organization} · {active.period}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white-80)' }}>
              {active.details.overview}
            </p>
            {active.details.focusAreas && (
              <>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--white-50)' }}>
                  Focus Areas
                </p>
                <ul className="space-y-2 mb-6">
                  {active.details.focusAreas.map((area, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-70)' }}>
                      <span style={{ color: 'var(--white-35)' }}>—</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {active.details.responsibilities && (
              <>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--white-50)' }}>
                  Responsibilities
                </p>
                <ul className="space-y-2 mb-6">
                  {active.details.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-70)' }}>
                      <span style={{ color: 'var(--white-35)' }}>—</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--white-50)' }}>
              Category
            </p>
            <p className="text-sm" style={{ color: 'var(--white-70)' }}>
              {active.details.category}
            </p>
          </div>
        )}
      </Modal>
    </SectionWrapper>
  )
}
