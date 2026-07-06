'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion'
import Image from 'next/image'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Count-up hook ────────────────────────────────────────────────────────────
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

// ─── Check icon ───────────────────────────────────────────────────────────────
const Check = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
    <path d="M1.5 5.5l2.5 2.5 5-5" stroke="#F26A3D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TRUST = ['ISO 27001 Certified', 'GDPR Compliant', 'Cyber Essentials', 'MFA Encrypted']

// ─── Stat counter tile ────────────────────────────────────────────────────────
function StatTile({ value, numericPart, suffix, label, delay, active, border }: {
  value: string; numericPart: number; suffix: string; label: string
  delay: number; active: boolean; border?: string
}) {
  const count = useCountUp(numericPart, 1500, active)
  const display = suffix === '+' ? `${count}+`
    : suffix === '%' ? `${count}%`
    : suffix === 'hr' ? `${count}hr`
    : suffix === 'yr' ? `${count}+yr`
    : value

  return (
    <div className="px-6 py-6 flex flex-col gap-1" style={{ borderRight: border || 'none' }}>
      <motion.span
        initial={{ opacity: 0 }} animate={active ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay }}
        className="font-serif font-bold"
        style={{ fontSize: '2rem', color: '#F26A3D', letterSpacing: '-0.04em', lineHeight: 1 }}>
        {active ? display : value}
      </motion.span>
      <span className="font-sans text-xs" style={{ color: 'rgba(245,240,232,0.4)' }}>{label}</span>
    </div>
  )
}

