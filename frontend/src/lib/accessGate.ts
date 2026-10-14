const KEY = 'access_gate_granted_at'
const TTL_MS = 90 * 24 * 60 * 60 * 1000 // 90 days

export function hasValidAccess(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const stored = localStorage.getItem(KEY)
    if (!stored) return false
    const grantedAt = parseInt(stored, 10)
    return Number.isFinite(grantedAt) && Date.now() - grantedAt < TTL_MS
  } catch {
    // Unlike lpReturn.ts, a storage error here fails toward *showing* the
    // gate — the whole point is restricting access, so we never silently
    // let a visitor in just because localStorage was unavailable.
    return false
  }
}

export function grantAccess(): void {
  try {
    localStorage.setItem(KEY, String(Date.now()))
  } catch {
    // If storage truly isn't available, the gate just reappears next load.
  }
}
