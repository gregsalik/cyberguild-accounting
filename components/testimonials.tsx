'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

function useCountUp(target: number, duration = 1400, active = false) {
  const [n, setN] = useState(0)
  const frame = useRef<number | null>(null)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => { if (frame.current) cancelAnimationFrame(frame.current) }
  }, [active, target, duration])
  return n
}

function OutcomeCard({ num, label, numericPart, suffix, index, inView }: {
  num: string; label: string; numericPart?: number; suffix?: string; index: number; inView: boolean
}) {
  const count = useCountUp(numericPart ?? 0, 1400, inView && numericPart !== undefined)
  const displayNum = numericPart !== undefined && suffix !== undefined
    ? `${inView ? count : numericPart}${suffix}`
    : num

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.12 }}
      style={{ backgroundColor: 'var(--paper-card)', padding: '36px 30px', textAlign: 'center' }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--green-deep)', lineHeight: 1 }}>
        {displayNum}
      </div>
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '13.5px', color: 'var(--ink-soft)', marginTop: '10px', lineHeight: 1.5 }}>
        {label}
      </div>
    </motion.div>
  )
}

export default function Outcomes() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="section-pad" style={{ backgroundColor: 'var(--paper)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={audience} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <div style={{ maxWidth: '620px', marginBottom: '3rem' }}>
              <div className="eyebrow">{c.outcomesEyebrow}</div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0 }}>
                {c.outcomesH2}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--rule)', border: '1px solid var(--rule)', borderRadius: '12px', overflow: 'hidden' }}>
              {c.outcomes.map((o, i) => (
                <OutcomeCard key={o.num + i} {...o} index={i} inView={inView} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
