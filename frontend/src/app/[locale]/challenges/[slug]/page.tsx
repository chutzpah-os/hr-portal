import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CHALLENGES, getChallenge, getLocalizedChallenge } from '@/data/challenges'
import { getTranslations } from 'next-intl/server'
import { NARRATIVE } from '@/data/1k-miles-narrative'
import type { NarrativeLocale } from '@/data/1k-miles-narrative'
import CancerStats, { PeopleSection } from '@/components/challenges/CancerStats'
import { WhyIRun, TerryFox, WorldWithCure } from '@/components/challenges/Narrative'
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
import FundraisingTiers from '@/components/challenges/FundraisingTiers'
import SectionScroller, { type PanelTheme } from '@/components/challenges/SectionScroller'
import TOCSummary from '@/components/challenges/TOCSummary'

const BASE_URL = 'https://hanielrolemberg.com'

const SUPPORTED_NARRATIVE_LOCALES: NarrativeLocale[] = ['en', 'pt', 'es', 'fr', 'ca']

// Vertically centers content within the 100vh panel for short sections.
// For tall sections, margin auto resolves to 0 and content flows from the top naturally.
function PanelFrame({ children, top = false }: { children: React.ReactNode; top?: boolean }) {
  const inner = 'max-w-3xl mx-auto px-6 md:px-10 w-full'
  if (top) {
    return (
      <div style={{ minHeight: '100%', paddingTop: '7rem', paddingBottom: '3rem' }}>
        <div className={inner}>{children}</div>
      </div>
    )
  }
  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div className={inner} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
        {children}
      </div>
    </div>
  )
}

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

  const jsonLd = (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )

  // ── PRESENTATION MODE — section-snap pitch deck ──
  if (isPresentation) {
    const nl = narrative.navLabels
    const sectionNames: string[] = [
      nl.intro,
      nl.index,
      nl.problem,
      nl.lives,
      nl.whyIRun,
      nl.terryFox,
      nl.world,
      nl.about,
      nl.rhythm,
      ...(challenge.impactMetrics && challenge.impactMetrics.length > 0 ? [nl.impact] : []),
      ...(challenge.fundraisingGoals ? [nl.donate] : []),
      ...(challenge.transparency && challenge.transparency.length > 0 ? [nl.funds] : []),
      ...(challenge.fundraisingGoals ? [nl.tiers] : []),
      ...(rawChallenge.faqs && rawChallenge.faqs.length > 0 ? [nl.faq] : []),
      ...(challenge.roadmap && challenge.roadmap.length > 0 ? [nl.road] : []),
      nl.partners,
      ...(challenge.benefits && challenge.benefits.length > 0 ? [nl.benefits] : []),
      nl.updates,
      ...(rawChallenge.videos && rawChallenge.videos.length > 0 ? [nl.videos] : []),
      nl.act,
    ]

    const tocEntries = sectionNames
      .map((label, i) => ({ label, index: i }))
      .filter(e => e.index !== 0 && e.index !== 1)

    const panelThemes: PanelTheme[] = [
      'white', // Intro
      'white', // Index/TOC
      'white', // Problem
      'white', // Lives
      'terra', // Why I Run — emotional core
      'terra', // Terry Fox — continuation
      'white', // World
      'white', // About
      'white', // Rhythm
      ...(challenge.impactMetrics && challenge.impactMetrics.length > 0 ? ['white'] : []) as PanelTheme[],
      ...(challenge.fundraisingGoals ? ['white'] : []) as PanelTheme[],
      ...(challenge.transparency && challenge.transparency.length > 0 ? ['white'] : []) as PanelTheme[],
      ...(challenge.fundraisingGoals ? ['white'] : []) as PanelTheme[],
      ...(rawChallenge.faqs && rawChallenge.faqs.length > 0 ? ['white'] : []) as PanelTheme[],
      ...(challenge.roadmap && challenge.roadmap.length > 0 ? ['white'] : []) as PanelTheme[],
      'white', // Partners
      ...(challenge.benefits && challenge.benefits.length > 0 ? ['white'] : []) as PanelTheme[],
      'white', // Updates
      ...(rawChallenge.videos && rawChallenge.videos.length > 0 ? ['white'] : []) as PanelTheme[],
      'terra', // Act — closing CTA
    ]

    return (
      <>
        {jsonLd}
        <main>
          <SectionScroller names={sectionNames} panelThemes={panelThemes}>

            {/* ── 0: INTRO — top-aligned (cover image fills the space) ── */}
            <PanelFrame top>
              <nav className="mb-8">
                <Link
                  href="/challenges"
                  className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
                  style={{ color: 'var(--white-40)' }}
                >
                  {t('backChallenges')}
                </Link>
              </nav>

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

              <div className="flex items-center gap-4 flex-wrap mb-8">
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

              {challenge.image && (
                <div
                  className="rounded-2xl overflow-hidden"
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

              {narrative.introStatement && (
                <p
                  className="mt-7 text-sm leading-relaxed"
                  style={{
                    color: 'var(--white-60)',
                    borderLeft: '2px solid rgba(212,119,90,0.4)',
                    paddingLeft: '1rem',
                    fontStyle: 'italic',
                  }}
                >
                  {narrative.introStatement}
                </p>
              )}
            </PanelFrame>

            {/* ── 1: INDEX / TOC ── */}
            <PanelFrame>
              <TOCSummary entries={tocEntries} title={narrative.tocTitle} />
            </PanelFrame>

            {/* ── 2: PROBLEM ── */}
            <PanelFrame>
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
            </PanelFrame>

            {/* ── 2: LIVES — survivors / lost grid ── */}
            <PanelFrame>
              <PeopleSection narrative={narrative} />
            </PanelFrame>

            {/* ── 3: WHY I RUN ── */}
            <PanelFrame>
              <WhyIRun narrative={narrative} />
            </PanelFrame>

            {/* ── 3: TERRY FOX ── */}
            <PanelFrame>
              <TerryFox narrative={narrative} />
            </PanelFrame>

            {/* ── 4: WORLD WITH CURE ── */}
            <PanelFrame>
              <WorldWithCure narrative={narrative} />
            </PanelFrame>

            {/* ── 5: ABOUT ── */}
            <PanelFrame>
              <AboutProject narrative={narrative} />
            </PanelFrame>

            {/* ── 6: HOW IT WORKS + LIVE PROGRESS ── */}
            <PanelFrame>
              <HowItWorks narrative={narrative} progress={rawChallenge.progress!} />
            </PanelFrame>

            {/* ── 7: IMPACT (conditional) ── */}
            {challenge.impactMetrics && challenge.impactMetrics.length > 0 && (
              <PanelFrame>
                <ImpactSection metrics={challenge.impactMetrics} narrative={narrative} />
              </PanelFrame>
            )}

            {/* ── 6: FUNDRAISING GOALS (conditional) ── */}
            {challenge.fundraisingGoals && (
              <PanelFrame>
                <FundraisingGoals goals={challenge.fundraisingGoals} narrative={narrative} />
              </PanelFrame>
            )}

            {/* ── 7: TRANSPARENCY (conditional) ── */}
            {challenge.transparency && challenge.transparency.length > 0 && (
              <PanelFrame>
                <Transparency items={challenge.transparency} narrative={narrative} />
              </PanelFrame>
            )}

            {/* ── 8: TIERS (conditional) ── */}
            {challenge.fundraisingGoals && (
              <PanelFrame>
                <FundraisingTiers goals={challenge.fundraisingGoals} narrative={narrative} />
              </PanelFrame>
            )}

            {/* ── 9: FAQ (conditional) ── */}
            {rawChallenge.faqs && rawChallenge.faqs.length > 0 && (
              <PanelFrame>
                <FAQ faqs={rawChallenge.faqs} locale={locale} label={t('faqLabel')} />
              </PanelFrame>
            )}

            {/* ── 10: ROADMAP (conditional) ── */}
            {challenge.roadmap && challenge.roadmap.length > 0 && (
              <PanelFrame>
                <Roadmap phases={challenge.roadmap} narrative={narrative} />
              </PanelFrame>
            )}

            {/* ── 11: PARTNERS ── */}
            <PanelFrame>
              <Partners narrative={narrative} />
            </PanelFrame>

            {/* ── 12: BENEFITS (conditional) ── */}
            {challenge.benefits && challenge.benefits.length > 0 && (
              <PanelFrame>
                <Benefits benefits={challenge.benefits} narrative={narrative} />
              </PanelFrame>
            )}

            {/* ── 13: UPDATES ── */}
            <PanelFrame>
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
              <RelatedPosts
                group="Live Projects/1K Miles of Hope Project"
                locale={locale}
                label={t('runningLogLabel')}
                seeAllLabel={t('seeRelatedPosts')}
              />
            </PanelFrame>

            {/* ── 14: VIDEOS (conditional) ── */}
            {rawChallenge.videos && rawChallenge.videos.length > 0 && (
              <PanelFrame>
                <div
                  className="text-[0.55rem] uppercase tracking-widest mb-4"
                  style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
                >
                  {t('videosLabel')}
                </div>
                <VideoGrid videos={rawChallenge.videos} locale={locale} />
              </PanelFrame>
            )}

            {/* ── 15: ACT ── */}
            <PanelFrame>
              <FinalCTA narrative={narrative} />
            </PanelFrame>

          </SectionScroller>
        </main>
      </>
    )
  }

  // ── STANDARD MODE ── (no progress data — simple layout)
  return (
    <>
      {jsonLd}

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
          <nav className="mb-10">
            <Link
              href="/challenges"
              className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: 'var(--white-40)' }}
            >
              {t('backChallenges')}
            </Link>
          </nav>

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
