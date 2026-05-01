import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api'

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/posts`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    })

    if (!res.ok) {
      return NextResponse.json([], { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json([], { status: 503 })
  }
}
