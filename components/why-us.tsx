'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// taste-skill: asymmetric layout, NOT 3 equal pillars
// Left: large featured pillar (2/3 width)
// Right: 2 stacked smaller pillars
const PILLARS = [
  {
    stat: '100%',
    sup: 'White-Label',
    title: 'Your brand.\nOur work.',
    desc: 'Every deliverable leaves under your firm\'s name. Your clients never know we exist — and that\'s exactly how it should be. We are the back office that premium practices quietly rely on.',
    featured: true,
  },
  {
    stat: '2wk',
    sup: 'To First Output',
    title: 'Live in two weeks.',
    desc: 'We map your workflow, allocate your team, and ship the first batch of completed work before most onboarding processes have even finished.',
  },
  {
    stat: '600+',
    sup: 'Qualified Accountants',
    title: 'Depth you can\'t hire.',
    desc: 'One hire gives you one person. We give you access to 600+ specialists. Scale for deadline season. Scale back when you need to.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section overflow-hidden" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Opening statement — typographic moment */}
        <div ref={ref} className="mb-14 border-b pb-14" style={{ borderColor: 'rgba(245,240,232,0.08)' }}>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-sans text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#F26A3D', letterSpacing: '0.16em' }}>
            Why Cyberguild
          </motion.p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.07, ease }}
              className="font-serif font-bold"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Not just another outsourcer.{' '}
              <em style={{ color: '#F26A3D', fontStyle: 'italic' }}>We work only with practices.</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-base leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.45)', maxWidth: '44ch', fontWeight: 300 }}>
              That singular focus means we understand your software, your workflows, your clients, and the pressure you face during peak seasons — better than any generalist ever could.
            </motion.p>
          </div>
        </div>

        {/* Asymmetric pillars — taste-skill: 2fr / 1fr, NOT 3 equal columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3">

          {/* Featured large pillar — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="p-10 md:p-12 flex flex-col gap-6 relative overflow-hidden"
            style={{ backgroundColor: '#0E3F2F', border: '1px solid rgba(245,240,232,0.08)', minHeight: '360px' }}>
            {/* Ghost background stat */}
            <div className="absolute -bottom-4 -right-4 font-serif font-bold select-none pointer-events-none"
              style={{ fontSize: '14rem', lineHeight: 1, color: 'rgba(245,240,232,0.04)', letterSpacing: '-0.06em' }}
              aria-hidden>
              {PILLARS[0].stat}
            </div>
            <div className="relative z-10">
              <div className="mb-2">
                <span className="font-serif font-bold" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#F26A3D', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {PILLARS[0].stat}
                </span>
                <p className="font-sans text-xs uppercase tracking-widest mt-1"
                  style={{ color: 'rgba(245,240,232,0.35)', letterSpacing: '0.14em' }}>
                  {PILLARS[0].sup}
                </p>
              </div>
              <div className="h-px my-6" style={{ backgroundColor: 'rgba(245,240,232,0.1)' }} />
              <h3 className="font-serif font-bold mb-4"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: '#F5F0E8', letterSpacing: '-0.02em', lineHeight: 1.2, whiteSpace: 'pre-line' }}>
                {PILLARS[0].title}
              </h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.55)', maxWidth: '44ch' }}>
                {PILLARS[0].desc}
              </p>
            </div>
          </motion.div>

          {/* Two stacked smaller pillars — right */}
          <div className="flex flex-col gap-3">
            {PILLARS.slice(1).map((p, idx) => (
              <motion.div key={p.stat}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + idx * 0.12, ease }}
                className="p-8 flex flex-col gap-4 flex-1"
                style={{ backgroundColor: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.08)' }}>
                <div>
                  <span className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F26A3D', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {p.stat}
                  </span>
                  <p className="font-sans text-xs uppercase tracking-widest mt-0.5"
                    style={{ color: 'rgba(245,240,232,0.3)', letterSpacing: '0.12em' }}>
                    {p.sup}
                  </p>
                </div>
                <div className="h-px" style={{ backgroundColor: 'rgba(245,240,232,0.08)' }} />
                <div>
                  <h3 className="font-serif font-semibold mb-2"
                    style={{ fontSize: '1.25rem', color: '#F5F0E8', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.45)' }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t mt-3"
          style={{ borderColor: 'rgba(245,240,232,0.08)' }}>
          {[
            { n: '12+', l: 'Years of experience' },
            { n: '98%', l: 'Client retention' },
            { n: '24hr', l: 'Average response time' },
            { n: '200+', l: 'Practices served' },
          ].map((s, i) => (
            <div key={s.n} className="px-8 py-6 border-r border-b"
              style={{ borderColor: 'rgba(245,240,232,0.08)' }}>
              <span className="font-serif font-semibold block mb-0.5"
                style={{ fontSize: '1.75rem', color: '#F5F0E8', letterSpacing: '-0.03em' }}>
                {s.n}
              </span>
              <span className="font-sans text-xs" style={{ color: 'rgba(245,240,232,0.35)' }}>{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
