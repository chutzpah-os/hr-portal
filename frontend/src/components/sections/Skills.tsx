'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import ShowMoreButton from '@/components/ui/ShowMoreButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData } from '@/data/portfolio'

const LIMIT = 4

function SkillCategory({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div
      className="rounded p-6"
      style={{
        border: '1px solid var(--white-15)',
        backgroundColor: 'rgba(5, 5, 5, 0.9)',
      }}
    >
      <h3 className="text-xs tracking-widest mb-4" style={{ color: 'var(--white-50)' }}>
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const [showMore, setShowMore] = useState(false)

  const allEntries = portfolioData.skills
  const visible = allEntries.slice(0, LIMIT)
  const extra = allEntries.slice(LIMIT)

  return (
    <SectionWrapper id="skills" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="text-center mb-12" style={{ color: 'var(--white-100)' }}>
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map(({ name, items }) => (
            <SkillCategory key={name} category={name} skills={items} />
          ))}
        </div>

        {extra.length > 0 && (
          <ShowMoreButton extraCount={extra.length} onClick={() => setShowMore(true)} />
        )}
      </div>

      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--white-50)' }}>
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extra.map(({ name, items }) => (
            <SkillCategory key={name} category={name} skills={items} />
          ))}
        </div>
      </Modal>
    </SectionWrapper>
  )
}
