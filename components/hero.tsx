'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

const ease = [0.25, 0.46, 0.45, 0.94] as const

function LedgerCard({ audience }: { audience: 'business' | 'firm' }) {
  const c = CONTENT[audience]
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 6500)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{
      backgroundColor: 'var(--paper-card)',
      border: '1px solid var(--rule-strong)',
      borderRadius: '12px',
      boxShadow: 'var(--shadow)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 22px', borderBottom: '1px solid var(--rule)',
        backgroundColor: 'var(--paper-dim)',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--green)', display: 'inline-block' }} />
          <AnimatePresence mode="wait">
            <motion.span key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {c.ledgerLabel}
            </motion.span>
          </AnimatePresence>
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', color: 'var(--ink-soft)', opacity: 0.6 }}>Live</span>
      </div>

      {/* Rows */}
      <AnimatePresence mode="wait">
        <motion.div key={`rows-${audience}-${tick}`}>
          {c.ledgerRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.3 + i * 0.28, ease }}
              style={{
                display: 'grid',
                gridTemplateColumns: '54px 1fr 90px',
                gap: '10px',
                padding: '11px 22px',
                borderBottom: '1px dashed var(--rule)',
                fontSize: '13px',
                color: 'var(--ink)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-soft)' }}>{row.date}</span>
              <span>{row.desc}</span>
              <span style={{
                textAlign: 'right',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 500,
                color: row.type === 'credit' ? 'var(--green)' : row.type === 'debit' ? 'var(--stamp)' : 'var(--ink-soft)',
              }}>
                {row.amt}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Balance */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 22px', backgroundColor: 'var(--paper-dim)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-soft)' }}>
          {audience === 'business' ? 'Balance vs. bank' : 'Files ready for review'}
        </span>
        <b style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--ink)' }}>
          {audience === 'business' ? '£0.00' : '2 / 2'}
        </b>
        <motion.span
          key={`stamp-${audience}-${tick}`}
          initial={{ opacity: 0, scale: 2.2, rotate: -7 }}
          animate={{ opacity: 1, scale: 1, rotate: -7 }}
          transition={{ duration: 0.4, delay: 1.7, ease: [0.2, 1.6, 0.4, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            letterSpacing: '0.09em',
            fontSize: '11px',
            textTransform: 'uppercase',
            color: 'var(--stamp)',
            border: '2px solid var(--stamp)',
            borderRadius: '5px',
            padding: '4px 10px',
            display: 'inline-block',
            mixBlendMode: 'multiply',
          }}
        >
          {audience === 'business' ? 'Balanced' : 'Delivered'}
        </motion.span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { audience } = useAudience()
  const c = CONTENT[audience]

  return (
    <section style={{ backgroundColor: 'var(--paper)', padding: '72px 0 72px' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px' }}>
        <div className="grid lg:grid-cols-2" style={{ gap: '64px', alignItems: 'center' }}>

          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
            >
              <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>{c.heroEyebrow}</div>

              <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 1.25rem' }}>
                {c.heroH1.pre}{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--green)', fontWeight: 500 }}>{c.heroH1.em}</em>
                <br />{c.heroH1.post}
              </h1>

              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', color: 'var(--ink-soft)', maxWidth: '46ch', lineHeight: 1.65, margin: '0 0 1.75rem' }}>
                {c.heroLede}
              </p>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <a
                  href="#contact"
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '14.5px', padding: '12px 22px', borderRadius: 6, backgroundColor: 'var(--green-deep)', color: 'var(--paper)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.15s, box-shadow 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                >
                  {c.navCta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" /></svg>
                </a>
                <a
                  href="#process"
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '14.5px', padding: '11px 20px', borderRadius: 6, border: '1px solid var(--rule-strong)', color: 'var(--ink)', textDecoration: 'none', transition: 'border-color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--rule-strong)')}
                >
                  See how it works
                </a>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {c.heroNote.map(n => (
                  <span key={n} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--green)', display: 'inline-block', flexShrink: 0 }} />
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: ledger card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
            className="hidden lg:block"
          >
            <LedgerCard audience={audience} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
