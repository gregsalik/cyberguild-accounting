'use client'
import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

export default function Positioning() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '80px 0 60px', backgroundColor: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={audience}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(20px, 2.4vw, 28px)',
              lineHeight: 1.5,
              color: 'var(--ink)',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            {c.positioning.pre}{' '}
            <span style={{ color: 'var(--green)', fontStyle: 'normal', fontWeight: 600 }}>CG Ledgers</span>{' '}
            {c.positioning.post}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}
