'use client'
import { AudienceProvider } from '@/context/audience-context'

export function Providers({ children }: { children: React.ReactNode }) {
  return <AudienceProvider>{children}</AudienceProvider>
}
