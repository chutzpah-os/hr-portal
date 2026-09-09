'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as LocaleLink } from '@/navigation'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { saveReturnUrl } from '@/lib/lpReturn'

interface YTVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  channelName: string
  channelId: string
  url: string
}

const PSF_CHANNEL_LINK = 'https://www.youtube.com/@ProblemSolverFoundation'

const VIDEOS: YTVideo[] = [
  {
    id: 'P24KDOH8mNI',
    title: 'One Billion People Can Solve This | The 2035 Plan',
    thumbnail: 'https://i.ytimg.com/vi/P24KDOH8mNI/hqdefault.jpg',
    publishedAt: '',
    channelName: 'Problem Solver Foundation',
    channelId: 'psf',
    url: 'https://www.youtube.com/watch?v=P24KDOH8mNI',
  },
  {
    id: 'FYU0XuAOmcM',
    title: 'How R&D in Israel Actually Works: Startups, Multinationals & the Innovation Authority',
    thumbnail: 'https://i.ytimg.com/vi/FYU0XuAOmcM/hqdefault.jpg',
    publishedAt: '',
    channelName: 'Problem Solver Foundation',
    channelId: 'psf',
    url: 'https://www.youtube.com/watch?v=FYU0XuAOmcM',
  },
]

function FeaturedContent() {
  const t = useTranslations('home')
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('[data-card]') as HTMLElement
    const amount = card ? card.offsetWidth + 16 : 280
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section style={{ borderTop: '1px solid rgba(10,10,15,0.08)' }}>
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.22em] mb-1 font-medium" style={{ color: 'var(--white-35)' }}>
              {t('featuredContent')}
            </p>
            <h2
              className="font-bold leading-tight"
              style={{ color: 'var(--white-90)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', letterSpacing: '-0.02em', fontFamily: 'var(--font-syne)' }}
            >
              {t('videos')}
            </h2>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
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

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {VIDEOS.map((video) => (
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
                {video.publishedAt && (
                  <p className="text-[0.6rem] uppercase tracking-widest mt-2" style={{ color: 'var(--white-35)' }}>
                    {new Date(video.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <a href={PSF_CHANNEL_LINK} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-60" style={{ color: 'var(--accent)' }}>
            {t('viewAllVideos')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const t = useTranslations('home')

  return (
    <>
      <main style={{ paddingTop: '5.5rem', minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>
        <section className="flex-1 flex flex-col max-w-content mx-auto px-6 md:px-10 py-10 md:py-14 w-full">
          <motion.div
            className="max-w-xl w-full mx-auto flex-1 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <h1
              className="mb-2 font-bold leading-tight"
              style={{ color: 'var(--white-100)', fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', fontFamily: 'var(--font-syne)' }}
            >
              Haniel Rolemberg
            </h1>
            <p className="mb-8 text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
              {t('tagline')}
            </p>

            <div className="space-y-5 max-w-xl">
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>{t('bio1')}</p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>{t('bio2')}</p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                {t.rich('bio3', {
                  psf: (chunks) => (
                    <a
                      href="https://problemsolverfoundation.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{ color: 'var(--white-90)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      {chunks}
                    </a>
                  ),
                  mission: (chunks) => <span style={{ color: 'var(--white-50)' }}>{chunks}</span>,
                })}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <LocaleLink
                href="/contact"
                onClick={saveReturnUrl}
                className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200"
                style={{ border: '1px solid rgba(10,10,15,0.15)', color: 'var(--white-65)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,10,15,0.15)'; e.currentTarget.style.color = 'var(--white-65)' }}
              >
                {t('bookCall')}
              </LocaleLink>
              <Link
                href="/about"
                className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200"
                style={{ color: 'var(--white-45)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-80)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-45)')}
              >
                {t('aboutLink')}
              </Link>
            </div>
          </motion.div>
        </section>

        <FeaturedContent />
      </main>
    </>
  )
}
