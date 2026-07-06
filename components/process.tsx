'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const STEPS = [
  { n: '01', title: 'Understand Your Practice', body: 'We map your workflows, software stack, client expectations, and quality standards. A thorough discovery that eliminates assumptions before a single line of work begins.' },
  { n: '02', title: 'Dedicated Team Allocation', body: 'A named team of qualified professionals matched to your specific requirements — with a dedicated account manager as your single point of contact throughout.' },
  { n: '03', title: 'Secure Process Setup', body: 'Data access controls, encryption protocols, and NDA agreements are in place before work begins. Your client data is protected at every step, meeting the highest compliance standards.' },
  { n: '04', title: 'Ongoing Governance', body: 'Regular performance reviews, capacity adjustments, and check-ins as your practice grows. We scale with you — up during busy seasons, lean when you need it.' },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="section overflow-hidden" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-sans text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#F26A3D', letterSpacing: '0.16em' }}>
            How It Works
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07, ease }}
            className="font-serif font-bold max-w-lg"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#111111', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            From Onboarding to{' '}
            <em style={{ color: '#0E3F2F', fontStyle: 'italic' }}>Ongoing Excellence</em>
          </motion.h2>
        </div>

        {/* Steps — taste-skill: ghost large numbers as design anchors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t" style={{ borderColor: 'rgba(14,63,47,0.12)' }}>
          {STEPS.map((step, i) => (
            <motion.div key={step.n}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.1, ease }}
              className="relative pt-10 pb-10 pr-8 group"
              style={{ borderRight: i < STEPS.length - 1 ? '1px solid rgba(14,63,47,0.12)' : 'none', paddingLeft: i === 0 ? 0 : '2rem' }}
            >
              {/* Ghost number — the taste-skill design anchor */}
              <div
                className="absolute top-4 right-4 ghost-number select-none pointer-events-none leading-none"
                style={{
                  fontSize: '7rem',
                  color: '#0E3F2F',
                  opacity: 0.07,
                  letterSpacing: '-0.04em',
                }}
                aria-hidden
              >
                {step.n}
              </div>

              {/* Step content */}
              <div className="relative z-10">
                <div className="font-sans text-xs font-semibold mb-5 flex items-center gap-2"
                  style={{ color: '#F26A3D', letterSpacing: '0.12em' }}>
                  <span className="inline-block w-5 h-px" style={{ backgroundColor: '#F26A3D' }} aria-hidden />
                  {step.n}
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3 leading-snug"
                  style={{ color: '#111111', letterSpacing: '-0.01em' }}>
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#718096' }}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: 'rgba(14,63,47,0.12)' }}>
          <p className="font-sans text-sm" style={{ color: '#718096' }}>
            First deliverable within two weeks of signing. Work live within four.
          </p>
          <a href="#cta"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-6 py-3 flex-shrink-0 transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#F26A3D', color: '#fff' }}>
            Get Started
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
