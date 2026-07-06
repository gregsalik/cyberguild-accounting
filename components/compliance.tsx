'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const CERTS = [
  {
    label: 'ISO 27001',
    title: 'Certified',
    desc: 'International standard for information security. Your client data is protected by globally recognised controls and independently audited annually.',
  },
  {
    label: 'GDPR',
    title: 'Compliant',
    desc: 'Full compliance with data protection legislation. We process all client data in strict accordance with privacy requirements.',
  },
  {
    label: 'Cyber Essentials',
    title: 'Certified',
    desc: 'Government-backed cybersecurity certification. Independently verified controls protecting against the most common cyber threats.',
  },
  {
    label: 'MFA & Encryption',
    title: 'Secured',
    desc: 'Multi-factor authentication and end-to-end encryption across every system and access point. No exceptions.',
  },
]

const FEATURES = [
  'NDA agreements from day one',
  'Role-based access controls per client',
  'Regular penetration testing & security audits',
  'Data residency options on request',
  'Documented incident response plan',
  'Zero-trust network architecture',
]

export default function Compliance() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="compliance" className="section overflow-hidden"
      style={{ backgroundColor: '#0E3F2F' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header grid — left aligned */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="font-sans text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#F26A3D', letterSpacing: '0.16em' }}>
              Security &amp; Compliance
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07, ease }}
              className="font-serif font-bold"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#F5F0E8', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Your Clients&apos; Data<br />
              <em style={{ color: '#F26A3D', fontStyle: 'italic' }}>Protected at Every Step</em>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="font-sans text-base leading-relaxed mb-8"
              style={{ color: 'rgba(245,240,232,0.6)', fontWeight: 300 }}>
              Security is not a checkbox — it is the foundation of our operation. Every access point is controlled, every connection encrypted, and every team member trained to the highest standard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {FEATURES.map((f, i) => (
                <motion.div key={f}
                  initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.28 + i * 0.06, ease }}
                  className="flex items-center gap-2.5">
                  <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center"
                    style={{ border: '1px solid rgba(242,106,61,0.4)' }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                      <path d="M1.5 4l2 2 3-3" stroke="#F26A3D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-sans text-sm" style={{ color: 'rgba(245,240,232,0.65)' }}>{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certification cards — horizontal strip, not equal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l"
          style={{ borderColor: 'rgba(245,240,232,0.1)' }}>
          {CERTS.map((c, i) => (
            <motion.div key={c.label}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08, ease }}
              className="p-7 border-b border-r group transition-colors duration-200 hover:bg-white/5"
              style={{ borderColor: 'rgba(245,240,232,0.1)' }}>
              <p className="font-sans text-xs uppercase tracking-widest mb-1"
                style={{ color: '#F26A3D', letterSpacing: '0.1em' }}>
                {c.label}
              </p>
              <p className="font-serif font-semibold text-xl mb-3"
                style={{ color: '#F5F0E8', letterSpacing: '-0.02em' }}>
                {c.title}
              </p>
              <p className="font-sans text-xs leading-relaxed"
                style={{ color: 'rgba(245,240,232,0.45)' }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
