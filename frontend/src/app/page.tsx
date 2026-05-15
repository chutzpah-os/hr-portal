'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/layout/Footer'

interface YTVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  channelName: string
  channelId: string
  url: string
}

type Filter = 'all' | 'haniel' | 'psf'

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'haniel', label: 'Haniel Rolemberg' },
  { key: 'psf', label: 'PSF' },
]

const CHANNEL_LINKS: Record<string, string> = {
  haniel: 'https://www.youtube.com/@hanielrolemberg',
  psf: 'https://www.youtube.com/@ProblemSolverFoundation',
}

const CHANNELS = [
  { id: 'UCzmKBWAle1KP7tOcOgi18EA', slug: 'haniel', name: 'Haniel Rolemberg' },
  { id: 'UClfUa-1qwNE8SPw30DPG8RA', slug: 'psf',    name: 'Problem Solver Foundation' },
]

async function fetchChannelVideos(channelId: string, slug: string, name: string): Promise<YTVideo[]> {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
  const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=15`
  const res = await fetch(url)
  const data = await res.json()
  if (data.status !== 'ok') return []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.items.map((item: any) => {
    const videoId = item.link.match(/v=([^&]+)/)?.[1] ?? ''
    return {
      id: videoId,
      title: item.title,
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      publishedAt: item.pubDate,
      channelName: name,
      channelId: slug,
      url: item.link,
    }
  })
}

function FeaturedContent() {
  const [videos, setVideos] = useState<YTVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<Filter>('all')
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Promise.all(CHANNELS.map((ch) => fetchChannelVideos(ch.id, ch.slug, ch.name)))
      .then((results) => {
        const merged: YTVideo[] = []
        const max = Math.max(...results.map((r) => r.length))
        for (let i = 0; i < max; i++) {
          for (const list of results) { if (list[i]) merged.push(list[i]) }
        }
        setVideos(merged)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0
  }, [filter])

  const displayed = filter === 'all' ? videos : videos.filter((v) => v.channelId === filter)

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('[data-card]') as HTMLElement
    const amount = card ? card.offsetWidth + 16 : 280
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  const channelLink = filter === 'all' ? null : CHANNEL_LINKS[filter]

  return (
    <section style={{ borderTop: '1px solid rgba(10,10,15,0.08)' }}>
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.22em] mb-1 font-medium" style={{ color: 'var(--white-35)' }}>
              Featured Content
            </p>
            <h2
              className="font-bold leading-tight"
              style={{ color: 'var(--white-90)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', letterSpacing: '-0.02em', fontFamily: 'var(--font-syne)' }}
            >
              Videos
            </h2>
          </div>

          {/* Filters + arrows */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex gap-1">
              {FILTERS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className="text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
                  style={filter === key ? {
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                  } : {
                    border: '1px solid rgba(10,10,15,0.12)',
                    color: 'var(--white-50)',
                    backgroundColor: 'transparent',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
                style={{ border: '1px solid rgba(10,10,15,0.12)', color: 'var(--white-55)', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,10,15,0.12)'; e.currentTarget.style.color = 'var(--white-55)' }}
                aria-label="Scroll left"
              >←</button>
              <button
                onClick={() => scroll('right')}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
                style={{ border: '1px solid rgba(10,10,15,0.12)', color: 'var(--white-55)', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,10,15,0.12)'; e.currentTarget.style.color = 'var(--white-55)' }}
                aria-label="Scroll right"
              >→</button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        {loading ? (
          <div className="flex gap-4 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="shrink-0 rounded-2xl animate-pulse" style={{ width: '260px', height: '188px', backgroundColor: 'rgba(10,10,15,0.06)' }} />
            ))}
          </div>
        ) : (
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayed.map((video) => (
              <a
                key={video.id}
                data-card
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group rounded-2xl overflow-hidden transition-all duration-200"
                style={{ width: '260px', scrollSnapAlign: 'start', border: '1px solid rgba(10,10,15,0.07)', backgroundColor: 'rgba(10,10,15,0.02)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,119,90,0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,10,15,0.07)' }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image src={video.thumbnail} alt={video.title} fill sizes="260px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: 'rgba(10,10,15,0.35)' }}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: 'var(--accent)' }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="white"><path d="M4 2l10 6-10 6V2z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-3">
                  <p className="text-[0.55rem] uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent)' }}>
                    {video.channelName}
                  </p>
                  <p className="text-xs font-medium leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ color: 'var(--white-85)' }}>
                    {video.title}
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-widest mt-2" style={{ color: 'var(--white-35)' }}>
                    {new Date(video.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {channelLink && (
          <div className="mt-6 flex justify-end">
            <a href={channelLink} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60" style={{ color: 'var(--accent)' }}>
              View all videos →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok || res.status === 409) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <main
        style={{
          paddingTop: '5.5rem',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <section
          className="flex-1 flex flex-col max-w-content mx-auto px-6 md:px-10 py-10 md:py-14 w-full"
        >

          {/* Two columns */}
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 items-start flex-1 mb-10 md:mb-12">

            {/* Left — bio */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <h1
                className="mb-2 font-bold leading-tight"
                style={{
                  color: 'var(--white-100)',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  letterSpacing: '-0.03em',
                  fontFamily: 'var(--font-syne)',
                }}
              >
                Haniel Rolemberg
              </h1>
              <p
                className="mb-8 text-xs uppercase tracking-widest"
                style={{ color: 'var(--accent)' }}
              >
                Problem Solver
              </p>

              <div className="space-y-5 max-w-xl">
                <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                  Cancer has been part of my family for as long as I can remember — uncles, aunts,
                  cousins, all fighting it at different points. At 16, my father was diagnosed with
                  skin cancer. I didn&apos;t know then that survival depended so heavily on the type.
                  To me, cancer meant one thing. That misunderstanding hit like a reset: a sudden
                  urgency to live fully, to act, and to dedicate myself to problems that actually
                  matter.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                  That urgency pushed me across fields — public policy, software engineering, data
                  systems, cybersecurity, AI/ML. Not because I was chasing credentials, but because
                  the hardest problems don&apos;t fit inside one discipline.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                  It also led me to build the{' '}
                  <a
                    href="https://problemsolverfoundation.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{
                      color: 'var(--white-90)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    Problem Solver Foundation
                  </a>
                  {' '}— a community that connects people across borders to solve real-world problems
                  using technology and science. My mission:{' '}
                  <span style={{ color: 'var(--white-50)' }}>impact one billion lives by 2035</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <a
                  href="https://calendly.com/hanielrolemberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200"
                  style={{ border: '1px solid rgba(10,10,15,0.15)', color: 'var(--white-65)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(10,10,15,0.15)'
                    e.currentTarget.style.color = 'var(--white-65)'
                  }}
                >
                  Book a Call
                </a>
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200"
                  style={{ color: 'var(--white-45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-80)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-45)')}
                >
                  About me →
                </Link>
              </div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              className="flex-shrink-0 self-center md:self-start mx-auto md:mx-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
              style={{
                width: 'min(80vw, 300px)',
                height: 'clamp(240px, 34vw, 390px)',
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(10,10,15,0.10), 0 4px 16px rgba(10,10,15,0.06)',
              }}
            >
              <Image
                src="/images/haniel-palestra.jpg"
                alt="Haniel Rolemberg speaking at a conference"
                fill
                sizes="(max-width: 768px) 90vw, 320px"
                quality={85}
                className="object-cover object-top"
                priority
              />
            </motion.div>

          </div>

          {/* Newsletter — same scroll, centered */}
          <motion.div
            className="mx-auto text-center"
            style={{
              maxWidth: '480px',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(10,10,15,0.08)',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <p
              className="text-[0.6rem] uppercase tracking-[0.22em] mb-3 font-medium"
              style={{ color: 'var(--white-35)' }}
            >
              Newsletter
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--white-55)' }}>
              Occasional notes on cybersecurity, deep work, and what I&apos;m building.
              No spam — just signal.
            </p>

            {status === 'success' ? (
              <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                You&apos;re in. I&apos;ll be in touch.
              </p>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                    className="flex-1 text-sm px-4 py-2.5 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 disabled:opacity-50"
                    style={{
                      border: '1px solid rgba(10,10,15,0.12)',
                      backgroundColor: 'rgba(10,10,15,0.03)',
                      color: 'var(--white-90)',
                    }}
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
                    {status === 'loading' ? '...' : 'Subscribe'}
                  </button>
                </form>
                {status === 'error' && (
                  <p className="text-xs mt-2" style={{ color: 'rgba(180,60,40,0.8)' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </>
            )}
          </motion.div>

        </section>

        <FeaturedContent />
      </main>

      <Footer />
    </>
  )
}
