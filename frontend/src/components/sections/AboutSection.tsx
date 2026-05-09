'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Image from 'next/image'


export default function AboutSection() {
  return (
    <SectionWrapper id="about" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          About
        </motion.p>
        {/* Bio + image */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="space-y-6 max-w-xl">
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                I started working at 7 — selling crafts on the streets of Aracaju alongside my father.
                At 16, cancer entered my life. Not as a pause, but as a reset: a commitment to spend
                whatever time I had on problems that truly matter. I failed exams. Went broke. Watched
                people I cared about lose their way. Every fall confirmed the same thing: passion is
                necessary, but it&apos;s never enough.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                That conviction sent me through two degrees — Public Administration and Computer Science —
                and into four disciplines: software engineering, data systems, cybersecurity, and AI/ML.
                Not because I couldn&apos;t choose. Because the most interesting problems don&apos;t fit
                inside one box.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--white-70)' }}>
                My mission: impact one billion lives by 2035.{' '}
                <span style={{ color: 'var(--white-50)' }}>1b2035</span> is the filter I apply to every
                decision I make — and the reason I built the{' '}
                <a
                  href="https://problemsolverfoundation.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{
                    color: 'var(--white-90)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  Problem Solver Foundation
                </a>
                {' '}— a community where people don&apos;t just study problems. They solve them.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            style={{ width: 'clamp(260px, 30vw, 360px)', height: 'clamp(300px, 40vw, 460px)', position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(10,10,15,0.10)' }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <Image
              src="/images/hanielandhisfather.png"
              alt="Haniel and his father"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  )
}
