'use client'

import { useState } from 'react'
import type { ChallengeFAQ } from '@/data/challenges'

type LocaleKey = 'pt' | 'es' | 'fr' | 'ca'

function getLocalized(faq: ChallengeFAQ, locale: string) {
  const t = faq[locale as LocaleKey]
  return t ?? { question: faq.question, answer: faq.answer }
}

export default function FAQ({
  faqs,
  locale,
  label,
}: {
  faqs: ChallengeFAQ[]
  locale: string
  label: string
}) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mb-12">
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-6"
        style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
      >
        {label}
      </div>
      <div className="space-y-0 divide-y divide-[rgba(10,10,15,0.06)]">
        {faqs.map((faq, i) => {
          const item = getLocalized(faq, locale)
          const isOpen = open === i
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between py-5 text-left group"
              >
                <span
                  className="text-sm font-medium pr-4 transition-colors"
                  style={{ color: isOpen ? 'var(--accent)' : 'var(--white-75)', fontFamily: 'var(--font-syne)' }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 mt-0.5 text-base transition-transform duration-200"
                  style={{
                    color: 'var(--white-35)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: 'var(--white-60)' }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
