'use client'

import { Suspense, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { LP_QUESTIONS, getLocalizedQuestion } from '@/data/lpQuestions'
import { getUiStrings, resolveLocale, type LocaleKey } from '@/i18n/uiStrings'
import LanguagePicker from '@/components/ui/LanguagePicker'
import QuestionCard from './QuestionCard'
import ProgressBar from './ProgressBar'

const DEFAULT_RETURN_URL = 'https://www.hanielrolemberg.com'

type Answers = Record<string, string>

// Only used when the visitor arrives with no ?locale= (i.e. not coming from
// a hanielrolemberg.com page with a locale already chosen) — falls back to
// the browser/OS language setting as a proxy for "the visitor's region."
function detectBrowserLocale(): LocaleKey {
  if (typeof navigator === 'undefined') return 'en'
  const candidates = navigator.languages && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language]
  for (const lang of candidates) {
    const base = lang?.split('-')[0]?.toLowerCase()
    if (base === 'pt' || base === 'es' || base === 'fr' || base === 'ca' || base === 'en') {
      return base
    }
  }
  return 'en'
}

function FlowInner() {
  const searchParams = useSearchParams()
  const leadEmail = searchParams.get('lead')
  const leadName = searchParams.get('name')
  const returnUrl = searchParams.get('return') || DEFAULT_RETURN_URL

  // Locale comes from the site (?locale=) when the visitor clicked "Book a
  // 1:1" somewhere on hanielrolemberg.com. Otherwise, guess from the
  // browser's language. Either way, the picker below lets them override it.
  const [locale, setLocale] = useState<LocaleKey>(() => {
    const fromUrl = searchParams.get('locale')
    return fromUrl ? resolveLocale(fromUrl) : detectBrowserLocale()
  })
  const ui = getUiStrings(locale).lp

  const questions = useMemo(
    () => LP_QUESTIONS.filter((q) => q.active !== false).map((q) => getLocalizedQuestion(q, locale)),
    [locale],
  )

  // step 0 = intro screen, 1..N = questions, N+1 = thank-you/redirecting
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [redirecting, setRedirecting] = useState(false)

  const questionIndex = step - 1
  const isOnQuestion = step >= 1 && step <= questions.length
  const current = isOnQuestion ? questions[questionIndex] : null
  const isLastQuestion = questionIndex === questions.length - 1

  async function submitAnswers() {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lp-responses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...(leadEmail ? { leadEmail } : {}),
          locale,
          answers: Object.entries(answers).map(([questionId, answer]) => ({ questionId, answer })),
        }),
      })
    } catch {
      // Lead is already captured from the modal step — don't block the redirect on a network hiccup here.
    }
  }

  async function handleNext() {
    if (!isLastQuestion) {
      setStep((s) => s + 1)
      return
    }
    setStep(questions.length + 1)
    await submitAnswers()
    setTimeout(() => {
      setRedirecting(true)
      setTimeout(() => {
        window.location.href = returnUrl
      }, 1200)
    }, 1400)
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1))
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16" style={{ backgroundColor: 'rgb(255,255,255)' }}>
      <div className="fixed top-5 right-5 z-10">
        <LanguagePicker locale={locale} onSwitch={(l) => setLocale(resolveLocale(l))} />
      </div>
      <div className="w-full max-w-xl">
        {step === 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <h1
              className="mb-4 font-bold leading-tight"
              style={{ color: 'var(--white-100)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.02em', fontFamily: 'var(--font-syne)' }}
            >
              {ui.introTitle(leadName ?? '')}
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--white-65)' }}>
              {ui.introBody}
            </p>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
              style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {ui.introCta}
            </button>
          </motion.div>
        )}

        {isOnQuestion && current && (
          <>
            <ProgressBar current={questionIndex} total={questions.length} />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <QuestionCard
                  question={current}
                  value={answers[current.id] ?? ''}
                  onChange={(v) => setAnswers((a) => ({ ...a, [current.id]: v }))}
                  onNext={handleNext}
                  onBack={handleBack}
                  nextLabel={isLastQuestion ? ui.submit : ui.next}
                  backLabel={ui.back}
                  videoWaitingLabel={ui.videoWaiting}
                />
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {step === questions.length + 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <p className="text-base font-medium" style={{ color: 'var(--accent)' }}>
              {redirecting ? ui.redirecting : ui.thankYou}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default function QuestionFlow() {
  return (
    <Suspense fallback={null}>
      <FlowInner />
    </Suspense>
  )
}
