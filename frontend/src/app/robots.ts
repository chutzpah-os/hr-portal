import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.hanielrolemberg.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/*?wpr_templates='],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
