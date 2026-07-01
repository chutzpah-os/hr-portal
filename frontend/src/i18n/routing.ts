import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'pt', 'es', 'fr', 'ca'],
  defaultLocale: 'en',
  localePrefix: 'always',
})
