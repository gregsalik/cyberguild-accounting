'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const NAV_LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'Engagements',  href: '#tiers' },
  { label: 'How It Works', href: '#process' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#contact' },
]

export default function CtaSection() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section id="contact" ref={ref} style={{ padding: '24px 0 80px', backgroundColor: 'var(--paper)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              backgroundColor: 'var(--green-deep)',
              borderRadius: '16px',
              padding: 'clamp(2.5rem, 6vh, 3.5rem) clamp(2rem, 5vw, 3.5rem)',
              position: 'relative',
              overflow: 'hidden',
              display: 'grid',
              gap: '3rem',
            }}
            className="md:grid-cols-2"
          >
            <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 27px, rgba(255,255,255,0.04) 27px 28px)', pointerEvents: 'none' }} />

            {/* Left copy */}
            <AnimatePresence mode="wait">
              <motion.div key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8FD1AC', display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                  <span style={{ width: 16, height: 1, backgroundColor: '#8FD1AC', display: 'inline-block' }} />
                  Get Started
                </div>
                <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 'clamp(24px,3vw,34px)', color: 'var(--paper)', letterSpacing: '-0.02em', margin: '0 0 1rem', lineHeight: 1.15 }}>
                  {c.ctaH2}
                </h2>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#D8E3DA', lineHeight: 1.65, margin: 0 }}>
                  {c.ctaLede}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Right: form */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="thanks" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '220px', textAlign: 'center', gap: '1rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: 'rgba(143,209,172,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden><path d="M4 11l5 5 9-9" stroke="#8FD1AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', fontSize: '18px', color: 'var(--paper)', margin: 0 }}>Request received.</p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13.5px', color: '#D8E3DA', margin: 0 }}>We&apos;ll be in touch within one business day.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={e => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { type: 'text',  ph: 'Name',                        req: true  },
                      { type: 'email', ph: 'Work email',                   req: true  },
                      { type: 'text',  ph: c.ctaCompanyPlaceholder,        req: false },
                    ].map(f => (
                      <input key={f.ph} type={f.type} placeholder={f.ph} required={f.req}
                        style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 7, padding: '11px 14px', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(143,209,172,0.55)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                      />
                    ))}
                    <textarea placeholder={c.ctaMessagePlaceholder} rows={3}
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 7, padding: '11px 14px', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '14px', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(143,209,172,0.55)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                    />
                    <button type="submit"
                      style={{ backgroundColor: 'var(--paper)', color: 'var(--green-deep)', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '14.5px', padding: '13px', borderRadius: 6, border: 'none', cursor: 'pointer', transition: 'background-color 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--paper)')}
                    >
                      {c.ctaButton}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--rule)', padding: '2.5rem 0', backgroundColor: 'var(--paper)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div style={{ width: 26, height: 26, borderRadius: 5, backgroundColor: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--paper)', fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 13 }}>G</div>
              <b style={{ fontFamily: 'var(--font-fraunces)', fontSize: '15px', color: 'var(--ink)' }}>Cyberguild Accounting</b>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-soft)', marginBottom: '4px' }}>A division of Cyberguild · cyberguild.dev</div>
            <AnimatePresence mode="wait">
              <motion.div key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-soft)', opacity: 0.7 }}>
                {c.footTagline}
              </motion.div>
            </AnimatePresence>
          </div>
          <nav style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '13.5px', color: 'var(--ink-soft)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  )
}
