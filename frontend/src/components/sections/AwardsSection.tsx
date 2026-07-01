'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getPortfolioData } from '@/data/portfolio'

export default function AwardsSection() {
  const locale = useLocale()
  const isPt = locale === 'pt'
  const awards = getPortfolioData(locale).awards

  return (
    <SectionWrapper id="awards" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <p className="section-label mb-10" style={{ color: 'var(--white-45)' }}>{isPt ? 'Premiações' : 'Awards'}</p>

        {awards.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center py-16 rounded-2xl"
            style={{ border: '1px dashed rgba(10,10,15,0.10)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(212,119,90,0.08)', border: '1px solid rgba(212,119,90,0.18)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
              {isPt ? 'Ainda sem premiações' : 'No awards yet'}
            </p>
          </motion.div>
        ) : (
          <div>
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-6"
                style={{ borderTop: '1px solid rgba(10,10,15,0.07)' }}
              >
                <div className="sm:w-20 flex-shrink-0 pt-0.5">
                  <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
                    {award.year}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--white-90)', letterSpacing: '-0.01em' }}>
                    {award.title}
                  </p>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                    {award.issuer}
                  </p>
                  {award.description && (
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--white-55)' }}>
                      {award.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
