import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PRODUCTS } from '@/data/solutions'
import { CHALLENGES } from '@/data/challenges'

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

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 1. Normalize: lowercase + strip trailing slash
  const lower = pathname.toLowerCase()
  const sanitized = lower.length > 1 && lower.endsWith('/') ? lower.slice(0, -1) : lower

  if (sanitized !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = sanitized
    url.search = search
    return NextResponse.redirect(url, { status: 308 })
  }

  // 2. Validate route structure
  const segments = sanitized.split('/').filter(Boolean)

  // Root is always valid
  if (segments.length === 0) return NextResponse.next()

  const [first, second] = segments

  // Unknown top-level route → home
  if (!TOP_LEVEL_ROUTES.has(first)) {
    return NextResponse.redirect(new URL('/', request.url), { status: 302 })
  }

  // No route goes deeper than 2 levels
  if (segments.length > 2) {
    return NextResponse.redirect(new URL(`/${first}`, request.url), { status: 302 })
  }

  // /solutions/[slug] — validate against known products
  if (first === 'solutions' && second !== undefined) {
    if (!PRODUCT_SLUGS.has(second)) {
      return NextResponse.redirect(new URL('/solutions', request.url), { status: 302 })
    }
  }

  // /challenges/[slug] — validate against known challenges
  if (first === 'challenges' && second !== undefined) {
    if (!CHALLENGE_SLUGS.has(second)) {
      return NextResponse.redirect(new URL('/challenges', request.url), { status: 302 })
    }
  }

  // /blog/[slug] → let through — validated at page level via Firestore

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
