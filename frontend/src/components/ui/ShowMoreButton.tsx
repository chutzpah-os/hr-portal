'use client'

interface ShowMoreButtonProps {
  extraCount: number
  onClick: () => void
}

export default function ShowMoreButton({ extraCount, onClick }: ShowMoreButtonProps) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="flex items-center gap-2 text-xs uppercase tracking-widest transition-colors duration-300 group"
        style={{ color: 'var(--white-40)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-90)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-40)')}
      >
        <span>
          See More (+{extraCount})
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform duration-300 group-hover:translate-y-0.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}
