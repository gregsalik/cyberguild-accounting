'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const LINKS = [
  { label: 'Services',    href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Clients',     href: '#testimonials' },
  { label: 'Compliance',  href: '#compliance' },
  { label: 'FAQ',         href: '#faq' },
]

const MOBILE_LINKS = [
  { label: 'Services',    href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Clients',     href: '#testimonials' },
  { label: 'Compliance',  href: '#compliance' },
  { label: 'FAQ',         href: '#faq' },
  { label: 'Book a Call', href: '#cta' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250,250,248,0.94)' : 'rgba(250,250,248,0.99)',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled ? '#E2E8F0' : 'transparent'}`,
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[3.75rem] flex items-center justify-between gap-8">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <Image src="/logo.webp" alt="Cyberguild Accounting" width={815} height={240} priority
              className="transition-opacity duration-300 group-hover:opacity-60"
              style={{ height: '24px', width: 'auto' }} />
            <span className="font-serif font-semibold text-sm hidden sm:block"
              style={{ color: '#0E3F2F', letterSpacing: '0.01em' }}>
              Accounting
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {LINKS.map(l => (
              <a key={l.label} href={l.href}
                className="font-sans text-sm font-medium relative group py-0.5 transition-colors duration-200"
                style={{ color: '#6B7280' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px transition-all duration-300"
                  style={{ backgroundColor: '#F26A3D' }} aria-hidden />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Phone — desktop only */}
            <a href="tel:+12345678900"
              className="hidden xl:flex items-center gap-1.5 font-sans text-xs font-medium transition-colors duration-200"
              style={{ color: '#6B7280' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
                <path d="M13 10.33a1.167 1.167 0 0 1-1.167 1.167 11.083 11.083 0 0 1-10.5-10.5A1.167 1.167 0 0 1 2.5 0h2.333l1.167 2.917L4.75 4.083a9.333 9.333 0 0 0 5.167 5.167L11.083 8 14 9.167v2.163z" />
              </svg>
              +1 (234) 567-8900
            </a>

            {/* CTA */}
            <a href="#cta"
              className="hidden md:inline-flex items-center gap-1.5 font-sans text-xs font-semibold px-5 py-2.5 transition-all duration-200 hover:opacity-88"
              style={{ backgroundColor: '#F26A3D', color: '#fff' }}>
              Book a Call
            </a>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(v => !v)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
              <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-px w-5" style={{ backgroundColor: '#111111' }} />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="block h-px w-5" style={{ backgroundColor: '#111111' }} />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-px w-5" style={{ backgroundColor: '#111111' }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease }}
            className="fixed inset-0 z-40 flex flex-col pt-[3.75rem]"
            style={{ backgroundColor: '#FAFAF8' }}>
            <nav className="flex flex-col px-6 py-6 gap-1">
              {MOBILE_LINKS.map((l, i) => (
                <motion.a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, delay: i * 0.05, ease }}
                  className="font-sans font-medium text-lg py-3.5 border-b"
                  style={{ color: l.label === 'Book a Call' ? '#F26A3D' : '#111111', borderColor: '#E2E8F0' }}>
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
