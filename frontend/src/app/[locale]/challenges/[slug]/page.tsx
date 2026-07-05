import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CHALLENGES, getChallenge, getLocalizedChallenge } from '@/data/challenges'
import { getTranslations } from 'next-intl/server'
import { NARRATIVE } from '@/data/1k-miles-narrative'
import type { NarrativeLocale } from '@/data/1k-miles-narrative'
import CancerStats from '@/components/challenges/CancerStats'
import Narrative from '@/components/challenges/Narrative'
import FundraisingGoals from '@/components/challenges/FundraisingGoals'
import VideoGrid from '@/components/challenges/VideoGrid'
import RelatedPosts from '@/components/challenges/RelatedPosts'
import FAQ from '@/components/challenges/FAQ'
import AboutProject from '@/components/challenges/AboutProject'
import HowItWorks from '@/components/challenges/HowItWorks'
import ImpactSection from '@/components/challenges/ImpactSection'
import Roadmap from '@/components/challenges/Roadmap'
import Partners from '@/components/challenges/Partners'
import Benefits from '@/components/challenges/Benefits'
import Transparency from '@/components/challenges/Transparency'
import FinalCTA from '@/components/challenges/FinalCTA'

const BASE_URL = 'https://hanielrolemberg.com'

const SUPPORTED_NARRATIVE_LOCALES: NarrativeLocale[] = ['en', 'pt', 'es', 'fr', 'ca']

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

  const narrativeLocale: NarrativeLocale = SUPPORTED_NARRATIVE_LOCALES.includes(locale as NarrativeLocale)
    ? (locale as NarrativeLocale)
    : 'en'
  const narrative = NARRATIVE[narrativeLocale]

  const isPresentation = !!rawChallenge.progress

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: challenge.name,
    description: challenge.shortDescription,
    url: `${BASE_URL}/challenges/${challenge.id}`,
    ...(rawChallenge.startDate && { startDate: rawChallenge.startDate }),
    ...(rawChallenge.endDate && { endDate: rawChallenge.endDate }),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: rawChallenge.cta?.href ?? `${BASE_URL}/challenges/${challenge.id}`,
    },
    ...(rawChallenge.image && { image: `${BASE_URL}${rawChallenge.image}` }),
    organizer: { '@type': 'Person', name: 'Haniel Rolemberg', url: BASE_URL },
    performer: { '@type': 'Person', name: 'Haniel Rolemberg', url: BASE_URL },
    ...(rawChallenge.cta && {
      offers: {
        '@type': 'Offer',
        name: rawChallenge.cta.label,
        url: rawChallenge.cta.href,
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
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

          {/* ── HERO ── */}
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

          {/* Non-presentation fallback */}
          {!isPresentation && (
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
          )}

          {/* ── PITCH DECK SECTIONS — presentation mode only ── */}

          {isPresentation && (
            <>
              {/* ── PROBLEM ── */}
              <div className="mb-16">
                <div
                  className="text-[0.55rem] uppercase tracking-widest mb-4"
                  style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
                >
                  {narrative.problemSectionTitle}
                </div>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--white-65)' }}>
                  {narrative.problemIntro}
                </p>
                <CancerStats
                  narrative={narrative}
                  locale={narrativeLocale}
                  survivalLabel={t('survivalRate5yr')}
                  sourceLabel={t('sourceLabel')}
                />
              </div>

              {/* ── STORY ── */}
              <Narrative narrative={narrative} />

              {/* ── ABOUT THE PROJECT ── */}
              <AboutProject narrative={narrative} />

              {/* ── HOW IT WORKS + LIVE PROGRESS ── */}
              <HowItWorks narrative={narrative} progress={rawChallenge.progress!} />

              {/* ── IMPACT ── */}
              {rawChallenge.impactMetrics && rawChallenge.impactMetrics.length > 0 && (
                <ImpactSection metrics={rawChallenge.impactMetrics} narrative={narrative} />
              )}

              {/* ── FUNDRAISING GOALS ── */}
              {rawChallenge.fundraisingGoals && (
                <FundraisingGoals
                  goals={rawChallenge.fundraisingGoals}
                  narrative={narrative}
                />
              )}

              {/* ── FAQ ── */}
              {rawChallenge.faqs && rawChallenge.faqs.length > 0 && (
                <FAQ faqs={rawChallenge.faqs} locale={locale} label={t('faqLabel')} />
              )}

              {/* ── ROADMAP ── */}
              {rawChallenge.roadmap && rawChallenge.roadmap.length > 0 && (
                <Roadmap phases={rawChallenge.roadmap} narrative={narrative} />
              )}

              {/* ── PARTNERS ── */}
              <Partners narrative={narrative} />

              {/* ── BENEFITS ── */}
              {rawChallenge.benefits && rawChallenge.benefits.length > 0 && (
                <Benefits benefits={rawChallenge.benefits} narrative={narrative} />
              )}

              {/* ── TRANSPARENCY ── */}
              {rawChallenge.transparency && rawChallenge.transparency.length > 0 && (
                <Transparency items={rawChallenge.transparency} narrative={narrative} />
              )}

              {/* Running log photo */}
              {challenge.modalImage && (
                <div
                  className="rounded-2xl overflow-hidden mb-10"
                  style={{
                    aspectRatio: '16/6',
                    maxHeight: '260px',
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

              {/* ── RUNNING LOG POSTS ── */}
              <RelatedPosts
                group="Live Projects/1K Miles of Hope Project"
                locale={locale}
                label={t('runningLogLabel')}
                seeAllLabel={t('seeRelatedPosts')}
              />

              {/* ── VIDEOS ── */}
              {rawChallenge.videos && rawChallenge.videos.length > 0 && (
                <>
                  <div
                    className="text-[0.55rem] uppercase tracking-widest mb-4"
                    style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
                  >
                    {t('videosLabel')}
                  </div>
                  <VideoGrid videos={rawChallenge.videos} locale={locale} />
                </>
              )}

              {/* ── FINAL CTA ── */}
              <FinalCTA narrative={narrative} />
            </>
          )}

          {/* Donate CTA — non-presentation mode */}
          {!isPresentation && challenge.cta && (
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
