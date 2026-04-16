'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(0,0,0)',
        color: 'rgba(240,240,250,0.8)',
        fontFamily: 'sans-serif',
        gap: '16px',
      }}
    >
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        Something went wrong
      </p>
      <button
        onClick={reset}
        style={{
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '8px 20px',
          border: '1px solid rgba(240,240,250,0.35)',
          background: 'transparent',
          color: 'rgba(240,240,250,0.6)',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  )
}
