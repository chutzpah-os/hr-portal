'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getUiStrings } from '@/i18n/uiStrings'

const RESEARCH_PLACEHOLDER: Record<string, { heading: string; body: string; button: string }> = {
  en: {
    heading: 'Research in Progress',
    body: 'All research projects are currently in active development. Detailed information is available upon request — schedule a call to learn more.',
    button: 'Schedule a meeting',
  },
  pt: {
    heading: 'Pesquisas em Andamento',
    body: 'Todos os projetos de pesquisa estão atualmente em desenvolvimento ativo. Informações detalhadas disponíveis sob solicitação — agende uma conversa para saber mais.',
    button: 'Agendar reunião',
  },
  es: {
    heading: 'Investigaciones en Curso',
    body: 'Todos los proyectos de investigación están actualmente en desarrollo activo. La información detallada está disponible bajo solicitud — agende una llamada para saber más.',
    button: 'Agendar reunión',
  },
  fr: {
    heading: 'Recherches en Cours',
    body: 'Tous les projets de recherche sont actuellement en développement actif. Des informations détaillées sont disponibles sur demande — planifiez un entretien pour en savoir plus.',
    button: 'Planifier un entretien',
  },
  ca: {
    heading: 'Recerques en Curs',
    body: 'Tots els projectes de recerca estan actualment en desenvolupament actiu. La informació detallada està disponible sota petició — concerteu una reunió per saber-ne més.',
    button: 'Concertar una reunió',
  },
}

export default function ResearchesSection() {
  const locale = useLocale()
  const ui = getUiStrings(locale)
  const placeholder = RESEARCH_PLACEHOLDER[locale] ?? RESEARCH_PLACEHOLDER['en']

  return (
    <SectionWrapper id="researches" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.p
          className="section-label mb-10"
          style={{ color: 'var(--white-45)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {ui.researches}
        </motion.p>

        <motion.div
          className="rounded-2xl flex flex-col items-start gap-4 px-8 py-8"
          style={{
            border: '1px solid var(--white-10)',
            backgroundColor: 'rgba(248,248,252,0.92)',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'rgba(212,119,90,0.10)' }}
          >
            <span className="text-[0.55rem] font-semibold uppercase" style={{ color: 'var(--accent)' }}>ON</span>
          </div>

          <div className="flex-1">
            <h3
              className="font-semibold mb-2 leading-snug"
              style={{ color: 'var(--white-90)', fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}
            >
              {placeholder.heading}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--white-50)', maxWidth: '52ch' }}>
              {placeholder.body}
            </p>
            <a
              href="mailto:hrolemberg.engineer@gmail.com?subject=Research%20Inquiry"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-widest px-4 py-2 rounded-lg transition-opacity duration-200 hover:opacity-70"
              style={{ color: 'var(--white-70)', border: '1px solid var(--white-15)' }}
            >
              {placeholder.button} →
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
