'use client'

import { useEffect, useState } from 'react'
import type { LpQuestion } from '@/data/lpQuestions'
import GatedYouTubePlayer from './GatedYouTubePlayer'

const VIDEO_GATE_SECONDS = 60

interface QuestionCardProps {
  question: LpQuestion
  value: string
  onChange: (value: string) => void
  onNext: () => void
  onBack: () => void
  nextLabel: string
  backLabel: string
  videoWaitingLabel: (secondsLeft: number) => string
}

export default function QuestionCard({
  question,
  value,
  onChange,
  onNext,
  onBack,
  nextLabel,
  backLabel,
  videoWaitingLabel,
}: QuestionCardProps) {
  const isVideo = question.type === 'video'
  const [secondsLeft, setSecondsLeft] = useState(isVideo ? VIDEO_GATE_SECONDS : 0)

  useEffect(() => {
    if (!isVideo) return
    setSecondsLeft(VIDEO_GATE_SECONDS)
    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [isVideo, question.id])

  const canAdvance = isVideo ? secondsLeft <= 0 : question.type === 'choice' ? !!value : true

  return (
    <div>
      <h1
        className="mb-6 font-bold leading-tight"
        style={{
          color: 'var(--white-100)',
          fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
          letterSpacing: '-0.02em',
          fontFamily: 'var(--font-syne)',
        }}
      >
        {question.prompt}
      </h1>

      {question.type === 'text' && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          rows={3}
          autoFocus
          className="w-full text-base px-4 py-3 rounded-xl outline-none transition-all duration-200 placeholder:opacity-35 resize-none"
          style={{ border: '1px solid rgba(10,10,15,0.12)', backgroundColor: 'rgb(255,255,255)', color: 'var(--white-90)' }}
          onFocus={(e) => (e.currentTarget.style.border = '1px solid rgba(212,119,90,0.45)')}
          onBlur={(e) => (e.currentTarget.style.border = '1px solid rgba(10,10,15,0.12)')}
        />
      )}

      {question.type === 'choice' && (
        <div className="flex flex-col gap-2">
          {question.choices?.map((choice) => {
            const selected = value === choice.value
            return (
              <button
                key={choice.value}
                type="button"
                onClick={() => onChange(choice.value)}
                className="text-left text-sm px-4 py-3 rounded-xl transition-all duration-200"
                style={{
                  border: `1px solid ${selected ? 'var(--accent)' : 'rgba(10,10,15,0.12)'}`,
                  backgroundColor: selected ? 'var(--accent-dim)' : 'rgb(255,255,255)',
                  color: selected ? 'var(--accent)' : 'var(--white-80)',
                }}
              >
                {choice.label}
              </button>
            )
          })}
        </div>
      )}

      {isVideo && (
        <div>
          <div className="mb-3">
            <GatedYouTubePlayer videoUrl={question.videoUrl ?? ''} />
          </div>
          {secondsLeft > 0 && (
            <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
              {videoWaitingLabel(secondsLeft)}
            </p>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 mt-8">
        <button
          type="button"
          onClick={onBack}
          className="text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
          style={{ border: '1px solid rgba(10,10,15,0.15)', color: 'var(--white-65)' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,10,15,0.15)'; e.currentTarget.style.color = 'var(--white-65)' }}
        >
          {backLabel}
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canAdvance}
          className="text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200 disabled:opacity-40"
          style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
          onMouseEnter={(e) => { if (canAdvance) e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={(e) => { if (canAdvance) e.currentTarget.style.opacity = '1' }}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  )
}
