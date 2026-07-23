'use client'
import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"/>
  </svg>
)

export default function Tiers() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="tiers" ref={ref} className="section-pad" style={{ backgroundColor: 'var(--paper)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>

            <div style={{ maxWidth: '620px', marginBottom: '3rem' }}>
              <div className="eyebrow">{c.tiersEyebrow}</div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 0.875rem' }}>
                {c.tiersH2}
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>
                {c.tiersSub}
              </p>
            </div>

            <div className="grid md:grid-cols-3" style={{ gap: '1.25rem' }}>
              {c.tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, delay: 0.08 + i * 0.1 }}
                  style={{
                    position: 'relative',
                    border: `1px solid ${tier.featured ? 'var(--green-deep)' : 'var(--rule-strong)'}`,
                    borderRadius: '12px',
                    padding: '30px 26px',
                    backgroundColor: tier.featured ? 'var(--green-deep)' : 'var(--paper-card)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {tier.badge && (
                    <span style={{ position: 'absolute', top: -13, right: 22, backgroundColor: 'var(--stamp)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '20px' }}>
                      {tier.badge}
                    </span>
                  )}

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: tier.featured ? '#8FD1AC' : 'var(--green)', marginBottom: '0.5rem' }}>
                    Entry {tier.entry}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: '20px', color: tier.featured ? 'var(--paper)' : 'var(--ink)', margin: '0 0 0.35rem' }}>
                    {tier.name}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: tier.featured ? '#D8E3DA' : 'var(--ink-soft)', marginBottom: '1.25rem' }}>
                    {tier.price}
                  </div>

                  <ul style={{ listStyle: 'none', margin: '0 0 1.75rem', padding: 0, flex: 1 }}>
                    {tier.features.map(f => (
                      <li key={f} style={{ fontFamily: 'var(--font-inter)', fontSize: '13.5px', color: tier.featured ? '#D8E3DA' : 'var(--ink-soft)', display: 'flex', gap: '9px', padding: '7px 0', borderBottom: `1px dashed ${tier.featured ? 'rgba(255,255,255,0.14)' : 'var(--rule)'}` }}>
                        <span style={{ color: tier.featured ? '#8FD1AC' : 'var(--green)' }}><Check /></span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 600,
                      fontSize: '14px',
                      padding: '11px 0',
                      borderRadius: 6,
                      border: tier.featured ? 'none' : '1px solid var(--rule-strong)',
                      backgroundColor: tier.featured ? 'var(--paper)' : 'transparent',
                      color: tier.featured ? 'var(--green-deep)' : 'var(--ink)',
                      textDecoration: 'none',
                      transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {tier.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
