import { NextResponse } from 'next/server'
import { createChallenge } from '@/lib/accessChallenge'

export const runtime = 'nodejs'

export async function GET() {
  const { a, b, token } = createChallenge()
  return NextResponse.json(
    { a, b, token },
    { status: 200, headers: { 'Cache-Control': 'no-store' } },
  )
}
