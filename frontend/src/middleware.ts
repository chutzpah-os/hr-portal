import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // Skip Next.js internals and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const lower = pathname.toLowerCase()
  // Remove trailing slash (keep root "/" intact)
  const sanitized = lower.length > 1 && lower.endsWith('/') ? lower.slice(0, -1) : lower

  if (sanitized !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = sanitized
    url.search = search
    return NextResponse.redirect(url, { status: 308 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
