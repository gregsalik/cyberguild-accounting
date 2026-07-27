'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Audience } from '@/lib/content'

interface AudienceCtx {
  audience: Audience
  isTransitioning: boolean
  setAudience: (a: Audience) => void
}

const Ctx = createContext<AudienceCtx>({ audience: 'business', isTransitioning: false, setAudience: () => {} })

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>('business')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cg_audience') as Audience | null
      if (saved === 'business' || saved === 'firm') setAudienceState(saved)
    } catch {}
  }, [])

  const setAudience = (a: Audience) => {
    if (a === audience) return
    setIsTransitioning(true)
    setTimeout(() => {
      setAudienceState(a)
      try { localStorage.setItem('cg_audience', a) } catch {}
    }, 130)
    setTimeout(() => setIsTransitioning(false), 390)
  }

  return <Ctx.Provider value={{ audience, isTransitioning, setAudience }}>{children}</Ctx.Provider>
}

export const useAudience = () => useContext(Ctx)
