'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const STEPS = [
  {
    num: '01',
    title: 'Reconnaissance & Scoping',
    description:
      'Define the attack surface. Map assets, enumerate entry points, and establish clear rules of engagement before any test begins.',
  },
  {
    num: '02',
    title: 'Threat Modeling',
    description:
      'Analyze adversary tactics. Build attack trees, map findings to MITRE ATT&CK, and prioritize risks by real-world likelihood and business impact.',
  },
  {
    num: '03',
    title: 'Testing & Exploitation',
    description:
      'Execute controlled attacks. Validate vulnerabilities, chain exploits safely, and measure true impact without disrupting production systems.',
  },
  {
    num: '04',
    title: 'Reporting & Hardening',
    description:
      'Translate findings into action. Deliver executive summaries and technical detail — with clear remediation paths and measurable security improvements.',
  },
]

export default function ProcessSection() {
  return (
    <SectionWrapper id="process" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Process
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {STEPS.map(({ num, title, description }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              className="relative p-8 rounded overflow-hidden"
              style={{
                border: '1px solid var(--white-10)',
                backgroundColor: 'rgba(248,248,252,0.85)',
              }}
            >
              <div className="process-num">{num}</div>
              <h3
                className="relative mb-3 mt-1"
                style={{ color: 'var(--white-95)', fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)' }}
              >
                {title}
              </h3>
              <p className="relative text-sm leading-relaxed" style={{ color: 'var(--white-60)' }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
