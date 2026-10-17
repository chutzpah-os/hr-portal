import { NextResponse } from 'next/server'
import { firestoreCollection } from '@/lib/firebaseAdmin'

export const runtime = 'nodejs'

const COLLECTION = 'newsletter'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  const { email } = body as Record<string, unknown>

  if (typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ message: 'a valid email is required' }, { status: 400 })
  }

  const normalizedEmail = email.trim().toLowerCase()
  const collection = firestoreCollection(COLLECTION)

  const existing = await collection.where('email', '==', normalizedEmail).limit(1).get()
  if (!existing.empty) {
    return NextResponse.json({ message: 'Already subscribed' }, { status: 409 })
  }

  await collection.add({
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
  })

  return NextResponse.json({ message: 'Subscribed successfully' }, { status: 201 })
}
