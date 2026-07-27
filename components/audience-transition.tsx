'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'

export default function AudienceTransition() {
  const { isTransitioning } = useAudience()

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="audience-flash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.22, ease: 'easeOut' } }}
          transition={{ duration: 0.11, ease: 'easeIn' }}
          style={{
            position: 'fixed',
            inset: 0,
            // z-index 48: sits below the sticky nav (50) and audience bar (49)
            // but above all page content — acts as a brief clean-slate veil
            zIndex: 48,
            backgroundColor: 'var(--paper)',
            pointerEvents: 'none',
          }}
        />
      )}
    </AnimatePresence>
  )
}
