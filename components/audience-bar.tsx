'use client'
import { motion } from 'framer-motion'
import { useAudience } from '@/context/audience-context'

const BusinessIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </svg>
)

const FirmIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-6h6v6" />
  </svg>
)

export default function AudienceBar() {
  const { audience, setAudience } = useAudience()

  return (
    <div
      style={{
        position: 'sticky',
        top: 'var(--nav-height)',
        zIndex: 49,
        backgroundColor: 'var(--green-deep)',
        borderBottom: '2px solid var(--gold)',
        padding: '18px 32px',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>

        <span style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', fontWeight: 500, fontSize: '15px', color: 'rgba(246,244,236,0.85)', flexShrink: 0 }}>
          Which one is you?
        </span>

        {/* Toggle pill */}
        <div
          style={{
            display: 'inline-flex',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '4px',
            gap: '3px',
            boxShadow: '0 0 0 2px rgba(176,138,62,0.4)',
          }}
        >
          {(['business', 'firm'] as const).map(a => (
            <button
              key={a}
              onClick={() => setAudience(a)}
              style={{
                position: 'relative',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '14px',
                padding: '10px 22px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                color: audience === a ? 'var(--green-deep)' : 'rgba(203,219,208,0.9)',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'color 0.2s',
                zIndex: 1,
              }}
            >
              {audience === a && (
                <motion.div
                  layoutId="audience-pill"
                  style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--paper)', borderRadius: '999px', zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {a === 'business' ? <BusinessIcon /> : <FirmIcon />}
              {a === 'business' ? 'Business Owner' : 'Accounting Firm'}
            </button>
          ))}
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(159,194,172,0.7)', textTransform: 'uppercase', flexShrink: 0 }}>
          Content updates instantly
        </span>
      </div>
    </div>
  )
}
