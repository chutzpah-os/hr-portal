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

async function fetchChannel(channelId: string, channelSlug: string): Promise<YTVideo[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const xml = await res.text()

    const channelName = extractTag(xml, 'title')
    const entries = xml.split('<entry>').slice(1)

    return entries.map((entry) => {
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
  } catch {
    return []
  }
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
