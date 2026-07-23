'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Audience } from '@/lib/content'

interface AudienceCtx {
  audience: Audience
  setAudience: (a: Audience) => void
}

const Ctx = createContext<AudienceCtx>({ audience: 'business', setAudience: () => {} })

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>('business')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cg_audience') as Audience | null
      if (saved === 'business' || saved === 'firm') setAudienceState(saved)
    } catch {}
  }, [])

  const setAudience = (a: Audience) => {
    setAudienceState(a)
    try { localStorage.setItem('cg_audience', a) } catch {}
  }

  return <Ctx.Provider value={{ audience, setAudience }}>{children}</Ctx.Provider>
}

export const useAudience = () => useContext(Ctx)
