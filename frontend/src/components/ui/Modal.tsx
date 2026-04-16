'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen || typeof window === 'undefined') return null

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--black-80)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded"
        style={{
          backgroundColor: 'rgb(8, 8, 8)',
          border: '1px solid var(--white-25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-lg leading-none transition-colors z-10"
          style={{ color: 'var(--white-50)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-100)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-50)')}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="p-5 pr-10 sm:p-8 sm:pr-12">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
