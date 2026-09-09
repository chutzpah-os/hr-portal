// Remembers which page a visitor was on before heading to /contact, so the
// post-questionnaire flow at lp.hanielrolemberg.com can send them back to it.
// sessionStorage (not a URL param) because "Contact" is a real page nav —
// document.referrer isn't reliable across client-side <Link> transitions.

const KEY = 'lp_return_url'

export function saveReturnUrl() {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.setItem(KEY, window.location.href)
  } catch {
    // sessionStorage unavailable (private mode, etc.) — return will just fall back
  }
}

export function getReturnUrl(fallback: string): string {
  if (typeof window === 'undefined') return fallback
  try {
    return sessionStorage.getItem(KEY) || fallback
  } catch {
    return fallback
  }
}
