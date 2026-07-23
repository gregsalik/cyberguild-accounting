'use client'
import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'
import type { ServiceItem } from '@/lib/content'

const ICON_PATHS: Record<ServiceItem['icon'], React.ReactNode> = {
  book:    <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/></>,
  payroll: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>,
  doc:     <><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M9 12h6M9 16h6"/></>,
  house:   <path d="M3 10l9-7 9 7M5 10v10h14V10"/>,
  chart:   <path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-7"/>,
  people:  <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></>,
}

function SvcIcon({ type }: { type: ServiceItem['icon'] }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      {ICON_PATHS[type]}
    </svg>
  )
}

export default function Services() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" ref={ref} className="section-pad" style={{ backgroundColor: 'var(--paper-dim)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <div style={{ maxWidth: '620px', marginBottom: '3rem' }}>
              <div className="eyebrow">{c.servicesEyebrow}</div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 0.875rem' }}>
                {c.servicesH2}
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>
                {c.servicesSub}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: '12px', overflow: 'hidden' }}>
              {c.services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.38, delay: 0.06 + i * 0.07 }}
                  style={{ backgroundColor: 'var(--paper-card)', padding: '28px 26px', transition: 'background-color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--paper-card)')}
                >
                  <div style={{ color: 'var(--green)', marginBottom: '1rem' }}><SvcIcon type={svc.icon} /></div>
                  <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: '17px', color: 'var(--ink)', margin: '0 0 0.5rem' }}>{svc.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.65 }}>{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
