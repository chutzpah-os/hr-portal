'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import Modal from '@/components/ui/Modal'
import { type CVAreaOrAll, AREA_LABELS } from '@/utils/cvAreaMap'
import { downloadTex, downloadPdf } from '@/utils/cvGenerator'
import { getUiStrings } from '@/i18n/uiStrings'

const AREA_OPTIONS: CVAreaOrAll[] = ['cyber', 'aiml', 'data', 'software', 'all']

interface CVDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVDownloadModal({ isOpen, onClose }: CVDownloadModalProps) {
  const [selectedArea, setSelectedArea] = useState<CVAreaOrAll | null>(null)
  const [loading, setLoading] = useState(false)
  const locale = useLocale()
  const ui = getUiStrings(locale)

  const handleClose = () => {
    setSelectedArea(null)
    setLoading(false)
    onClose()
  }

  const handleTex = () => {
    if (!selectedArea) return
    downloadTex(selectedArea, locale)
    handleClose()
  }

  const handlePdf = () => {
    if (!selectedArea) return
    downloadPdf(selectedArea, locale)
    handleClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {/* Header */}
      <p className="section-label mb-1">{ui.downloadCv}</p>
      <p className="text-[0.75rem] mb-8" style={{ color: 'var(--white-45)' }}>
        {ui.cvSelectArea}
      </p>

      {/* Area selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        {AREA_OPTIONS.map((area) => {
          const isSelected = selectedArea === area
          return (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className="text-left px-4 py-3 rounded-lg transition-all duration-200"
              style={{
                border: `1px solid ${isSelected ? 'var(--accent)' : 'var(--white-12, rgba(10,10,15,0.12))'}`,
                backgroundColor: isSelected ? 'var(--accent-dim)' : 'transparent',
                color: isSelected ? 'var(--accent)' : 'var(--white-60)',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--white-25)'
                  e.currentTarget.style.color = 'var(--white-80)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'rgba(10,10,15,0.12)'
                  e.currentTarget.style.color = 'var(--white-60)'
                }
              }}
            >
              <span className="text-[0.68rem] uppercase tracking-widest font-semibold">
                {AREA_LABELS[area]}
              </span>
              {area === 'all' && (
                <p className="text-[0.6rem] mt-0.5" style={{ color: 'var(--white-35)' }}>
                  {ui.cvOnePagePerArea}
                </p>
              )}
            </button>
          )
        })}
      </div>

      {/* Format selection */}
      {selectedArea && (
        <div className="flex flex-wrap gap-3 pt-4" style={{ borderTop: '1px solid rgba(10,10,15,0.08)' }}>
          <button
            onClick={handleTex}
            className="flex items-center gap-2 text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'rgb(255,255,255)',
              fontWeight: 600,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            {ui.cvDownloadTex}
          </button>

          <button
            onClick={handlePdf}
            disabled={loading}
            className="flex items-center gap-2 text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
            style={{
              border: '1px solid var(--white-20)',
              color: loading ? 'var(--white-30)' : 'var(--white-60)',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.borderColor = 'var(--white-50)'
                e.currentTarget.style.color = 'var(--white-90)'
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.borderColor = 'var(--white-20)'
                e.currentTarget.style.color = 'var(--white-60)'
              }
            }}
          >
            {loading ? ui.cvGenerating : ui.cvDownloadPdf}
          </button>
        </div>
      )}
    </Modal>
  )
}
