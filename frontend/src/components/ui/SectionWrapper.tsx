import type { ReactNode, CSSProperties } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  backgroundImage?: string
  backgroundGradient?: string
  className?: string
  fullscreen?: boolean
  style?: CSSProperties
}

export default function SectionWrapper({
  id,
  children,
  backgroundImage,
  backgroundGradient,
  className = '',
  fullscreen = true,
  style,
}: SectionWrapperProps) {
  const bgStyle: CSSProperties = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : backgroundGradient
      ? { background: backgroundGradient }
      : {}

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${fullscreen ? 'section-fullscreen' : 'py-20'} ${className}`}
      style={{ ...bgStyle, ...style }}
    >
      {/* Overlay for readability over background images */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--black-80)', zIndex: 1 }}
        />
      )}

      {/* Content layer */}
      <div className="relative section-content">{children}</div>
    </section>
  )
}
