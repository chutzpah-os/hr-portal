import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100svh',
        backgroundColor: 'rgb(255,255,255)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot-grid texture */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(10,10,15,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '480px' }}>
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            fontWeight: 500,
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            color: 'var(--white-100)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}
        >
          Page not found.
        </h1>

        <p
          style={{
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: 'var(--white-50)',
            marginBottom: '2.5rem',
          }}
        >
          This URL doesn&apos;t exist. It may have been removed, moved, or never existed in the first place.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              padding: '0.625rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--accent)',
              color: 'rgb(255,255,255)',
              textDecoration: 'none',
            }}
          >
            Go home
          </Link>
          <Link
            href="/solutions"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              padding: '0.625rem 1.25rem',
              borderRadius: '9999px',
              border: '1px solid rgba(10,10,15,0.12)',
              color: 'var(--white-60)',
              textDecoration: 'none',
            }}
          >
            Solutions
          </Link>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              padding: '0.625rem 1.25rem',
              borderRadius: '9999px',
              border: '1px solid rgba(10,10,15,0.12)',
              color: 'var(--white-60)',
              textDecoration: 'none',
            }}
          >
            Blog
          </Link>
        </div>
      </div>
    </main>
  )
}
