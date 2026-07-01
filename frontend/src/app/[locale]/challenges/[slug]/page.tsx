import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CHALLENGES, getChallenge, getLocalizedChallenge } from '@/data/challenges'
import { getTranslations } from 'next-intl/server'

const BASE_URL = 'https://hanielrolemberg.com'

export async function generateStaticParams() {
  return CHALLENGES.map((c) => ({ slug: c.id }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params
  const rawChallenge = getChallenge(slug)
  if (!rawChallenge) return {}
  const challenge = getLocalizedChallenge(rawChallenge, locale)

  const url = `${BASE_URL}/challenges/${challenge.id}`
  return {
    title: `${challenge.name} — ${challenge.tagline}`,
    description: challenge.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${challenge.name} — Haniel Rolemberg`,
      description: challenge.shortDescription,
      url,
      images: challenge.image ? [{ url: `${BASE_URL}${challenge.image}`, alt: challenge.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${challenge.name} — Haniel Rolemberg`,
      description: challenge.shortDescription,
    },
  }
}

export default async function ChallengePage(
  { params }: { params: Promise<{ locale: string; slug: string }> }
) {
  const { locale, slug } = await params
  const rawChallenge = getChallenge(slug)
  if (!rawChallenge) notFound()
  const challenge = getLocalizedChallenge(rawChallenge, locale)
  const t = await getTranslations('challenges')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: challenge.name,
    description: challenge.shortDescription,
    url: `${BASE_URL}/challenges/${challenge.id}`,
    organizer: { '@type': 'Person', name: 'Haniel Rolemberg', url: BASE_URL },
    keywords: challenge.tags.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Challenges', item: `${BASE_URL}/challenges` },
      { '@type': 'ListItem', position: 3, name: challenge.name, item: `${BASE_URL}/challenges/${challenge.id}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main
        style={{
          minHeight: '100svh',
          backgroundColor: 'rgb(255,255,255)',
          paddingTop: '7rem',
          paddingBottom: '6rem',
        }}
      >
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(10,10,15,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            zIndex: 0,
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10" style={{ zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav className="mb-10">
            <Link
              href="/challenges"
              className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: 'var(--white-40)' }}
            >
              {t('backChallenges')}
            </Link>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-5">
              {challenge.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.55rem] uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'rgba(212,119,90,0.08)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(212,119,90,0.18)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="mb-3"
              style={{
                color: 'var(--white-100)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              {challenge.name}
            </h1>

            <div className="flex items-center gap-4 flex-wrap">
              <p className="text-base italic" style={{ color: 'var(--white-50)' }}>
                &ldquo;{challenge.tagline}&rdquo;
              </p>
              {challenge.cta && (
                <a
                  href={challenge.cta.href}
                  target={challenge.cta.external ? '_blank' : undefined}
                  rel={challenge.cta.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-opacity duration-200 shrink-0"
                  style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)', fontWeight: 600 }}
                >
                  {challenge.cta.label} →
                </a>
              )}
            </div>
          </div>

          {/* Cover image */}
          {challenge.image && (
            <div
              className="rounded-2xl overflow-hidden mb-10"
              style={{
                aspectRatio: '16/7',
                backgroundColor: 'rgba(10,10,15,0.03)',
                border: '1px solid rgba(10,10,15,0.07)',
                position: 'relative',
              }}
            >
              <Image
                src={challenge.image}
                alt={challenge.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className={challenge.imageFit === 'cover' ? 'object-cover' : 'object-contain'}
                style={challenge.imageFit !== 'cover' ? { padding: '1.5rem' } : undefined}
              />
            </div>
          )}

          {/* Full description */}
          <div className="mb-10">
            {challenge.fullDescription.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-5"
                style={{ color: 'var(--white-70)' }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Modal photo */}
          {challenge.modalImage && (
            <div
              className="rounded-2xl overflow-hidden mb-10"
              style={{
                aspectRatio: '4/3',
                position: 'relative',
                border: '1px solid rgba(10,10,15,0.07)',
              }}
            >
              <Image
                src={challenge.modalImage}
                alt={`${challenge.name} — photo`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
              />
            </div>
          )}

          {/* Donate CTA block */}
          {challenge.cta && (
            <div
              className="rounded-2xl p-8 mb-10 text-center"
              style={{
                backgroundColor: 'rgba(212,119,90,0.04)',
                border: '1px solid rgba(212,119,90,0.15)',
              }}
            >
              <p className="text-sm mb-4" style={{ color: 'var(--white-55)' }}>
                {t('donateNote')}
              </p>
              <a
                href={challenge.cta.href}
                target={challenge.cta.external ? '_blank' : undefined}
                rel={challenge.cta.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-opacity duration-200"
                style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)', fontWeight: 600 }}
              >
                {t('donateCta')}
              </a>
            </div>
          )}

          {/* Back */}
          <div
            className="pt-8"
            style={{ borderTop: '1px solid rgba(10,10,15,0.07)' }}
          >
            <Link
              href="/challenges"
              className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: 'var(--white-40)' }}
            >
              {t('backAll')}
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
