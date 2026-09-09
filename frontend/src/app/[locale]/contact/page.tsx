import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ContactForm from '@/components/sections/ContactForm'
import { buildAlternates } from '@/lib/metadata'

const BASE_URL = 'https://www.hanielrolemberg.com'

const METADATA_BY_LOCALE: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Contact — Haniel Rolemberg',
    description: "Get in touch with Haniel Rolemberg — share a bit about yourself and set up a 1:1.",
  },
  pt: {
    title: 'Contato — Haniel Rolemberg',
    description: 'Fale com Haniel Rolemberg — conte um pouco sobre você e agende uma reunião 1:1.',
  },
  es: {
    title: 'Contacto — Haniel Rolemberg',
    description: 'Ponte en contacto con Haniel Rolemberg — cuéntame un poco sobre ti y agenda una reunión 1:1.',
  },
  fr: {
    title: 'Contact — Haniel Rolemberg',
    description: 'Contactez Haniel Rolemberg — dites-en un peu plus sur vous et planifiez un rendez-vous en tête-à-tête.',
  },
  ca: {
    title: 'Contacte — Haniel Rolemberg',
    description: 'Contacta amb Haniel Rolemberg — explica una mica sobre tu i concerta una reunió 1:1.',
  },
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const m = METADATA_BY_LOCALE[locale] ?? METADATA_BY_LOCALE.en

  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates(locale, '/contact'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${BASE_URL}/${locale}/contact`,
      type: 'website',
    },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  const tn = await getTranslations({ locale, namespace: 'nav' })

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <div className="max-w-lg mx-auto px-6 py-16 md:py-24 text-center">
        <p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-4 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          {tn('contact')}
        </p>
        <h1
          className="font-bold leading-tight mb-4"
          style={{
            color: 'var(--white-100)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-syne)',
          }}
        >
          {t('newsletterLabel')}
        </h1>
        <ContactForm />
      </div>
    </main>
  )
}
