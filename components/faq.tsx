'use client'
import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

const ease = [0.25, 0.46, 0.45, 0.94] as const

function FaqRow({ q, a, open, onToggle, i, inView }: {
  q: string; a: string; open: boolean; onToggle: () => void; i: number; inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.38, delay: 0.05 + i * 0.055, ease }}
      style={{
        borderBottom: '1px solid var(--rule)',
        borderLeft: `3px solid ${open ? 'var(--green)' : 'transparent'}`,
        backgroundColor: open ? 'rgba(47,93,69,0.04)' : 'transparent',
        transition: 'background-color 0.25s, border-left-color 0.25s',
      }}
    >
      <button
        onClick={onToggle}
        style={{ width: '100%', display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left', padding: '1.35rem 1.1rem', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: open ? 'var(--green)' : 'var(--rule-strong)', transition: 'color 0.22s', minWidth: '1.5rem', marginTop: 3, flexShrink: 0 }}>
          {String(i + 1).padStart(2, '0')}
        </span>
        <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15.5px', lineHeight: 1.45, color: 'var(--ink)', flex: 1 }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', color: open ? 'var(--green)' : 'var(--rule-strong)', transition: 'color 0.22s', flexShrink: 0, marginTop: 2, lineHeight: 1 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.38, ease }, opacity: { duration: 0.2, delay: 0.06 } }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14.5px', color: 'var(--ink-soft)', lineHeight: 1.75, maxWidth: '58ch', padding: '0 1.1rem 1.5rem 3.3rem', margin: 0 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="section-pad" style={{ backgroundColor: 'var(--paper-dim)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px' }}>
        <div className="grid md:grid-cols-5" style={{ gap: '3rem', alignItems: 'start' }}>

          {/* Left — sticky headline */}
          <div className="md:col-span-2" style={{ position: 'sticky', top: 'calc(var(--nav-height) + 68px)' }}>
            <div className="eyebrow">Questions</div>
            <AnimatePresence mode="wait">
              <motion.h2
                key={audience}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 'clamp(24px,3vw,32px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: '0 0 1rem', lineHeight: 1.1 }}
              >
                {c.faqH2}
              </motion.h2>
            </AnimatePresence>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14.5px', color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: '28ch', margin: '0 0 1.5rem' }}>
              The dot on the left tells you when an answer opens.
            </p>
            <a
              href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '14px', padding: '10px 20px', borderRadius: 6, backgroundColor: 'var(--green-deep)', color: 'var(--paper)', textDecoration: 'none', transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {c.navCta}
            </a>
          </div>

          {/* Right — accordion */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <div style={{ border: '1px solid var(--rule-strong)', backgroundColor: 'var(--paper-card)', borderTop: '2px solid var(--green)' }}>
                  {c.faq.map((item, i) => (
                    <FaqRow
                      key={i}
                      q={item.q} a={item.a}
                      open={open === i}
                      onToggle={() => setOpen(open === i ? null : i)}
                      i={i} inView={inView}
                    />
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--ink-soft)', marginTop: '1rem', opacity: 0.7 }}>
                  More questions?{' '}
                  <a href="mailto:hello@cyberguild.co" style={{ color: 'var(--green)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                    Email us directly →
                  </a>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
