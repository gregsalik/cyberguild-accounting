'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudience } from '@/context/audience-context'
import { CONTENT } from '@/lib/content'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'Engagements',  href: '#tiers' },
  { label: 'How It Works', href: '#process' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Nav() {
  const { audience } = useAudience()
  const c = CONTENT[audience]
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: 'var(--nav-height)',
          backgroundColor: scrolled ? 'rgba(246,244,236,0.95)' : 'var(--paper)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--rule)' : 'var(--rule)'}`,
          transition: 'background-color 0.3s, box-shadow 0.3s',
          boxShadow: scrolled ? '0 1px 16px rgba(22,33,27,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Brand */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: 34, height: 34, borderRadius: 7, backgroundColor: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--paper)', fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 17 }}>
              G
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: 17, color: 'var(--ink)' }}>Cyberguild Accounting</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.09em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>
                {audience === 'firm' ? 'Practice Delivery Partner' : 'A Cyberguild Company'}
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
            {LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14.5px', fontWeight: 500, color: 'var(--ink-soft)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-soft)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#contact"
              className="hidden md:inline-flex"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '14px', padding: '10px 20px', borderRadius: 6, backgroundColor: 'var(--green-deep)', color: 'var(--paper)', textDecoration: 'none', transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {c.navCta}
            </a>

            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }}
                style={{ display: 'block', height: 1, width: 22, backgroundColor: 'var(--ink)' }} />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} transition={{ duration: 0.15 }}
                style={{ display: 'block', height: 1, width: 22, backgroundColor: 'var(--ink)' }} />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }}
                style={{ display: 'block', height: 1, width: 22, backgroundColor: 'var(--ink)' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
            style={{ position: 'fixed', inset: 0, top: 'var(--nav-height)', zIndex: 40, backgroundColor: 'var(--paper)', padding: '2rem 2rem' }}
          >
            {[...LINKS, { label: c.navCta, href: '#contact' }].map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04, ease }}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: l.href === '#contact' ? 600 : 500,
                  fontSize: '1.1rem',
                  color: l.href === '#contact' ? 'var(--green-deep)' : 'var(--ink)',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
