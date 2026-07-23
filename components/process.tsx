'use client'
import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

export default function Process() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="process" ref={ref} className="section-pad" style={{ backgroundColor: 'var(--paper-dim)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>

            <div style={{ maxWidth: '620px', marginBottom: '3rem' }}>
              <div className="eyebrow">{c.processEyebrow}</div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 0.875rem' }}>
                {c.processH2}
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>
                {c.processSub}
              </p>
            </div>

            {/* Ledger table */}
            <div style={{ border: '1px solid var(--rule-strong)', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--paper-card)' }}>
              {/* Header row */}
              <div className="hidden md:grid" style={{ gridTemplateColumns: '100px 1fr 1.6fr', padding: '12px 26px', fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--ink-soft)', borderBottom: '1px solid var(--rule)', backgroundColor: 'var(--paper-dim)' }}>
                <span>Entry</span><span>Step</span><span>What happens</span>
              </div>

              {c.process.map((step, i) => (
                <motion.div
                  key={step.entry}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  style={{ borderBottom: i < c.process.length - 1 ? '1px solid var(--rule)' : 'none' }}
                >
                  <div className="grid" style={{ padding: '22px 26px', gap: '10px', gridTemplateColumns: '100px 1fr 1.6fr', alignItems: 'start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--green)' }}>{step.entry}</span>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: '16px', color: 'var(--ink)', margin: 0 }}>{step.title}</h4>
                    </div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
