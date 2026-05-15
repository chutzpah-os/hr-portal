'use client'

import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const SUMMARY = [
  { label: 'Work History',   count: portfolioData.experience.length },
  { label: 'Volunteering',   count: portfolioData.volunteering.length },
  { label: 'Projects',       count: Object.values(portfolioData.projects).flat().length },
  { label: 'Researches',     count: portfolioData.researches.length },
  { label: 'Education',      count: portfolioData.education.length },
  { label: 'Languages',      count: portfolioData.languages.length },
  { label: 'Certifications', count: portfolioData.certifications.length },
  { label: 'Skills',         count: portfolioData.skills.reduce((s, c) => s + c.items.length, 0) },
]

const total = SUMMARY.reduce((s, { count }) => s + count, 0)

export default function PortfolioSection({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="portfolio">
      {/* ── Header bar ── */}
      <div
        className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between"
        style={{ paddingTop: '5rem', paddingBottom: '0.75rem' }}
      >
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Portfolio
        </motion.p>

        <motion.button
          onClick={() => setExpanded((v) => !v)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-[0.6rem] uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-200"
          style={{
            border: '1px solid var(--white-15)',
            color: 'var(--white-45)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--white-40)'
            e.currentTarget.style.color = 'var(--white-80)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--white-15)'
            e.currentTarget.style.color = 'var(--white-45)'
          }}
        >
          {expanded ? (
            <><span>Collapse</span><span>↑</span></>
          ) : (
            <><span>Expand</span><span>↓</span></>
          )}
        </motion.button>
      </div>

      {/* ── States ── */}
      <AnimatePresence mode="wait">
        {!expanded ? (
          /* ── Collapsed: editorial index card ── */
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-content mx-auto px-6 md:px-10"
            style={{ paddingBottom: '5rem' }}
          >
            <div
              className="rounded-3xl px-5 py-7 md:px-10 md:py-8"
              style={{
                border: '1px solid rgba(10,10,15,0.08)',
                backgroundColor: 'rgba(10,10,15,0.025)',
              }}
            >
              {/* Index rows */}
              {SUMMARY.map(({ label, count }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-baseline py-3"
                  style={{
                    borderBottom:
                      i < SUMMARY.length - 1
                        ? '1px solid rgba(10,10,15,0.05)'
                        : '1px solid rgba(10,10,15,0.10)',
                  }}
                >
                  <span
                    className="text-sm font-medium shrink-0"
                    style={{ color: 'var(--white-80)', minWidth: 'clamp(6rem, 18vw, 9rem)' }}
                  >
                    {label}
                  </span>

                  {/* Dot leader */}
                  <span
                    className="flex-1 mx-4"
                    style={{
                      borderBottom: '1px dotted rgba(10,10,15,0.18)',
                      marginBottom: '5px',
                    }}
                  />

                  <span
                    className="text-sm tabular-nums shrink-0"
                    style={{
                      color: 'var(--white-40)',
                      fontVariantNumeric: 'tabular-nums',
                      fontFamily: 'var(--font-mono, monospace)',
                    }}
                  >
                    {String(count).padStart(2, '0')}
                  </span>
                </motion.div>
              ))}

              {/* Total row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: SUMMARY.length * 0.05 + 0.1 }}
                className="flex items-center justify-end gap-5 pt-5"
              >
                <span
                  className="text-[0.6rem] uppercase tracking-widest"
                  style={{ color: 'var(--white-30)' }}
                >
                  Total
                </span>
                <span
                  className="text-2xl font-bold tabular-nums leading-none"
                  style={{
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-syne, var(--font-inter))',
                  }}
                >
                  {total}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* ── Expanded: full content ── */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
