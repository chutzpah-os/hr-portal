const BASE_URL = 'https://www.hanielrolemberg.com'
const LOCALES = ['en', 'pt', 'es', 'fr', 'ca'] as const

export function buildAlternates(locale: string, path: string) {
  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages: Object.fromEntries([
      ...LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`]),
      ['x-default', `${BASE_URL}/en${path}`],
    ]),
  }
}
