import { NextResponse } from 'next/server'
import { firestoreCollection } from '@/lib/firebaseAdmin'

export const runtime = 'nodejs'

const COLLECTION = 'contact'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[0-9\s\-()]{8,20}$/

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

  const { name, email, phone } = body as Record<string, unknown>

  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return NextResponse.json({ message: 'name must be between 2 and 100 characters' }, { status: 400 })
  }
  if (typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ message: 'a valid email is required' }, { status: 400 })
  }
  if (phone !== undefined && (typeof phone !== 'string' || !PHONE_REGEX.test(phone.trim()))) {
    return NextResponse.json({ message: 'phone must be a valid phone number' }, { status: 400 })
  }

  const normalizedEmail = email.trim().toLowerCase()
  const collection = firestoreCollection(COLLECTION)

  const existing = await collection.where('email', '==', normalizedEmail).limit(1).get()
  if (!existing.empty) {
    return NextResponse.json({ message: 'Already submitted' }, { status: 409 })
  }

  await collection.add({
    name: name.trim(),
    email: normalizedEmail,
    phone: typeof phone === 'string' && phone.trim() ? phone.trim() : null,
    submittedAt: new Date().toISOString(),
  })

  return NextResponse.json({ message: 'Submitted successfully' }, { status: 201 })
}
