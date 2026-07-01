'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getPortfolioData } from '@/data/portfolio'

// Indexed by skill category position (locale-invariant, since category
// labels are translated in portfolio.pt.ts and can't be used as keys).
const ACCENT_BY_INDEX = [
  '#D4775A', // Programming Languages
  '#c9a96e', // Web/Mobile Development
  '#a78bfa', // AI / ML
  '#fb923c', // Data Engineering
  '#fb923c', // Databases
  '#D4775A', // Cybersecurity & Network
  '#60a5fa', // Cloud & DevOps
]

function SkillRow({
  name,
  items,
  index,
}: {
  name: string
  items: string[]
  index: number
}) {
  const accent = ACCENT_BY_INDEX[index] ?? '#D4775A'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-6"
      style={{ borderTop: '1px solid rgba(10,10,15,0.07)' }}
    >
      {/* Category label */}
      <div className="sm:w-48 flex-shrink-0 flex items-center gap-2.5 pt-0.5">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: accent, boxShadow: `0 0 6px ${accent}60` }}
        />
        <span
          className="text-[0.6rem] uppercase tracking-widest font-semibold leading-snug"
          style={{ color: 'rgba(10,10,15,0.50)' }}
        >
          {name}
        </span>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="text-[0.65rem] uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              border: `1px solid ${accent}55`,
              color: accent,
              backgroundColor: `${accent}0d`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const locale = useLocale()
  const portfolioData = getPortfolioData(locale)

  return (
    <SectionWrapper id="skills" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.p
          className="section-label mb-10"
          style={{ color: 'var(--white-45)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {locale === 'pt' ? 'Habilidades' : 'Skills'}
        </motion.p>

        <div>
          {portfolioData.skills.map(({ name, items }, i) => (
            <SkillRow key={name} name={name} items={items} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
