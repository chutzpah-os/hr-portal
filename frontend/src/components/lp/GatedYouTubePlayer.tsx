'use client'

import { useEffect, useId, useRef, useState } from 'react'

declare global {
  interface Window {
    YT?: {
      Player: new (elementId: string, options: Record<string, unknown>) => YTPlayer
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

interface YTPlayer {
  playVideo: () => void
  pauseVideo: () => void
  destroy: () => void
}

interface YTStateChangeEvent {
  data: number
}

const YT_PLAYING_STATE = 1

function extractVideoId(url: string): string {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/)
  return match ? match[1] : ''
}

let apiLoadPromise: Promise<void> | null = null
function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve()
  if (apiLoadPromise) return apiLoadPromise
  apiLoadPromise = new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    if (!document.getElementById('youtube-iframe-api')) {
      const script = document.createElement('script')
      script.id = 'youtube-iframe-api'
      script.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(script)
    }
  })
  return apiLoadPromise
}

interface GatedYouTubePlayerProps {
  videoUrl: string
}

// Fully chrome-less YouTube embed: no progress bar, no native buttons, no
// branding, no seeking, no right-click menu, no keyboard shortcuts. The only
// way to interact with it is a single click to play/pause, handled by our
// own overlay — nothing from the real player is ever clickable.
export default function GatedYouTubePlayer({ videoUrl }: GatedYouTubePlayerProps) {
  const containerId = `yt-player-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const playerRef = useRef<YTPlayer | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    let autoplayTimeout: ReturnType<typeof setTimeout> | undefined

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT) return
      playerRef.current = new window.YT.Player(containerId, {
        videoId: extractVideoId(videoUrl),
        playerVars: {
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          fs: 0,
          playsinline: 1,
          cc_load_policy: 0,
        },
        events: {
          onReady: () => {
            setReady(true)
            autoplayTimeout = setTimeout(() => {
              if (!cancelled) playerRef.current?.playVideo()
            }, 1000)
          },
          onStateChange: (e: YTStateChangeEvent) => setIsPlaying(e.data === YT_PLAYING_STATE),
        },
      })
    })

    return () => {
      cancelled = true
      clearTimeout(autoplayTimeout)
      try {
        playerRef.current?.destroy()
      } catch {
        // player may already be torn down
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoUrl])

  function togglePlayback() {
    if (!playerRef.current) return
    if (isPlaying) playerRef.current.pauseVideo()
    else playerRef.current.playVideo()
  }

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden"
      style={{ aspectRatio: '16/9', border: '1px solid rgba(10,10,15,0.12)' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div id={containerId} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: isPlaying ? 'transparent' : 'rgba(10,10,15,0.15)', border: 'none', padding: 0 }}
      >
        {!isPlaying && ready && (
          <span className="flex items-center justify-center w-14 h-14 rounded-full" style={{ backgroundColor: 'var(--accent)' }}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="white"><path d="M4 2l10 6-10 6V2z" /></svg>
          </span>
        )}
      </button>
    </div>
  )
}
