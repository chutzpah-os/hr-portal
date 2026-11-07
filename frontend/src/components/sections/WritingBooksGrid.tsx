'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { AUTHOR_PAGE_URL_BY_LANGUAGE, amazonEditionLinks, type Book, type BookLanguageCode, type BookTopic } from '@/data/writing'

const LANGUAGE_KEYS: Record<BookLanguageCode, string> = {
  pt: 'languagePt',
  en: 'languageEn',
}

const TOPIC_KEYS: Record<BookTopic, string> = {
  power: 'topicPower',
  communication: 'topicCommunication',
  languages: 'topicLanguages',
}

function FilterPill({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200"
      style={{
        border: `1px solid ${active ? 'var(--accent)' : 'rgba(10,10,15,0.12)'}`,
        backgroundColor: active ? 'var(--accent-dim)' : 'transparent',
        color: active ? 'var(--accent)' : 'var(--white-55)',
      }}
    >
      {label}
    </button>
  )
}

export default function WritingBooksGrid({ books }: { books: Book[] }) {
  const t = useTranslations('writing')
  const [language, setLanguage] = useState<BookLanguageCode | 'all'>('all')
  const [topic, setTopic] = useState<BookTopic | 'all'>('all')

  const languages = useMemo(
    () => Array.from(new Set(books.map((b) => b.languageCode))),
    [books],
  )
  const topics = useMemo(
    () => Array.from(new Set(books.flatMap((b) => b.topics))),
    [books],
  )

  const filtered = books.filter(
    (b) => (language === 'all' || b.languageCode === language) && (topic === 'all' || b.topics.includes(topic)),
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        <FilterPill active={language === 'all'} label={t('filterAll')} onClick={() => setLanguage('all')} />
        {languages.map((code) => (
          <FilterPill
            key={code}
            active={language === code}
            label={t(LANGUAGE_KEYS[code])}
            onClick={() => setLanguage(code)}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-10">
        <FilterPill active={topic === 'all'} label={t('filterAll')} onClick={() => setTopic('all')} />
        {topics.map((key) => (
          <FilterPill
            key={key}
            active={topic === key}
            label={t(TOPIC_KEYS[key])}
            onClick={() => setTopic(key)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-20 rounded-2xl"
          style={{ border: '1px dashed rgba(10,10,15,0.12)' }}
        >
          <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
            {t('noResults')}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {filtered.map((book) => {
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
                    alt={book.subtitle ? `${book.title} — ${book.subtitle}` : book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                <div className="flex flex-col flex-1 p-4">
                  <p className="text-[0.55rem] uppercase tracking-widest mb-1.5" style={{ color: 'var(--white-35)' }}>
                    {book.language}
                  </p>
                  <h2
                    className="font-bold leading-snug mb-3"
                    style={{ color: 'var(--white-100)', fontSize: '0.85rem', letterSpacing: '-0.01em', fontFamily: 'var(--font-syne)' }}
                  >
                    {book.title}
                  </h2>

                  <div className="mt-auto pt-2">
                    {book.status === 'published' && primary ? (
                      <>
                        <a
                          href={primary.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-center leading-tight text-[0.6rem] uppercase tracking-wide px-3 py-2 rounded-full transition-all duration-200 w-full"
                          style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                        >
                          {t('availableOn')}
                        </a>
                        {otherEditions.length > 0 && (
                          <details className="mt-2">
                            <summary
                              className="text-[0.6rem] cursor-pointer select-none"
                              style={{ color: 'var(--white-40)' }}
                            >
                              {t('otherEditions')}
                            </summary>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {otherEditions.map((edition) => (
                                <a
                                  key={edition.country}
                                  href={edition.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[0.6rem] uppercase tracking-wide px-2 py-0.5 rounded-full transition-colors duration-200"
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
                        <p className="text-[0.6rem] uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                          {t('comingSoon')}
                        </p>
                        <a
                          href={AUTHOR_PAGE_URL_BY_LANGUAGE[book.languageCode]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-center leading-tight text-[0.6rem] uppercase tracking-wide px-3 py-2 rounded-full transition-all duration-200 w-full"
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
  )
}
