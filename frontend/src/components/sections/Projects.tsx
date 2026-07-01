'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { getPortfolioData, type PortfolioData, type Project, type ProjectCategory } from '@/data/portfolio'
import { getUiStrings } from '@/i18n/uiStrings'

type FilterKey = 'all' | ProjectCategory

const LIMIT = 5

function getAllProjects(portfolioData: PortfolioData): Project[] {
  return Object.values(portfolioData.projects).flat()
}

function getFilteredProjects(portfolioData: PortfolioData, filter: FilterKey): Project[] {
  if (filter === 'all') return getAllProjects(portfolioData)
  return portfolioData.projects[filter] ?? []
}

// ── Row ───────────────────────────────────────────────────────────────────────
function ProjectRow({
  project,
  index,
  onClick,
  isLast,
  locale,
}: {
  project: Project
  index: number
  onClick: () => void
  isLast: boolean
  locale: string
}) {
  const ui = getUiStrings(locale)
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left group"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      <div
        className="flex items-center gap-5 py-5"
        style={{ borderBottom: isLast ? 'none' : '1px solid rgba(10,10,15,0.07)' }}
      >
        {/* Image / fallback */}
        <div
          className="shrink-0 rounded-lg overflow-hidden"
          style={{ width: '52px', height: '52px', backgroundColor: 'rgba(212,119,90,0.10)' }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={52}
              height={52}
              quality={75}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[0.6rem] font-semibold uppercase text-center px-1" style={{ color: 'var(--accent)' }}>
                {ui.projectCategoryLabel[project.category].slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3
            className="leading-snug mb-1.5 transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{
              color: 'var(--white-90)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              fontWeight: 600,
            }}
          >
            {project.title}
          </h3>
          <span
            className="text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{
              color: 'var(--accent)',
              backgroundColor: 'var(--accent-dim)',
              letterSpacing: '0.15em',
            }}
          >
            {ui.projectCategoryLabel[project.category]}
          </span>
        </div>

        {/* Arrow */}
        <span
          className="shrink-0 text-base opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
          style={{ color: 'var(--accent)' }}
        >
          →
        </span>
      </div>
    </motion.button>
  )
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({
  project,
  onClose,
  locale,
}: {
  project: Project | null
  onClose: () => void
  locale: string
}) {
  const ui = getUiStrings(locale)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
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
            {/* Top bar */}
            <div
              className="flex items-start justify-between px-6 py-5 shrink-0"
              style={{
                borderBottom: '1px solid rgba(10,10,15,0.08)',
                backgroundColor: 'rgb(248,248,252)',
              }}
            >
              <div className="pr-4 min-w-0">
                <span
                  className="text-[0.6rem] uppercase tracking-widest block mb-1"
                  style={{ color: 'var(--white-35)' }}
                >
                  {ui.projectCategoryLabel[project.category]}
                </span>
                <h2
                  className="font-bold leading-tight mb-1.5"
                  style={{
                    color: 'var(--white-100)',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
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
                  {project.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 text-xl font-light"
                style={{
                  backgroundColor: 'rgba(10,10,15,0.08)',
                  color: 'var(--white-60)',
                }}
                aria-label={ui.close}
              >
                ×
              </button>
            </div>

            {/* Tags strip */}
            <div
              className="flex flex-wrap gap-2 px-6 py-3 shrink-0"
              style={{ borderBottom: '1px solid rgba(10,10,15,0.06)' }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    color: 'var(--white-50)',
                    border: '1px solid var(--white-10)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Scrollable body */}
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
                  {project.details.overview}
                </p>

                <p
                  className="text-[0.6rem] uppercase tracking-widest mb-3"
                  style={{ color: 'var(--white-35)' }}
                >
                  {ui.features}
                </p>
                <ul className="space-y-2 mb-8">
                  {project.details.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                      <span style={{ color: 'var(--white-30)' }}>—</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <p
                  className="text-[0.6rem] uppercase tracking-widest mb-2"
                  style={{ color: 'var(--white-35)' }}
                >
                  {ui.techStack}
                </p>
                <p className="text-sm mb-8" style={{ color: 'var(--white-65)' }}>
                  {project.details.techStack}
                </p>

                {project.details.githubLink !== '#' && (
                  <a
                    href={project.details.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60"
                    style={{ color: 'var(--accent)' }}
                  >
                    {ui.viewOnGitHub}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [active, setActive] = useState<Project | null>(null)
  const [expanded, setExpanded] = useState(false)
  const locale = useLocale()
  const ui = getUiStrings(locale)
  const portfolioData = getPortfolioData(locale)

  const filtered = getFilteredProjects(portfolioData, filter)
  const displayed = expanded ? filtered : filtered.slice(0, LIMIT)

  const handleFilter = (key: FilterKey) => {
    setFilter(key)
    setExpanded(false)
  }

  return (
    <section id="projects">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-10 pb-14">

        {/* Header: label + filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <motion.p
            className="text-[0.6rem] uppercase tracking-[0.22em] font-medium shrink-0"
            style={{ color: 'var(--white-35)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {ui.projects}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {ui.projectFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilter(f.key as FilterKey)}
                className="text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200"
                style={{
                  border: '1px solid',
                  borderColor: filter === f.key ? 'var(--accent)' : 'var(--white-15)',
                  color: filter === f.key ? 'var(--accent)' : 'var(--white-45)',
                  backgroundColor: filter === f.key ? 'var(--accent-dim)' : 'transparent',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rows */}
        <div
          className="rounded-2xl"
          style={{
            border: '1px solid var(--white-10)',
            backgroundColor: 'rgba(10,10,15,0.025)',
            padding: '0 28px',
          }}
        >
          {displayed.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              isLast={i === displayed.length - 1}
              onClick={() => setActive(project)}
              locale={locale}
            />
          ))}
        </div>

        {filtered.length > LIMIT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-xs uppercase tracking-widest flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
              style={{ color: 'var(--accent)' }}
            >
              {expanded ? (
                <><span>{ui.showLess}</span><span>↑</span></>
              ) : (
                <><span>{ui.showAllProjects(filtered.length)}</span><span>↓</span></>
              )}
            </button>
          </motion.div>
        )}

      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} locale={locale} />
    </section>
  )
}
