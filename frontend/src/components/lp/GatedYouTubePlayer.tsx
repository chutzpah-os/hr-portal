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
  getDuration: () => number
  getCurrentTime: () => number
}

interface YTStateChangeEvent {
  data: number
}

const YT_PLAYING_STATE = 1
const YT_ENDED_STATE = 0

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
  onEnded?: () => void
  onTick?: (secondsLeft: number) => void
}

// Fully chrome-less YouTube embed: no progress bar, no native buttons, no
// branding, no seeking, no right-click menu, no keyboard shortcuts. The only
// way to interact with it is a single click to play/pause, handled by our
// own overlay — nothing from the real player is ever clickable. The "gate"
// (reporting onEnded/onTick) is driven by this specific video's own real
// duration via the IFrame API, not a fixed timer — it adapts to whatever
// video is loaded.
export default function GatedYouTubePlayer({ videoUrl, onEnded, onTick }: GatedYouTubePlayerProps) {
  const containerId = `yt-player-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const playerRef = useRef<YTPlayer | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let cancelled = false
    let autoplayTimeout: ReturnType<typeof setTimeout> | undefined
    let tickInterval: ReturnType<typeof setInterval> | undefined

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
            tickInterval = setInterval(() => {
              const player = playerRef.current
              if (!player) return
              const duration = player.getDuration()
              if (!duration) return
              const current = player.getCurrentTime()
              const remaining = Math.max(0, Math.ceil(duration - current))
              onTick?.(remaining)
              setProgress(Math.min(100, (current / duration) * 100))
            }, 500)
          },
          onStateChange: (e: YTStateChangeEvent) => {
            setIsPlaying(e.data === YT_PLAYING_STATE)
            if (e.data === YT_ENDED_STATE) {
              onTick?.(0)
              setProgress(100)
              onEnded?.()
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      clearTimeout(autoplayTimeout)
      clearInterval(tickInterval)
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
    <div>
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
      {ready && (
        <div
          className="w-full rounded-full overflow-hidden mt-3"
          style={{ height: '4px', backgroundColor: 'var(--white-10)' }}
        >
          <div
            className="transition-[width] duration-500 ease-linear"
            style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--accent)', borderRadius: '9999px' }}
          />
        </div>
      )}
    </div>
  )
}
