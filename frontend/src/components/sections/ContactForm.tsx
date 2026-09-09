'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { getReturnUrl } from '@/lib/lpReturn'

const PHONE_REGEX = /^\+?[0-9\s\-()]{8,20}$/
const LP_URL = process.env.NEXT_PUBLIC_LP_URL || 'https://lp.hanielrolemberg.com'
const DEFAULT_RETURN_URL = 'https://www.hanielrolemberg.com'

export default function ContactForm() {
  const t = useTranslations('home')
  const locale = useLocale()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fieldError, setFieldError] = useState<string | null>(null)

  const clearTransientState = () => {
    if (status === 'error') setStatus('idle')
    if (fieldError) setFieldError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    if (!name.trim()) {
      setFieldError(t('newsletterNameError'))
      return
    }
    if (phone.trim() && !PHONE_REGEX.test(phone.trim())) {
      setFieldError(t('newsletterPhoneError'))
      return
    }
    setFieldError(null)

    setStatus('loading')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          ...(phone.trim() ? { phone: phone.trim() } : {}),
        }),
      })
      if (res.ok || res.status === 409) {
        setStatus('success')
        const params = new URLSearchParams({
          lead: email.trim().toLowerCase(),
          name: name.trim(),
          locale,
          return: getReturnUrl(DEFAULT_RETURN_URL),
        })
        setTimeout(() => {
          window.location.href = `${LP_URL}/?${params.toString()}`
        }, 900)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-sm">
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white-55)' }}>
        {t('newsletterSubtitle')}
      </p>

      {status === 'success' ? (
        <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
          {t('newsletterSuccess')}
        </p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); clearTransientState() }}
              placeholder={t('newsletterNamePlaceholder')}
              required
              disabled={status === 'loading'}
              autoComplete="name"
              className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
              style={{ border: '1px solid rgba(10,10,15,0.12)', backgroundColor: 'rgb(255,255,255)', color: 'var(--white-90)' }}
              onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
              onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearTransientState() }}
              placeholder={t('newsletterPlaceholder')}
              required
              disabled={status === 'loading'}
              autoComplete="email"
              className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
              style={{ border: '1px solid rgba(10,10,15,0.12)', backgroundColor: 'rgb(255,255,255)', color: 'var(--white-90)' }}
              onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
              onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); clearTransientState() }}
              placeholder={t('newsletterPhonePlaceholder')}
              disabled={status === 'loading'}
              autoComplete="tel"
              className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
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
              {status === 'loading' ? '...' : t('newsletterSubmit')}
            </button>
          </form>
          {fieldError && (
            <p className="text-xs mt-2" style={{ color: 'rgba(180,60,40,0.8)' }}>
              {fieldError}
            </p>
          )}
          {status === 'error' && (
            <p className="text-xs mt-2" style={{ color: 'rgba(180,60,40,0.8)' }}>
              {t('newsletterError')}
            </p>
          )}
        </>
      )}

      <p
        className="text-xs leading-relaxed mt-6 pt-5"
        style={{ color: 'var(--white-40)', borderTop: '1px solid rgba(10,10,15,0.08)' }}
      >
        {t('noSocialNote')}
      </p>
    </div>
  )
}
