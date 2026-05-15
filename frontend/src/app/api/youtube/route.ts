import { NextResponse } from 'next/server'

export const revalidate = 3600

export interface YTVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  channelName: string
  channelId: string
  url: string
}

const CHANNELS = [
  { id: 'UCzmKBWAle1KP7tOcOgi18EA', slug: 'haniel' },
  { id: 'UClfUa-1qwNE8SPw30DPG8RA', slug: 'psf' },
]

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))
  return match ? match[1].trim() : ''
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*${attr}="([^"]*)"[^>]*>`))
  return match ? match[1] : ''
}

// Returns false only on definitive 404 — anything else (timeout, error) keeps the video
async function isVideoUnavailable(videoId: string): Promise<boolean> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 2500)
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { signal: controller.signal, next: { revalidate: 3600 } }
    )
    return res.status === 404
  } catch {
    // timeout or network error — assume available
    return false
  } finally {
    clearTimeout(timer)
  }
}

async function fetchChannel(channelId: string, channelSlug: string): Promise<YTVideo[]> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 5000)

  let xml: string
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { signal: controller.signal, next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    xml = await res.text()
  } catch {
    return []
  } finally {
    clearTimeout(timer)
  }

  const channelName = extractTag(xml, 'title')
  const entries = xml.split('<entry>').slice(1)

  const videos: YTVideo[] = entries.map((entry) => {
    const videoId = extractTag(entry, 'yt:videoId')
    const title = extractTag(entry, 'title')
    const publishedAt = extractTag(entry, 'published')
    const thumbnail = extractAttr(entry, 'media:thumbnail', 'url')
    return {
      id: videoId,
      title: title.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
      thumbnail: thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      publishedAt,
      channelName,
      channelId: channelSlug,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    }
  })

  // Filter only confirmed-unavailable videos; keep everything else
  const unavailable = await Promise.all(videos.map((v) => isVideoUnavailable(v.id)))
  return videos.filter((_, i) => !unavailable[i])
}

export async function GET() {
  try {
    const results = await Promise.all(
      CHANNELS.map((ch) => fetchChannel(ch.id, ch.slug))
    )
    const merged: YTVideo[] = []
    const max = Math.max(...results.map((r) => r.length))
    for (let i = 0; i < max; i++) {
      for (const list of results) {
        if (list[i]) merged.push(list[i])
      }
    }
    return NextResponse.json(merged)
  } catch {
    return NextResponse.json([], { status: 500 })
  }
}
