'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.min(100, Math.round(((current + 1) / total) * 100)) : 0

  return (
    <div className="mb-10">
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: '4px', backgroundColor: 'var(--white-10)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ height: '100%', backgroundColor: 'var(--accent)', borderRadius: '9999px' }}
        />
      </div>
      <p
        className="text-[0.6rem] uppercase tracking-widest mt-2"
        style={{ color: 'var(--white-35)' }}
      >
        {current + 1} / {total}
      </p>
    </div>
  )
}