export default function Hero() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  // Magnetic hero CTAs
  const btnRef1 = useRef<HTMLAnchorElement>(null)
  const btnRef2 = useRef<HTMLAnchorElement>(null)
  const x1 = useMotionValue(0); const y1 = useMotionValue(0)
  const x2 = useMotionValue(0); const y2 = useMotionValue(0)
  const sX1 = useSpring(x1, { stiffness: 200, damping: 18 })
  const sY1 = useSpring(y1, { stiffness: 200, damping: 18 })
  const sX2 = useSpring(x2, { stiffness: 200, damping: 18 })
  const sY2 = useSpring(y2, { stiffness: 200, damping: 18 })

  const move = (ref: React.RefObject<HTMLAnchorElement>, mx: typeof x1, my: typeof y1) =>
    (e: React.MouseEvent) => {
      const r = ref.current?.getBoundingClientRect()
      if (!r) return
      mx.set((e.clientX - r.left - r.width / 2) * 0.2)
      my.set((e.clientY - r.top - r.height / 2) * 0.2)
    }
  const leave = (mx: typeof x1, my: typeof y1) => () => { mx.set(0); my.set(0) }

  return (
    <section
      className="relative overflow-hidden grain"
      style={{ minHeight: '100dvh', background: 'linear-gradient(145deg, #0a1f17 0%, #0E3F2F 45%, #144a38 100%)' }}>

      {/* Radial coral accent */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(242,106,61,0.1) 0%, transparent 70%)', zIndex: 2 }} aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20 grid lg:grid-cols-[1fr_460px] gap-16 items-center min-h-[100dvh]">

        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="inline-flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F26A3D' }} aria-hidden />
            <span className="font-sans text-xs font-medium uppercase tracking-widest"
              style={{ color: 'rgba(245,240,232,0.55)', letterSpacing: '0.16em' }}>
              Outsourced Accounting Specialists
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="font-serif font-bold mb-6"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', lineHeight: 1.06, letterSpacing: '-0.03em', color: '#F5F0E8' }}>
            The Outsourcing Partner<br />
            <span style={{ color: '#F26A3D', fontStyle: 'italic' }}>Accountancy Practices</span><br />
            Can Rely On.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease }}
            className="font-sans text-lg leading-relaxed mb-8 max-w-[46ch]"
            style={{ color: 'rgba(245,240,232,0.6)', fontWeight: 300 }}>
            We handle your bookkeeping, payroll, year-end accounts, and tax work. Your team focuses on clients. Delivered with precision, under your brand.
          </motion.p>

          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {TRUST.map(t => (
              <li key={t} className="flex items-center gap-1.5 font-sans text-sm"
                style={{ color: 'rgba(245,240,232,0.55)' }}>
                <Check />{t}
              </li>
            ))}
          </motion.ul>

          {/* Magnetic CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48, ease }}
            className="flex flex-wrap gap-3">
            <motion.a ref={btnRef1} href="#cta"
              style={{ x: sX1, y: sY1, backgroundColor: '#F26A3D', color: '#fff' }}
              onMouseMove={move(btnRef1, x1, y1)} onMouseLeave={leave(x1, y1)}
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 transition-opacity hover:opacity-88">
              Book a Free Consultation
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </motion.a>
            <motion.a ref={btnRef2} href="#services"
              style={{ x: sX2, y: sY2, borderColor: 'rgba(245,240,232,0.22)', color: 'rgba(245,240,232,0.75)' }}
              onMouseMove={move(btnRef2, x2, y2)} onMouseLeave={leave(x2, y2)}
              className="inline-flex items-center gap-2 font-sans text-sm font-medium px-7 py-3.5 border transition-colors hover:border-white/40">
              Explore Services
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — stats dashboard panel */}
        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="hidden lg:block" ref={statsRef}>
          <div style={{ border: '1px solid rgba(245,240,232,0.1)', overflow: 'hidden' }}>

            {/* Panel header */}
            <div className="px-7 py-4 flex items-center justify-between"
              style={{ borderBottom: '1px solid rgba(245,240,232,0.08)', backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <span className="font-sans text-xs uppercase tracking-widest"
                style={{ color: 'rgba(245,240,232,0.35)', letterSpacing: '0.14em' }}>
                Practice Overview
              </span>
              <div className="flex gap-1.5">
                {['rgba(242,106,61,0.85)', 'rgba(245,240,232,0.2)', 'rgba(245,240,232,0.12)'].map((c, i) => (
                  <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} aria-hidden />
                ))}
              </div>
            </div>

            {/* Hero stat — count-up */}
            <div className="px-7 py-9" style={{ borderBottom: '1px solid rgba(245,240,232,0.08)' }}>
              <p className="font-sans text-xs uppercase tracking-widest mb-2"
                style={{ color: 'rgba(245,240,232,0.32)', letterSpacing: '0.12em' }}>
                Qualified Accountants
              </p>
              <CountStat target={600} suffix="+" active={statsInView}
                style={{ fontSize: '5.5rem', color: '#F26A3D', letterSpacing: '-0.05em', lineHeight: 1 }} />
            </div>

            {/* 2×2 stat grid — asymmetric border treatment */}
            <div className="grid grid-cols-2">
              {[
                { target: 200, suf: '+', label: 'Firms Served' },
                { target: 98,  suf: '%', label: 'Client Retention' },
                { target: 24,  suf: 'hr', label: 'Avg Response' },
                { target: 12,  suf: '+', label: 'Years Serving Practices' },
              ].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0 }} animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="px-6 py-5"
                  style={{
                    borderRight: i % 2 === 0 ? '1px solid rgba(245,240,232,0.08)' : 'none',
                    borderTop: '1px solid rgba(245,240,232,0.08)',
                  }}>
                  <CountStat target={s.target} suffix={s.suf} active={statsInView}
                    style={{ fontSize: '2rem', color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 1 }} />
                  <p className="font-sans text-xs mt-1" style={{ color: 'rgba(245,240,232,0.35)' }}>{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Cert strip */}
            <div className="px-7 py-3 flex gap-4 flex-wrap"
              style={{ borderTop: '1px solid rgba(245,240,232,0.08)', backgroundColor: 'rgba(242,106,61,0.06)' }}>
              {['ISO 27001', 'GDPR', 'Cyber Essentials'].map(c => (
                <span key={c} className="font-sans text-xs font-medium"
                  style={{ color: 'rgba(242,106,61,0.8)' }}>{c}</span>
              ))}
            </div>
          </div>

          <div className="mt-3 px-1 flex items-center gap-2">
            <Image src="/logo.webp" alt="Cyberguild" width={815} height={240}
              className="brightness-0 invert opacity-25"
              style={{ height: '13px', width: 'auto' }} />
            <span className="font-sans text-xs" style={{ color: 'rgba(245,240,232,0.18)' }}>
              — Cyberguild Accounting
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" aria-hidden>
        <span className="font-sans text-xs uppercase tracking-widest"
          style={{ color: 'rgba(245,240,232,0.2)', letterSpacing: '0.14em' }}>Scroll</span>
        <div className="w-px h-8 relative overflow-hidden" style={{ backgroundColor: 'rgba(245,240,232,0.1)' }}>
          <motion.div className="absolute inset-x-0 top-0 h-4"
            style={{ backgroundColor: '#F26A3D' }}
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }} />
        </div>
      </div>
    </section>
  )
}

// ─── Inline count stat ────────────────────────────────────────────────────────
function CountStat({ target, suffix, active, style }: {
  target: number; suffix: string; active: boolean; style: React.CSSProperties
}) {
  const n = useCountUp(target, 1400, active)
  return (
    <div className="font-serif font-bold tabular-nums" style={style}>
      {active ? n : target}{suffix}
    </div>
  )
}
