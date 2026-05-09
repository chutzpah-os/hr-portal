'use client'

import { useState } from 'react'
import CVDownloadModal from '@/components/ui/CVDownloadModal'

export default function CVDownloadTrigger() {
  const [open, setOpen] = useState(false)

  return (
    <div className="text-center py-10">
      <button onClick={() => setOpen(true)} className="cta-button text-xs">
        Download CV
      </button>
      <CVDownloadModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
