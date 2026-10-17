'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function NewsletterSignup() {
  const t = useTranslations('newsletterSignup')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return
    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      setStatus(res.ok || res.status === 409 ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="w-full" style={{ backgroundColor: 'var(--accent-dim)' }}>
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-md">
          <p className="mb-2 text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            {t('label')}
          </p>
          <h2
            className="mb-1 font-bold leading-tight"
            style={{ color: 'var(--white-100)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', letterSpacing: '-0.02em', fontFamily: 'var(--font-syne)' }}
          >
            {t('title')}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--white-55)' }}>
            {t('body')}
          </p>
        </div>

        {status === 'success' ? (
          <p className="text-sm font-medium shrink-0" style={{ color: 'var(--accent)' }}>
            {t('success')}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
              placeholder={t('emailPlaceholder')}
              disabled={status === 'loading'}
              autoComplete="email"
              className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:text-[rgba(10,10,15,0.45)] disabled:opacity-50 sm:w-64"
              style={{ border: '1px solid rgba(10,10,15,0.12)', backgroundColor: 'rgb(255,255,255)', color: 'var(--white-90)' }}
              onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
              onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
            />
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
          </form>
        )}
      </div>
      {status === 'error' && (
        <div className="max-w-content mx-auto px-6 md:px-10 pb-6 -mt-4">
          <p className="text-xs" style={{ color: 'rgba(180,60,40,0.8)' }}>{t('error')}</p>
        </div>
      )}
    </section>
  )
}
