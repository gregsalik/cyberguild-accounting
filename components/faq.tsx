'use client'
import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const FAQS = [
  {
    q: 'How quickly can we get started?',
    a: 'Most practices receive their first completed work within two weeks of signing. We begin with a discovery call to map your workflows, software, and quality standards — then allocate your dedicated team and begin work immediately. There\'s no lengthy onboarding process that delays your practice.',
  },
  {
    q: 'Will my clients know I\'m using an outsourcer?',
    a: 'No. Every deliverable leaves under your firm\'s name and branding. We work as an invisible extension of your team. Your client relationships stay yours — we simply ensure the work behind them is handled with precision and efficiency.',
  },
  {
    q: 'What accounting software do you work with?',
    a: 'We work across all major platforms including Xero, QuickBooks, Sage, IRIS, FreeAgent, and Dext. Our team are trained and proficient in the tools you already use — there\'s no need to change your software stack to work with us.',
  },
  {
    q: 'How do you protect our client data?',
    a: 'Data security is the foundation of our operation. We are ISO 27001 certified, GDPR compliant, and Cyber Essentials certified. Every engagement begins with an NDA, role-based access controls are enforced, and all data is encrypted in transit and at rest. We undergo regular third-party security audits.',
  },
  {
    q: 'Can we scale up or down as the practice grows?',
    a: 'Absolutely. Scaling is one of the primary reasons practices work with us. You can increase capacity during busy season — tax deadline periods, year-end rushes — and reduce it during quieter months. There are no long-term capacity commitments.',
  },
  {
    q: 'What if the quality isn\'t right?',
    a: 'We operate a strict review and feedback loop. If work doesn\'t meet your standard, we rework it immediately — no questions asked. Your dedicated account manager is your first escalation point, and our quality assurance process is built to catch issues before they reach you.',
  },
]

function FaqRow({ faq, open, onToggle, i, inView }: {
  faq: typeof FAQS[0]; open: boolean; onToggle: () => void; i: number; inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.06 + i * 0.07, ease }}
      style={{
        borderBottom: '1px solid #E2E8F0',
        borderLeft: `3px solid ${open ? '#F26A3D' : 'transparent'}`,
        backgroundColor: open ? 'rgba(14,63,47,0.03)' : 'transparent',
        transition: 'background-color 0.25s, border-left-color 0.25s',
      }}
    >
      <button onClick={onToggle}
        className="w-full flex items-start gap-4 text-left"
        style={{ padding: '1.25rem 1.1rem' }}>
        <span className="font-sans font-medium tabular-nums mt-0.5 flex-shrink-0"
          style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: open ? '#F26A3D' : '#9CA3AF', transition: 'color 0.22s', minWidth: '1.5rem' }}>
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="font-sans font-semibold flex-1"
          style={{ fontSize: '0.97rem', lineHeight: 1.45, color: '#111111' }}>
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease }}
          className="font-sans text-xl leading-none flex-shrink-0 mt-0.5 font-light"
          style={{ color: open ? '#F26A3D' : '#9CA3AF', transition: 'color 0.22s' }}>
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.38, ease }, opacity: { duration: 0.2, delay: 0.06 } }}
            className="overflow-hidden">
            <p className="font-sans leading-relaxed"
              style={{ padding: '0 1.1rem 1.5rem 3.25rem', fontSize: '0.92rem', color: '#718096', lineHeight: 1.75, maxWidth: '60ch' }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Two-column layout — left sticky, right framed accordion */}
        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* LEFT — sticky headline */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="font-sans text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#F26A3D', letterSpacing: '0.16em' }}>
              Common Questions
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07, ease }}
              className="font-serif font-bold mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111111', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Everything you<br />
              <em style={{ color: '#0E3F2F', fontStyle: 'italic' }}>need to know.</em>
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <p className="font-sans text-sm leading-relaxed mb-6"
                style={{ color: '#718096', maxWidth: '30ch' }}>
                Questions from practices considering outsourcing for the first time.
              </p>
              <a href="#cta"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-6 py-3 transition-opacity hover:opacity-85"
                style={{ backgroundColor: '#0E3F2F', color: '#F5F0E8' }}>
                Speak with our team
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — framed accordion */}
          <div className="lg:col-span-3">
            <div className="border" style={{ borderColor: '#E2E8F0', borderTop: '2px solid #F26A3D' }}>
              {FAQS.map((faq, i) => (
                <FaqRow key={i} faq={faq} open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                  i={i} inView={inView} />
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="font-sans text-xs mt-4"
              style={{ color: '#9CA3AF' }}>
              More questions?{' '}
              <a href="mailto:hello@cyberguild.co"
                className="font-medium hover-line"
                style={{ color: '#F26A3D' }}>
                Email us directly →
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
