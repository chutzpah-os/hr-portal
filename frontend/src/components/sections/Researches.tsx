import { portfolioData } from '@/data/portfolio'
import { AREA_LABELS } from '@/utils/cvAreaMap'

export default function ResearchesSection() {
  const { researches } = portfolioData

  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
      <h2 className="mb-10" style={{ color: 'var(--white-100)' }}>
        Researches
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researches.map((research) => (
          <div
            key={research.id}
            className="rounded p-6 flex flex-col gap-4"
            style={{
              border: '1px solid var(--white-15)',
              backgroundColor: 'rgba(5, 5, 5, 0.9)',
            }}
          >
            {/* Status + area tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: 'var(--white-40)',
                  border: '1px solid var(--white-10)',
                }}
              >
                {research.status}
              </span>
              {research.cvAreas.map((area) => (
                <span
                  key={area}
                  className="text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    color: 'var(--white-35)',
                    border: '1px solid var(--white-10)',
                  }}
                >
                  {AREA_LABELS[area]}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3
              className="text-sm font-semibold leading-snug"
              style={{ color: 'var(--white-90)' }}
            >
              {research.title}
            </h3>

            {/* Field */}
            <p
              className="text-[0.7rem] uppercase tracking-widest"
              style={{ color: 'var(--white-35)' }}
            >
              {research.field}
            </p>

            {/* Description */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--white-55)' } as React.CSSProperties}
            >
              {research.description}
            </p>

            {/* Link (when available) */}
            {research.link && (
              <a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest transition-colors duration-200 mt-auto"
                style={{ color: 'var(--white-60)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-90)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-60)')}
              >
                View publication →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
