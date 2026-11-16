import type { NextConfig } from 'next'
import path from 'path'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../'),
  // Redirects for renamed/retired URLs live in vercel.json, not here.
  // Vercel's platform-level redirects run before the request reaches this
  // app, so any redirect defined here for a path shape vercel.json also
  // matches (e.g. /blog/:slug, /solutions/:slug) never actually fires.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.ytimg.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
  // Increase timeout for API calls during build
  experimental: {
    fetchCacheKeyPrefix: '',
  },
  // Increase build timeout
  staticPageGenerationTimeout: 180, // 3 minutes instead of default 60s
}

export default withNextIntl(nextConfig)
