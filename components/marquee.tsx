'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT, SOFTWARE_CHIPS } from '@/lib/content'

export default function TrustBar() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} style={{ padding: '28px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', backgroundColor: 'var(--paper)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>

        <motion.span
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}
        >
          {c.trustLabel}
        </motion.span>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {SOFTWARE_CHIPS.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, y: 4 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: i * 0.06 }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: 'var(--ink-soft)', border: '1px solid var(--rule-strong)', borderRadius: '20px', padding: '6px 14px', backgroundColor: 'var(--paper-card)' }}
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
