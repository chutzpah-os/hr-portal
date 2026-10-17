import { NextResponse } from 'next/server'
import { firestoreCollection } from '@/lib/firebaseAdmin'

export const runtime = 'nodejs'

const COLLECTION = 'lp_responses'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface Answer {
  questionId: string
  answer: string
}

function isSaneText(value: unknown, max: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= max
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

  const { leadEmail, locale, answers } = body as Record<string, unknown>

  if (leadEmail !== undefined && (typeof leadEmail !== 'string' || leadEmail.length > 254 || !EMAIL_REGEX.test(leadEmail))) {
    return NextResponse.json({ message: 'leadEmail must be a valid email' }, { status: 400 })
  }
  if (locale !== undefined && (typeof locale !== 'string' || locale.length > 5)) {
    return NextResponse.json({ message: 'locale must be a short string' }, { status: 400 })
  }
  if (!Array.isArray(answers) || !answers.every((a) => isSaneText((a as Partial<Answer>)?.questionId, 100) && isSaneText((a as Partial<Answer>)?.answer, 2000))) {
    return NextResponse.json({ message: 'answers must be a list of {questionId, answer}' }, { status: 400 })
  }

  await firestoreCollection(COLLECTION).add({
    leadEmail: typeof leadEmail === 'string' ? leadEmail.toLowerCase() : null,
    locale: typeof locale === 'string' ? locale : null,
    answers: (answers as Answer[]).map((a) => ({ questionId: a.questionId, answer: a.answer })),
    submittedAt: new Date().toISOString(),
  })

  return NextResponse.json({ message: 'Responses recorded' }, { status: 201 })
}
