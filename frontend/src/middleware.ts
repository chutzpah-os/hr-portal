import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { PRODUCTS } from './data/solutions'
import { CHALLENGES } from './data/challenges'

const intlMiddleware = createMiddleware(routing)

const PRODUCT_SLUGS = new Set(PRODUCTS.map((p) => p.id))
const CHALLENGE_SLUGS = new Set(CHALLENGES.map((c) => c.id))

const TOP_LEVEL_ROUTES = new Set([
  'about',
  'portfolio',
  'blog',
  'press',
  'writing',
  'researches',
  'solutions',
  'challenges',
])

export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Normalize: lowercase + strip trailing slash
  const lower = pathname.toLowerCase()
  const sanitized = lower.length > 1 && lower.endsWith('/') ? lower.slice(0, -1) : lower

  if (sanitized !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = sanitized
    url.search = search
    return NextResponse.redirect(url, { status: 308 })
  }

  // Strip locale prefix before validating route structure.
  // localePrefix: 'always' means every locale (including the default 'en')
  // is served under its own prefix — add new locales to routing.ts only.
  const segments = sanitized.split('/').filter(Boolean)
  const isLocaleSegment = routing.locales.includes(segments[0] as (typeof routing.locales)[number])
  const routeSegments = isLocaleSegment ? segments.slice(1) : segments
  const localePrefix = isLocaleSegment ? `/${segments[0]}` : ''

  if (routeSegments.length > 0) {
    const [first, second] = routeSegments

    // Unknown top-level route → home
    if (!TOP_LEVEL_ROUTES.has(first)) {
      return NextResponse.redirect(new URL(`${localePrefix}/`, request.url), { status: 302 })
    }

    // No route goes deeper than 2 levels
    if (routeSegments.length > 2) {
      return NextResponse.redirect(new URL(`${localePrefix}/${first}`, request.url), { status: 302 })
    }

    // /solutions/[slug] — validate against known products
    if (first === 'solutions' && second !== undefined && !PRODUCT_SLUGS.has(second)) {
      return NextResponse.redirect(new URL(`${localePrefix}/solutions`, request.url), { status: 302 })
    }

    // /challenges/[slug] — validate against known challenges
    if (first === 'challenges' && second !== undefined && !CHALLENGE_SLUGS.has(second)) {
      return NextResponse.redirect(new URL(`${localePrefix}/challenges`, request.url), { status: 302 })
    }

    // /blog/[slug] → let through — validated at page level via Firestore
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
