'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'

const BusinessIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </svg>
)

const FirmIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
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
      <div style={{
        maxWidth: '1180px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '1.25rem', flexWrap: 'wrap',
      }}>

        {/* Label */}
        <span style={{
          fontFamily: 'var(--font-fraunces)', fontStyle: 'italic',
          fontWeight: 500, fontSize: '15px', color: 'rgba(246,244,236,0.85)', flexShrink: 0,
        }}>
          Which one is you?
        </span>

        {/* Toggle pill */}
        <div style={{
          display: 'inline-flex',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '999px',
          padding: '4px',
          gap: '3px',
          boxShadow: '0 0 0 1.5px rgba(176,138,62,0.35)',
        }}>
          {(['business', 'firm'] as const).map(a => {
            const isActive = audience === a

            return (
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
                  color: isActive ? 'var(--green-deep)' : 'rgba(246,244,236,0.82)',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.22s',
                  zIndex: 1,
                  overflow: 'hidden',
                }}
              >
                {/* Active pill */}
                {isActive && (
                  <motion.div
                    layoutId="audience-pill"
                    style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--paper)', borderRadius: '999px', zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Inactive button — continuous gold ring pulse + shimmer sweep */}
                {!isActive && (
                  <>
                    {/* Gold border pulse — repeats every 4s */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          'inset 0 0 0 1px rgba(176,138,62,0)',
                          'inset 0 0 0 1.5px rgba(176,138,62,0.75)',
                          'inset 0 0 0 1px rgba(176,138,62,0)',
                        ],
                        backgroundColor: [
                          'rgba(176,138,62,0)',
                          'rgba(176,138,62,0.14)',
                          'rgba(176,138,62,0)',
                        ],
                      }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.4 }}
                      style={{ position: 'absolute', inset: 0, borderRadius: '999px', zIndex: -1, pointerEvents: 'none' }}
                    />
                    {/* Shimmer sweep left-to-right */}
                    <motion.div
                      animate={{ x: ['-120%', '220%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.4 }}
                      style={{
                        position: 'absolute', top: 0, bottom: 0,
                        width: '45%', zIndex: 0, pointerEvents: 'none',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(176,138,62,0.18) 50%, transparent 100%)',
                        borderRadius: '999px',
                      }}
                    />
                  </>
                )}

                {a === 'business' ? <BusinessIcon /> : <FirmIcon />}
                {a === 'business' ? 'Business Owner' : 'Accounting Firm'}
              </button>
            )
          })}
        </div>

        {/* Permanent "switch" prompt in gold — clear CTA */}
        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(176,138,62,0.85)', flexShrink: 0,
            display: 'flex', alignItems: 'center', gap: '5px',
          }}
        >
          {/* Animated arrow pointing at the toggle */}
          <motion.span
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.4 }}
            style={{ display: 'inline-block' }}
          >
            ←
          </motion.span>
          switch views
        </motion.span>

      </div>
    </div>
  )
}
