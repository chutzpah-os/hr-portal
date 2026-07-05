'use client'

import { useState } from 'react'
import type { ChallengeVideo } from '@/data/challenges'

function VideoCard({ video }: { video: ChallengeVideo }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(10,10,15,0.07)', aspectRatio: '16/9', position: 'relative', backgroundColor: 'rgba(10,10,15,0.03)' }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center group"
          aria-label={`Play ${video.title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.35)', transition: 'background-color 0.2s' }}
          />
          <div
            className="relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
            style={{ backgroundColor: 'rgba(212,119,90,0.9)', backdropFilter: 'blur(4px)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
          <div
            className="absolute bottom-3 left-3 right-3 flex items-center justify-between"
          >
            <span
              className="text-[0.5rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {video.lang}
            </span>
            <span
              className="text-[0.45rem] uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              {video.title}
            </span>
          </div>
        </button>
      )}
    </div>
  )
}

export default function VideoGrid({
  videos,
  locale,
}: {
  videos: ChallengeVideo[]
  locale: string
}) {
  const ordered = locale === 'pt'
    ? [...videos].sort((a, b) => (a.lang === 'pt' ? -1 : b.lang === 'pt' ? 1 : 0))
    : [...videos].sort((a, b) => (a.lang === 'en' ? -1 : b.lang === 'en' ? 1 : 0))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {ordered.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  )
}
