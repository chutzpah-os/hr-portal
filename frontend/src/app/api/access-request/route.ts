import { NextResponse } from 'next/server'
import { verifyChallenge } from '@/lib/accessChallenge'
import { firestoreCollection } from '@/lib/firebaseAdmin'

export const runtime = 'nodejs'

const COLLECTION = 'site_access_requests'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isSaneText(value: unknown, min: number, max: number): value is string {
  return typeof value === 'string' && value.trim().length >= min && value.trim().length <= max
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, location, connection, linkedin, answer, token, honeypot } = body as Record<string, unknown>

  // Cheapest check first: a filled honeypot is an instant bot signal.
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return NextResponse.json({ message: 'Verification failed' }, { status: 400 })
  }

  const challenge = verifyChallenge(token, answer)
  if (!challenge.valid) {
    return NextResponse.json({ message: 'Verification failed', code: 'CHALLENGE_INVALID' }, { status: 400 })
  }

  if (!isSaneText(name, 2, 100)) {
    return NextResponse.json({ message: 'name must be between 2 and 100 characters' }, { status: 400 })
  }
  if (typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ message: 'a valid email is required' }, { status: 400 })
  }
  if (!isSaneText(location, 2, 200)) {
    return NextResponse.json({ message: 'location must be between 2 and 200 characters' }, { status: 400 })
  }
  if (!isSaneText(connection, 2, 200)) {
    return NextResponse.json({ message: 'connection must be between 2 and 200 characters' }, { status: 400 })
  }
  if (!isSaneText(linkedin, 2, 200)) {
    return NextResponse.json({ message: 'linkedin must be between 2 and 200 characters' }, { status: 400 })
  }

  await firestoreCollection(COLLECTION).add({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    location: location.trim(),
    connection: connection.trim(),
    linkedin: linkedin.trim(),
    submittedAt: new Date().toISOString(),
  })

  return NextResponse.json({ message: 'Access granted' }, { status: 201 })
}
