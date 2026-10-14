'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface Challenge {
  a: number
  b: number
  token: string
}

const inputStyle = {
  border: '1px solid rgba(10,10,15,0.12)',
  backgroundColor: 'rgb(255,255,255)',
  color: 'var(--white-90)',
}

export default function AccessGateForm({ onGranted }: { onGranted: () => void }) {
  const t = useTranslations('accessGate')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [connection, setConnection] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [answer, setAnswer] = useState('')
  const [notRobot, setNotRobot] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [fieldError, setFieldError] = useState<string | null>(null)

  const fetchChallenge = async () => {
    try {
      const res = await fetch('/api/access-challenge')
      const data = await res.json()
      setChallenge(data)
    } catch {
      setChallenge(null)
    }
  }

  useEffect(() => {
    fetchChallenge()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    if (!name.trim() || !email.trim() || !location.trim() || !connection.trim() || !linkedin.trim() || !answer.trim()) {
      setFieldError(t('fieldError'))
      return
    }
    if (!notRobot || !challenge) {
      setFieldError(t('fieldError'))
      return
    }
    setFieldError(null)
    setStatus('loading')

    try {
      const res = await fetch('/api/access-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          location: location.trim(),
          connection: connection.trim(),
          linkedin: linkedin.trim(),
          answer: Number(answer),
          token: challenge.token,
          honeypot,
        }),
      })

      if (res.ok) {
        onGranted()
        return
      }

      setStatus('error')
      setAnswer('')
      setNotRobot(false)
      await fetchChallenge()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-full">
      {/* Honeypot — hidden from real visitors, left for bots that auto-fill generic fields */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
      />

      <input
        type="text"
        value={name}
        onChange={(e) => { setName(e.target.value); setFieldError(null) }}
        placeholder={t('namePlaceholder')}
        disabled={status === 'loading'}
        autoComplete="name"
        className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
        onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setFieldError(null) }}
        placeholder={t('emailPlaceholder')}
        disabled={status === 'loading'}
        autoComplete="email"
        className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
        onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
      />
      <input
        type="text"
        value={location}
        onChange={(e) => { setLocation(e.target.value); setFieldError(null) }}
        placeholder={t('locationPlaceholder')}
        disabled={status === 'loading'}
        autoComplete="off"
        className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
        onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
      />
      <input
        type="text"
        value={connection}
        onChange={(e) => { setConnection(e.target.value); setFieldError(null) }}
        placeholder={t('connectionPlaceholder')}
        disabled={status === 'loading'}
        autoComplete="off"
        className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
        onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
      />
      <input
        type="text"
        value={linkedin}
        onChange={(e) => { setLinkedin(e.target.value); setFieldError(null) }}
        placeholder={t('linkedinPlaceholder')}
        disabled={status === 'loading'}
        autoComplete="off"
        className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
        onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
      />

      {challenge && (
        <div className="flex items-center gap-2">
          <label className="text-sm shrink-0" style={{ color: 'var(--white-65)' }}>
            {t('challengeQuestion', { a: challenge.a, b: challenge.b })}
          </label>
          <input
            type="number"
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); setFieldError(null) }}
            disabled={status === 'loading'}
            className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 w-20 disabled:opacity-50"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
            onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
          />
        </div>
      )}

      <label className="flex items-center gap-2 text-sm cursor-pointer select-none" style={{ color: 'var(--white-65)' }}>
        <input
          type="checkbox"
          checked={notRobot}
          onChange={(e) => { setNotRobot(e.target.checked); setFieldError(null) }}
          disabled={status === 'loading'}
        />
        {t('notRobot')}
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap disabled:opacity-60"
        style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {status === 'loading' ? t('submitting') : t('submit')}
      </button>

      {fieldError && (
        <p className="text-xs" style={{ color: 'rgba(180,60,40,0.8)' }}>{fieldError}</p>
      )}
      {status === 'error' && !fieldError && (
        <p className="text-xs" style={{ color: 'rgba(180,60,40,0.8)' }}>{t('submitError')}</p>
      )}
    </form>
  )
}
