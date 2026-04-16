'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import { type CVAreaOrAll, AREA_LABELS } from '@/utils/cvAreaMap'
import { downloadTex, downloadPdf } from '@/utils/cvGenerator'

const AREA_OPTIONS: CVAreaOrAll[] = ['cyber', 'aiml', 'data', 'software', 'all']

interface CVDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVDownloadModal({ isOpen, onClose }: CVDownloadModalProps) {
  const [selectedArea, setSelectedArea] = useState<CVAreaOrAll | null>(null)
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    setSelectedArea(null)
    setLoading(false)
    onClose()
  }

  const handleTex = () => {
    if (!selectedArea) return
    downloadTex(selectedArea)
    handleClose()
  }

  const handlePdf = () => {
    if (!selectedArea) return
    downloadPdf(selectedArea)
    handleClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2
        className="text-xs uppercase tracking-widest mb-6"
        style={{ color: 'var(--white-50)' }}
      >
        Download CV
      </h2>

      {/* Step 1 — Area selection */}
      <p className="text-sm mb-4" style={{ color: 'var(--white-70)' }}>
        Select the focus area for your CV:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {AREA_OPTIONS.map((area) => {
          const isSelected = selectedArea === area
          return (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className="text-left px-4 py-3 rounded transition-all duration-200"
              style={{
                border: `1px solid ${isSelected ? 'var(--white-60)' : 'var(--white-15)'}`,
                backgroundColor: isSelected ? 'var(--white-10)' : 'transparent',
                color: isSelected ? 'var(--white-100)' : 'var(--white-50)',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--white-30)'
                  e.currentTarget.style.color = 'var(--white-80)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--white-15)'
                  e.currentTarget.style.color = 'var(--white-50)'
                }
              }}
            >
              <span className="text-xs uppercase tracking-widest font-medium">
                {AREA_LABELS[area]}
              </span>
              {area === 'all' && (
                <p className="text-[0.65rem] mt-1" style={{ color: 'var(--white-35)' }}>
                  One page per area
                </p>
              )}
            </button>
          )
        })}
      </div>

      {/* Step 2 — Format selection (shown after area is picked) */}
      {selectedArea && (
        <div>
          <p className="text-sm mb-4" style={{ color: 'var(--white-70)' }}>
            Choose format:
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleTex}
              className="flex items-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-widest transition-colors duration-200"
              style={{
                border: '1px solid var(--white-50)',
                color: 'var(--white-90)',
                backgroundColor: 'var(--white-10)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--white-15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--white-10)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Download .tex
            </button>

            <button
              onClick={handlePdf}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-widest transition-colors duration-200"
              style={{
                border: '1px solid var(--white-25)',
                color: loading ? 'var(--white-35)' : 'var(--white-70)',
                backgroundColor: 'transparent',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.borderColor = 'var(--white-50)'
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.borderColor = 'var(--white-25)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              {loading ? 'Generating...' : 'Download .pdf'}
            </button>
          </div>
        </div>
      )}
    </Modal>
  )
}
