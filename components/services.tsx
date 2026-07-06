'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// SVG icons — no emojis (taste-skill: ANTI-EMOJI)
const Icon = ({ d }: { d: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
)

const ICONS: Record<string, string> = {
  book:    'M3 2h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM6 6h6M6 9h6M6 12h3',
  payroll: 'M9 1v16M5.5 4.5h4.75a2.25 2.25 0 0 1 0 4.5H6a2.25 2.25 0 0 0 0 4.5H13',
  year:    'M1 6h16M5 1v3M13 1v3M1 3h16v14H1zM5 11h4M5 14h6',
  mgmt:    'M2 14L7 8l3 4 3-5 3 3',
  tax:     'M4 4l10 10M14 4H4v10',
  audit:   'M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM12.5 12.5l3 3',
  office:  'M2 16V5l7-3 7 3v11M5 16v-5h3v5M10 16v-5h3v5',
  offshore:'M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM1 9h16M9 1c-2 2-3 5-3 8s1 6 3 8M9 1c2 2 3 5 3 8s-1 6-3 8',
  it:      'M2 3h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 16h6M9 13v3',
  data:    'M3 14V10M7 14V6M11 14V9M15 14V4',
}

// CORE services (featured, asymmetric bento)
const CORE = [
  { icon: 'book',    title: 'Bookkeeping',       desc: 'Day-to-day transaction recording, bank reconciliations, and ledger management — accurate, timely, and built to your standards.', tags: ['Xero', 'QuickBooks', 'Sage'], featured: true },
  { icon: 'payroll', title: 'Payroll',            desc: 'End-to-end payroll — calculations, submissions, payslips, and pension enrolment. On schedule, every time.', tags: ['CIS', 'Pensions', 'RTI'] },
  { icon: 'year',    title: 'Year-End Accounts',  desc: 'Statutory accounts prepared with precision, ready for partner review and filing. Reduces your busy-season pressure.', tags: ['FRS 105', 'FRS 102', 'iXBRL'] },
  { icon: 'mgmt',    title: 'Management Accounts', desc: 'Monthly and quarterly reports that give your clients real visibility into their performance — built to your templates.', tags: ['Monthly', 'Quarterly', 'KPIs'], featured: true },
]

// SECONDARY services (compact, horizontal list)
const SECONDARY = [
  { icon: 'tax',      title: 'Tax Support',        desc: 'VAT, corporation tax, self-assessment — accurate and filed on time.' },
  { icon: 'audit',    title: 'Audit Support',      desc: 'Additional capacity during peak season. Documentation, schedules, reconciliations.' },
  { icon: 'office',   title: 'Back Office',        desc: 'Admin and workflow support that keeps your practice running efficiently.' },
  { icon: 'offshore', title: 'Offshoring',         desc: 'A dedicated extended team operating under your brand at scale.' },
  { icon: 'it',       title: 'IT Solutions',       desc: 'Technology implementation tailored to accounting practice workflows.' },
  { icon: 'data',     title: 'Data & Analytics',   desc: 'Dashboards and models that turn client financials into actionable insight.' },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="section" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header — left-aligned (taste-skill: ANTI-CENTER) */}
        <div ref={ref} className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-12">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="font-sans text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#F26A3D', letterSpacing: '0.16em' }}>
              What We Do
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07, ease }}
              className="font-serif font-bold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#111111', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Complete coverage for<br />
              <em style={{ color: '#0E3F2F', fontStyle: 'italic' }}>your entire practice.</em>
            </motion.h2>
          </div>
          <motion.a href="#cta" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="hidden lg:inline-flex items-center gap-2 font-sans text-sm font-semibold px-6 py-3 flex-shrink-0 transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#0E3F2F', color: '#F5F0E8' }}>
            See full scope
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
            </svg>
          </motion.a>
        </div>

        {/* BENTO GRID — taste-skill: NO 3-equal-column cards. Asymmetric 2fr/1fr zig-zag */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">

          {/* Row 1: large featured (col-span-2) + one regular */}
          <CoreCard s={CORE[0]} i={0} inView={inView} span={2} dark />
          <CoreCard s={CORE[1]} i={1} inView={inView} span={1} />

          {/* Row 2: regular + large featured (col-span-2) — zig-zag */}
          <CoreCard s={CORE[2]} i={2} inView={inView} span={1} />
          <CoreCard s={CORE[3]} i={3} inView={inView} span={2} />
        </div>

        {/* SECONDARY — horizontal list, not cards (taste-skill: Anti-Card Overuse) */}
        <div className="border-t border-l" style={{ borderColor: '#E2E8F0' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {SECONDARY.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease }}
                className="p-5 border-b border-r group cursor-default transition-all duration-200"
                style={{ borderColor: '#E2E8F0' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                <div className="mb-2.5 transition-colors duration-200 group-hover:text-[#F26A3D]"
                  style={{ color: '#9CA3AF' }}>
                  <Icon d={ICONS[s.icon]} />
                </div>
                <p className="font-serif font-semibold text-sm mb-1.5" style={{ color: '#111111', lineHeight: 1.25 }}>{s.title}</p>
                <p className="font-sans" style={{ fontSize: '0.72rem', color: '#9CA3AF', lineHeight: 1.5 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Core card — asymmetric bento tile ───────────────────────────────────────
function CoreCard({ s, i, inView, span, dark }: {
  s: typeof CORE[0]; i: number; inView: boolean; span: 1 | 2; dark?: boolean
}) {
  const [hov, setHov] = useState(false)
  const bg = dark ? (hov ? '#0a2b20' : '#0E3F2F') : (hov ? '#fff' : '#F5F0E8')
  const tc = dark ? '#F5F0E8' : '#111111'
  const mc = dark ? 'rgba(245,240,232,0.5)' : '#718096'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08 + i * 0.1, ease }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className={`md:col-span-${span} p-8 flex flex-col gap-5 transition-all duration-300`}
      style={{
        backgroundColor: bg,
        border: `1px solid ${dark ? (hov ? '#144a38' : '#0E3F2F') : (hov ? '#D1D5DB' : '#E2E8F0')}`,
        boxShadow: hov && !dark ? '0 8px 32px rgba(14,63,47,0.08)' : 'none',
        minHeight: '220px',
      }}
    >
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 flex items-center justify-center transition-colors duration-300"
          style={{
            backgroundColor: dark ? 'rgba(242,106,61,0.15)' : (hov ? 'rgba(242,106,61,0.1)' : 'rgba(14,63,47,0.07)'),
            color: dark ? '#F26A3D' : (hov ? '#F26A3D' : '#0E3F2F'),
          }}>
          <Icon d={ICONS[s.icon]} />
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
          style={{ color: dark ? 'rgba(245,240,232,0.2)' : 'rgba(17,17,17,0.15)', transition: 'color 0.2s' }}>
          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
        </svg>
      </div>

      <div>
        <h3 className="font-serif font-semibold text-xl mb-2" style={{ color: tc, letterSpacing: '-0.015em' }}>
          {s.title}
        </h3>
        <p className="font-sans text-sm leading-relaxed" style={{ color: mc }}>{s.desc}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {s.tags?.map(t => (
          <span key={t} className="font-sans text-xs px-2.5 py-1"
            style={{
              backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(14,63,47,0.06)',
              color: dark ? 'rgba(245,240,232,0.5)' : '#6B7280',
            }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}
