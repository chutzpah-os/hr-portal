'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from 'next-intl'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getPortfolioData, type Education } from '@/data/portfolio'

const LIMIT = 3

function EducationTimelineItem({
  edu,
  index,
  isLast,
  onClick,
  isPt,
}: {
  edu: Education
  index: number
  isLast: boolean
  onClick: () => void
  isPt: boolean
}) {
  return (
    <motion.div
      className="flex gap-5"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center shrink-0" style={{ width: '20px' }}>
        <div
          className="rounded-full shrink-0"
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: 'var(--accent)',
            marginTop: '5px',
            boxShadow: '0 0 0 3px rgba(212,119,90,0.15)',
          }}
        />
        {!isLast && (
          <div
            className="flex-1 mt-2"
            style={{ width: '1px', backgroundColor: 'rgba(10,10,15,0.1)', minHeight: '32px' }}
          />
        )}
      </div>

      {/* Content */}
      <button
        onClick={onClick}
        className="group text-left pb-8 w-full"
      >
        <p
          className="text-[0.58rem] uppercase tracking-widest mb-1"
          style={{ color: 'var(--white-35)' }}
        >
          {edu.period}
        </p>
        <h3
          className="leading-snug mb-1 transition-colors duration-200"
          style={{
            color: 'var(--white-90)',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
            fontWeight: 600,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--white-90)' }}
        >
          {edu.title}
        </h3>
        <p className="text-xs" style={{ color: 'var(--white-45)' }}>
          {edu.institution}
        </p>
        <span
          className="inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: 'var(--accent)' }}
        >
          {isPt ? 'Ver detalhes →' : 'View details →'}
        </span>
      </button>
    </motion.div>
  )
}

function EducationModal({
  edu,
  onClose,
  isPt,
}: {
  edu: Education | null
  onClose: () => void
  isPt: boolean
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (edu) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [edu])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {edu && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(10,10,15,0.22)', backdropFilter: 'blur(3px)' }}
            onClick={onClose}
          />

          <motion.div
            key="panel"
            initial={{ y: '100%', opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed flex flex-col rounded-3xl overflow-hidden"
            style={{
              top: 72,
              left: 8,
              right: 8,
              bottom: 16,
              zIndex: 50,
              backgroundColor: 'rgb(248,248,252)',
            }}
          >
            <div
              className="flex items-start justify-between px-6 py-5 shrink-0"
              style={{ borderBottom: '1px solid rgba(10,10,15,0.08)', backgroundColor: 'rgb(248,248,252)' }}
            >
              <div className="pr-4 min-w-0">
                <span
                  className="text-[0.6rem] uppercase tracking-widest block mb-1"
                  style={{ color: 'var(--white-35)' }}
                >
                  {edu.institution} · {edu.period}
                </span>
                <h2
                  className="font-bold leading-tight mb-1.5"
                  style={{
                    color: 'var(--white-100)',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {edu.title}
                </h2>
                <p
                  className="text-sm leading-snug"
                  style={{
                    color: 'var(--white-55)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  } as React.CSSProperties}
                >
                  {edu.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 text-xl font-light"
                style={{ backgroundColor: 'rgba(10,10,15,0.08)', color: 'var(--white-60)' }}
                aria-label={isPt ? 'Fechar' : 'Close'}
              >
                ×
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
              style={{ touchAction: 'pan-y' } as React.CSSProperties}
              onWheel={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="px-6 sm:px-10 py-8 max-w-2xl mx-auto w-full">
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--white-70)' }}>
                  {edu.details.overview}
                </p>

                {edu.details.gpa && (
                  <p className="text-sm mb-8" style={{ color: 'var(--white-70)' }}>
                    <span className="text-[0.6rem] uppercase tracking-widest mr-2" style={{ color: 'var(--white-35)' }}>
                      {isPt ? 'CRA' : 'GPA'}
                    </span>
                    {edu.details.gpa}
                  </p>
                )}

                {edu.details.keyAreas && (
                  <>
                    <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                      {isPt ? 'Principais Áreas de Foco' : 'Key Focus Areas'}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {edu.details.keyAreas.map((area, i) => (
                        <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                          <span style={{ color: 'var(--white-30)' }}>—</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {edu.details.keyCourses && (
                  <>
                    <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                      {isPt ? 'Principais Disciplinas' : 'Key Courses'}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {edu.details.keyCourses.map((course, i) => (
                        <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                          <span style={{ color: 'var(--white-30)' }}>—</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {edu.details.skillsDeveloped && (
                  <>
                    <p className="text-[0.6rem] uppercase tracking-widest mb-3" style={{ color: 'var(--white-35)' }}>
                      {isPt ? 'Habilidades Desenvolvidas' : 'Skills Developed'}
                    </p>
                    <ul className="space-y-2">
                      {edu.details.skillsDeveloped.map((skill, i) => (
                        <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                          <span style={{ color: 'var(--white-30)' }}>—</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function TimelineGroup({
  items,
  label,
  onItemClick,
  isPt,
}: {
  items: Education[]
  label: string
  onItemClick: (edu: Education) => void
  isPt: boolean
}) {
  return (
    <div className="mb-10">
      <motion.p
        className="text-[0.6rem] uppercase tracking-widest mb-6"
        style={{ color: 'var(--white-35)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {label}
      </motion.p>
      <div>
        {items.map((edu, i) => (
          <EducationTimelineItem
            key={edu.id}
            edu={edu}
            index={i}
            isLast={i === items.length - 1}
            onClick={() => onItemClick(edu)}
            isPt={isPt}
          />
        ))}
      </div>
    </div>
  )
}

export default function EducationSection() {
  const [active, setActive] = useState<Education | null>(null)
  const locale = useLocale()
  const isPt = locale === 'pt'
  const portfolioData = getPortfolioData(locale)

  const all = portfolioData.education
  const degrees = all.filter((e) => e.type === 'degree')
  const courses = all.filter((e) => e.type === 'course' || !e.type)

  return (
    <SectionWrapper id="education" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.p
          className="section-label mb-10"
          style={{ color: 'var(--white-45)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {isPt ? 'Formação Acadêmica' : 'Academic Background'}
        </motion.p>

        <div className="max-w-lg">
          {degrees.length > 0 && (
            <TimelineGroup items={degrees} label={isPt ? 'Graduações' : 'Degrees'} onItemClick={setActive} isPt={isPt} />
          )}
          {courses.length > 0 && (
            <TimelineGroup items={courses} label={isPt ? 'Cursos & Programas' : 'Courses & Programs'} onItemClick={setActive} isPt={isPt} />
          )}
        </div>
      </div>

      <EducationModal edu={active} onClose={() => setActive(null)} isPt={isPt} />
    </SectionWrapper>
  )
}
