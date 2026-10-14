import { createHmac, randomInt, timingSafeEqual } from 'crypto'

const STALE_MS = 5 * 60 * 1000 // tokens older than this are rejected
const MIN_AGE_MS = 1500 // tokens younger than this are rejected (bot-speed submit)

function sign(payload: string): string {
  const secret = process.env.ACCESS_CHALLENGE_SECRET
  if (!secret) throw new Error('ACCESS_CHALLENGE_SECRET is not set')
  return createHmac('sha256', secret).update(payload).digest('base64url')
}

export function createChallenge(): { a: number; b: number; token: string } {
  const a = randomInt(1, 10)
  const b = randomInt(1, 10)
  const issuedAt = Date.now()
  const payload = `${a}.${b}.${issuedAt}`
  const token = `${payload}.${sign(payload)}`
  return { a, b, token }
}

export function verifyChallenge(
  token: unknown,
  submittedAnswer: unknown,
): { valid: boolean; reason?: string } {
  if (typeof token !== 'string') return { valid: false, reason: 'missing token' }

  const lastDot = token.lastIndexOf('.')
  if (lastDot === -1) return { valid: false, reason: 'malformed token' }

  const payload = token.slice(0, lastDot)
  const signature = token.slice(lastDot + 1)

  let expectedSig: string
  try {
    expectedSig = sign(payload)
  } catch {
    return { valid: false, reason: 'server misconfigured' }
  }

  const sigBuf = Buffer.from(signature)
  const expectedBuf = Buffer.from(expectedSig)
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
    return { valid: false, reason: 'signature mismatch' }
  }

  const parts = payload.split('.')
  if (parts.length !== 3) return { valid: false, reason: 'malformed payload' }

  const [aStr, bStr, issuedAtStr] = parts
  const a = parseInt(aStr, 10)
  const b = parseInt(bStr, 10)
  const issuedAt = parseInt(issuedAtStr, 10)
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(issuedAt)) {
    return { valid: false, reason: 'malformed numbers' }
  }

  const age = Date.now() - issuedAt
  if (age > STALE_MS) return { valid: false, reason: 'token expired' }
  if (age < MIN_AGE_MS) return { valid: false, reason: 'submitted too fast' }

  const answer = typeof submittedAnswer === 'number' ? submittedAnswer : Number(submittedAnswer)
  if (!Number.isFinite(answer) || a + b !== answer) {
    return { valid: false, reason: 'wrong answer' }
  }

  return { valid: true }
}
