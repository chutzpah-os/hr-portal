import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../'),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Increase timeout for API calls during build
  experimental: {
    fetchCacheKeyPrefix: '',
  },
  // Increase build timeout
  staticPageGenerationTimeout: 180, // 3 minutes instead of default 60s
}

export default nextConfig
