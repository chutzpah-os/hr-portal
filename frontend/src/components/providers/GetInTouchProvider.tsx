'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import GetInTouchModal from '@/components/ui/GetInTouchModal'

interface GetInTouchContextValue {
  openGetInTouch: () => void
}

const GetInTouchContext = createContext<GetInTouchContextValue | null>(null)

export function GetInTouchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <GetInTouchContext.Provider value={{ openGetInTouch: () => setIsOpen(true) }}>
      {children}
      <GetInTouchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </GetInTouchContext.Provider>
  )
}

export function useGetInTouch(): GetInTouchContextValue {
  const ctx = useContext(GetInTouchContext)
  if (!ctx) throw new Error('useGetInTouch must be used within a GetInTouchProvider')
  return ctx
}
