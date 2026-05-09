'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Project, type ProjectCategory } from '@/data/portfolio'

type FilterKey = 'all' | ProjectCategory

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all',                 label: 'All'       },
  { key: 'aiml',                label: 'AI / ML'   },
  { key: 'softwareDevelopment', label: 'Software'  },
  { key: 'dataEngineering',     label: 'Data'      },
  { key: 'cybersecurity',       label: 'Cyber'     },
  { key: 'challenges',          label: 'Challenges'},
]

const CATEGORY_LABEL: Record<string, string> = {
  aiml:                'AI / ML',
  softwareDevelopment: 'Software',
  dataEngineering:     'Data',
  cybersecurity:       'Cyber',
  challenges:          'Challenges',
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  aiml:                'from-[#f2d0c4] to-[#D4775A]',
  softwareDevelopment: 'from-[#f2d0c4] to-[#D4775A]',
  dataEngineering:     'from-[#f2d0c4] to-[#D4775A]',
  cybersecurity:       'from-[#f2d0c4] to-[#D4775A]',
  challenges:          'from-[#f2d0c4] to-[#D4775A]',
}

const LIMIT = 3
const rotations = [-3, 4, -2, 5, -4, 3, -5, 2, -3, 4]

function getAllProjects(): Project[] {
  return Object.values(portfolioData.projects).flat()
}

function getFilteredProjects(filter: FilterKey): Project[] {
  if (filter === 'all') return getAllProjects()
  return portfolioData.projects[filter] ?? []
}

// ── Card ──────────────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  const rot = rotations[index % rotations.length]
  const gradient = CATEGORY_GRADIENTS[project.category] ?? 'from-[#f2d0c4] to-[#D4775A]'

  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
    >
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          padding: '28px 32px',
          backgroundColor: 'rgba(248,248,252,0.92)',
          border: '1px solid var(--white-10)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">

          {/* Left: text */}
          <div className="sm:w-1/2">
            <span
              className="text-[0.6rem] uppercase tracking-widest block mb-2"
              style={{ color: 'var(--white-35)' }}
            >
              {CATEGORY_LABEL[project.category]}
            </span>
            <h3
              className="mb-3 leading-tight"
              style={{
                color: 'var(--white-95)',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                fontWeight: 700,
              }}
            >
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs" style={{ color: 'var(--white-40)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
              style={{ color: 'var(--white-40)' }}
            >
              View details <span>→</span>
            </span>
          </div>

          {/* Right: tilted gradient block */}
          <div className="sm:w-[45%] relative h-[140px] sm:h-[160px]">
            <motion.div
              className={`absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
              style={{
                rotate: rot,
                boxShadow: '0 8px 24px rgba(10,10,15,0.07)',
              }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full h-full flex items-end p-4">
                <span
                  className="text-[0.55rem] uppercase tracking-widest font-medium"
                  style={{ color: 'rgba(10,10,15,0.28)' }}
                >
                  {CATEGORY_LABEL[project.category]}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.button>
  )
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Lock body scroll while open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  // Keyboard close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
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

          {/* Sliding panel — slides up from bottom */}
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
                  {CATEGORY_LABEL[project.category]}
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
                aria-label="Close"
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

                {/* Overview */}
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--white-70)' }}>
                  {project.details.overview}
                </p>

                {/* Features */}
                <p
                  className="text-[0.6rem] uppercase tracking-widest mb-3"
                  style={{ color: 'var(--white-35)' }}
                >
                  Features
                </p>
                <ul className="space-y-2 mb-8">
                  {project.details.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-65)' }}>
                      <span style={{ color: 'var(--white-30)' }}>—</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <p
                  className="text-[0.6rem] uppercase tracking-widest mb-2"
                  style={{ color: 'var(--white-35)' }}
                >
                  Tech Stack
                </p>
                <p className="text-sm mb-8" style={{ color: 'var(--white-65)' }}>
                  {project.details.techStack}
                </p>

                {/* GitHub */}
                {project.details.githubLink !== '#' && (
                  <a
                    href={project.details.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60"
                    style={{ color: 'var(--accent)' }}
                  >
                    View on GitHub →
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

  const filtered = getFilteredProjects(filter)
  const displayed = expanded ? filtered : filtered.slice(0, LIMIT)

  const handleFilter = (key: FilterKey) => {
    setFilter(key)
    setExpanded(false)
  }

  return (
    <SectionWrapper id="projects" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">

        {/* Header: section label + filters side by side */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <motion.h2
              style={{ color: 'var(--white-100)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Projects
            </motion.h2>
          </div>

          {/* Filter pills — aligned right */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilter(f.key)}
                className="text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200"
                style={{
                  border: '1px solid',
                  borderColor: filter === f.key ? 'var(--white-50)' : 'var(--white-15)',
                  color: filter === f.key ? 'var(--white-100)' : 'var(--white-45)',
                  backgroundColor: filter === f.key ? 'var(--white-10)' : 'transparent',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project count */}
        <motion.p layout className="text-xs mb-6" style={{ color: 'var(--white-30)' }}>
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Vertical list of cards */}
        <div className="flex flex-col gap-4">
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setActive(project)}
            />
          ))}
        </div>

        {/* Show all / Show less */}
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
                <><span>Show less</span><span>↑</span></>
              ) : (
                <><span>Show all {filtered.length} projects</span><span>↓</span></>
              )}
            </button>
          </motion.div>
        )}

      </div>

      {/* Detail modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </SectionWrapper>
  )
}
