'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const TESTIMONIALS = [
  { quote: 'Their payroll and accounts teams deliver fast, accurate work with excellent communication, making the entire process efficient and reliable.', name: 'Mark Telford', firm: 'Telford Partners', role: 'Managing Director' },
  { quote: 'Consistent quality and reliability. They handle payroll, pensions, CIS, and submissions flawlessly — like a true extension of our team.', name: 'Phyllis Cheung', firm: 'PC Accountancy', role: 'Principal' },
  { quote: 'After poor experiences elsewhere, their accurate, compliant service has been a breath of fresh air. Outstanding from day one.', name: 'Sam Kellali', firm: 'Kellali & Co', role: 'Partner' },
  { quote: 'Payrolls processed on time, to a high standard, every single month. It gives me genuine confidence and peace of mind.', name: 'Sally Gilpin', firm: 'SG Tax Advisory', role: 'Director' },
  { quote: 'A professional team delivering consistently high-quality work. They feel like a natural part of our business, not an outsourcer.', name: 'Barry Jackson', firm: 'Greenfield Accountants', role: 'Founder' },
  { quote: 'Excellent communication, quick responses, and a systemised yet flexible approach. Work delivered to a consistently high standard.', name: 'Leanne Terry', firm: 'Clic Advisory', role: 'Managing Partner' },
]

// Five-star SVG — no emojis
const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#F26A3D" aria-hidden>
        <path d="M6 1l1.2 3.6H11L8.4 6.8l1 3.2L6 8.3l-3.4 1.7 1-3.2L1 4.6h3.8z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="font-sans text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#F26A3D', letterSpacing: '0.16em' }}>
              Client Stories
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07, ease }}
              className="font-serif font-bold"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#111111', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Trusted by Practices<br />
              <em style={{ color: '#0E3F2F', fontStyle: 'italic' }}>Around the World</em>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4">
            <div>
              <div className="font-serif font-bold text-4xl" style={{ color: '#0E3F2F', letterSpacing: '-0.03em' }}>4.9<span style={{ fontSize: '1.5rem', color: '#9CA3AF' }}>/5</span></div>
              <Stars />
              <p className="font-sans text-xs mt-1" style={{ color: '#9CA3AF' }}>Average across 200+ practices</p>
            </div>
            <div className="w-px h-16" style={{ backgroundColor: '#E2E8F0' }} aria-hidden />
            <p className="font-sans text-sm leading-relaxed" style={{ color: '#718096', maxWidth: '28ch' }}>
              Consistently rated for accuracy, communication, and reliability.
            </p>
          </motion.div>
        </div>

        {/* Editorial testimonial layout — taste-skill: not all equal cards */}
        <div className="grid lg:grid-cols-3 gap-0 border" style={{ borderColor: '#E2E8F0' }}>

          {/* Featured large quote — left 2/3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="lg:col-span-2 p-10 border-b lg:border-b-0 lg:border-r flex flex-col justify-between gap-8"
            style={{ borderColor: '#E2E8F0', backgroundColor: '#0E3F2F' }}>
            <div>
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="mb-6" aria-hidden>
                <path d="M0 28V17.5C0 7.5 6 2 18 0l2 3C13 4.5 10 7.5 10 12v1h8V28H0zm18 0V17.5C18 7.5 24 2 36 0l2 3C31 4.5 28 7.5 28 12v1h8V28H18z" fill="rgba(242,106,61,0.3)" />
              </svg>
              <p className="font-serif text-2xl leading-snug font-medium"
                style={{ color: '#F5F0E8', letterSpacing: '-0.01em', lineHeight: 1.4 }}>
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold flex-shrink-0"
                style={{ backgroundColor: '#F26A3D', color: '#fff', fontSize: '1.1rem' }}>
                {TESTIMONIALS[active].name.charAt(0)}
              </div>
              <div>
                <p className="font-sans font-semibold text-sm" style={{ color: '#F5F0E8' }}>{TESTIMONIALS[active].name}</p>
                <p className="font-sans text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>{TESTIMONIALS[active].role}, {TESTIMONIALS[active].firm}</p>
              </div>
              <Stars />
            </div>
          </motion.div>

          {/* Navigation sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="flex flex-col divide-y"
            style={{ borderColor: '#E2E8F0' }}>
            {TESTIMONIALS.map((t, i) => (
              <button key={t.name} onClick={() => setActive(i)}
                className="p-5 text-left transition-colors duration-200 group"
                style={{ backgroundColor: active === i ? 'rgba(14,63,47,0.04)' : 'transparent' }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: active === i ? '#F26A3D' : '#D1D5DB' }} aria-hidden />
                  <p className="font-sans text-sm font-semibold transition-colors duration-200"
                    style={{ color: active === i ? '#111111' : '#4A5568' }}>
                    {t.name}
                  </p>
                </div>
                <p className="font-sans text-xs" style={{ color: '#9CA3AF' }}>{t.firm}</p>
                {active === i && (
                  <p className="font-sans text-xs mt-2 leading-relaxed line-clamp-2" style={{ color: '#718096' }}>
                    {t.quote.slice(0, 80)}...
                  </p>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
