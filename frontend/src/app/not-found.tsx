import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255,255,255)',
        color: 'rgba(10,10,15,0.8)',
        fontFamily: 'sans-serif',
        gap: '16px',
      }}
    >
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        404 — Page not found
      </p>
      <Link
        href="/"
        style={{
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(10,10,15,0.5)',
        }}
      >
        Go home
      </Link>
    </div>
  )
}
