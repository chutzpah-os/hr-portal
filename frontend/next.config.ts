import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../'),
  async redirects() {
    return [
      { source: '/contact', destination: '/', permanent: true },
      { source: '/challenges/1k-miles', destination: '/challenges/1k-miles-of-hope', permanent: true },
      {
        source: '/solutions/etz-defense',
        destination: '/solutions/etz',
        permanent: true,
      },
      {
        source: '/blog/your-phone-lost-on-the-map-yet-alert-to-imminent-danger',
        destination: '/blog/phone-gps-spoofing-emergency-alerts',
        permanent: true,
      },
      {
        source: '/blog/how-your-phone-knows-where-you-are-gps-spoofing-cell-broadcast-emergency-alerts',
        destination: '/blog/phone-gps-spoofing-emergency-alerts',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.ytimg.com' },
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
