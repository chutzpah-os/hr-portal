import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata'
import { BOOKS, AUTHOR_PAGE_URL, amazonEditionLinks } from '@/data/writing'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Writing — Haniel Rolemberg',
    description: 'Long-form books and essays on technology, problem-solving, and the future of society by Haniel Rolemberg.',
    alternates: buildAlternates(locale, '/writing'),
    robots: { index: false, follow: true },
  }
}

export default async function WritingPage() {
  const t = await getTranslations('writing')

  return (
    <main style={{ paddingTop: '5.5rem', minHeight: '80svh' }}>
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-24">

        <p
          className="text-[0.6rem] uppercase tracking-[0.22em] mb-4 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          {t('sectionLabel')}
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
          {t('title')}
        </h1>
        <p
          className="text-base leading-relaxed mb-16 max-w-xl"
          style={{ color: 'var(--white-55)' }}
        >
          {t('subtitle')}
        </p>

        {BOOKS.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 rounded-2xl"
            style={{ border: '1px dashed rgba(10,10,15,0.12)' }}
          >
            <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
              {t('empty')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOKS.map((book) => {
              const editions = book.asin ? amazonEditionLinks(book.asin) : []
              const primary = editions.find((e) => e.country === 'US') ?? editions[0]
              const otherEditions = editions.filter((e) => e !== primary)

              return (
                <div
                  key={book.id}
                  className="flex flex-col rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(10,10,15,0.10)', backgroundColor: 'rgb(255,255,255)' }}
                >
                  <div className="relative w-full" style={{ aspectRatio: '2/3', backgroundColor: 'rgba(10,10,15,0.03)' }}>
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--white-35)' }}>
                      {book.language}
                    </p>
                    <h2
                      className="font-bold leading-snug mb-1"
                      style={{ color: 'var(--white-100)', fontSize: '1.05rem', letterSpacing: '-0.01em', fontFamily: 'var(--font-syne)' }}
                    >
                      {book.title}
                    </h2>
                    {book.subtitle && (
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--white-55)' }}>
                        {book.subtitle}
                      </p>
                    )}

                    <div className="mt-auto pt-4">
                      {book.status === 'published' && primary ? (
                        <>
                          <a
                            href={primary.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 w-full"
                            style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                          >
                            {t('availableOn')}
                          </a>
                          {otherEditions.length > 0 && (
                            <details className="mt-3">
                              <summary
                                className="text-xs cursor-pointer select-none"
                                style={{ color: 'var(--white-40)' }}
                              >
                                {t('otherEditions')}
                              </summary>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {otherEditions.map((edition) => (
                                  <a
                                    key={edition.country}
                                    href={edition.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[0.65rem] uppercase tracking-wide px-2.5 py-1 rounded-full transition-colors duration-200"
                                    style={{ border: '1px solid rgba(10,10,15,0.12)', color: 'var(--white-55)' }}
                                  >
                                    {edition.country}
                                  </a>
                                ))}
                              </div>
                            </details>
                          )}
                        </>
                      ) : (
                        <>
                          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
                            {t('comingSoon')}
                          </p>
                          <a
                            href={AUTHOR_PAGE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 w-full"
                            style={{ border: '1px solid rgba(10,10,15,0.15)', color: 'var(--white-65)' }}
                          >
                            {t('authorPageCta')}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </main>
  )
}
