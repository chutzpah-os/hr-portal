'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import ShowMoreButton from '@/components/ui/ShowMoreButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { portfolioData, type Project, type ProjectCategory } from '@/data/portfolio'

type FilterKey = 'all' | ProjectCategory

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'aiml', label: 'AI / ML' },
  { key: 'softwareDevelopment', label: 'Software' },
  { key: 'dataEngineering', label: 'Data' },
  { key: 'cybersecurity', label: 'Cyber' },
  { key: 'challenges', label: 'Challenges' },
]

const CATEGORY_LABEL: Record<string, string> = {
  aiml: 'AI / ML',
  softwareDevelopment: 'Software',
  dataEngineering: 'Data',
  cybersecurity: 'Cyber',
  challenges: 'Challenges',
}

const LIMIT = 3

function getAllProjects(): Project[] {
  return Object.values(portfolioData.projects).flat()
}

function getFilteredProjects(filter: FilterKey): Project[] {
  if (filter === 'all') return getAllProjects()
  return portfolioData.projects[filter] ?? []
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: (item: Project) => void
}) {
  return (
    <div onClick={() => onClick(project)} className="portfolio-card rounded overflow-hidden">
      {/* Card visual header */}
      <div
        className={`h-44 bg-gradient-to-br ${project.gradient} flex items-end justify-start relative overflow-hidden p-4`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(240,240,250,0.08) 0%, transparent 60%)',
          }}
        />
        <span
          className="relative z-10 text-xs uppercase tracking-widest font-medium"
          style={{ color: 'var(--white-50)' }}
        >
          {CATEGORY_LABEL[project.category] ?? project.tags[0]}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="text-sm mb-2" style={{ color: 'var(--white-100)' }}>
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--white-60)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="skill-tag text-[0.65rem]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [active, setActive] = useState<Project | null>(null)
  const [showMore, setShowMore] = useState(false)

  const filtered = getFilteredProjects(filter)
  const visible = filtered.slice(0, LIMIT)
  const extra = filtered.slice(LIMIT)

  // Reset show-more when filter changes
  const handleFilter = (key: FilterKey) => {
    setFilter(key)
    setShowMore(false)
  }

  const openDetail = (item: Project) => {
    setShowMore(false)
    setActive(item)
  }

  return (
    <SectionWrapper
      id="projects"
      fullscreen={false}
      style={{ backgroundColor: 'rgba(5, 5, 5, 0.5)' }}
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="text-center mb-12" style={{ color: 'var(--white-100)' }}>
          Projects
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className="text-xs uppercase tracking-widest px-4 py-2 rounded transition-all duration-300"
              style={{
                border: `1px solid ${filter === f.key ? 'var(--white-50)' : 'var(--white-15)'}`,
                color: filter === f.key ? 'var(--white-100)' : 'var(--white-50)',
                backgroundColor: filter === f.key ? 'var(--white-10)' : 'transparent',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid — first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setActive(project)} />
          ))}
        </div>

        {extra.length > 0 && (
          <ShowMoreButton extraCount={extra.length} onClick={() => setShowMore(true)} />
        )}
      </div>

      {/* Show More modal — remaining filtered projects */}
      <Modal isOpen={showMore} onClose={() => setShowMore(false)}>
        <h2 className="text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--white-50)' }}>
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {extra.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={openDetail} />
          ))}
        </div>
      </Modal>

      {/* Detail modal */}
      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--white-100)' }}>
              {active.title}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white-80)' }}>
              {active.details.overview}
            </p>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--white-50)' }}>
              Features
            </p>
            <ul className="space-y-2 mb-6">
              {active.details.features.map((feat, i) => (
                <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--white-70)' }}>
                  <span style={{ color: 'var(--white-35)' }}>—</span>
                  {feat}
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--white-50)' }}>
              Tech Stack
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--white-70)' }}>
              {active.details.techStack}
            </p>
            {active.details.githubLink !== '#' && (
              <a
                href={active.details.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-widest transition-colors duration-200"
                style={{ color: 'var(--white-60)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-100)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-60)')}
              >
                View on GitHub →
              </a>
            )}
          </div>
        )}
      </Modal>
    </SectionWrapper>
  )
}
