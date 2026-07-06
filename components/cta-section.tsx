'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      {/* CTA Section */}
      <section id="cta" className="section" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div ref={ref} className="grid lg:grid-cols-[1fr_400px] gap-0 border overflow-hidden"
            style={{ borderColor: '#E2E8F0' }}>

            {/* Left — main CTA */}
            <div className="p-10 md:p-14" style={{ backgroundColor: '#0E3F2F' }}>
              <motion.p initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="font-sans text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#F26A3D', letterSpacing: '0.16em' }}>
                Ready to Scale?
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.07, ease }}
                className="font-serif font-bold mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0E8', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                Let&apos;s build your<br />
                <em style={{ color: '#F26A3D', fontStyle: 'italic' }}>outsourced team today.</em>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-sans text-base leading-relaxed mb-8"
                style={{ color: 'rgba(245,240,232,0.6)', maxWidth: '44ch', fontWeight: 300 }}>
                Book a free consultation. We&apos;ll map your workflow and show you exactly how our team can support your practice — first deliverable within two weeks.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25, ease }}
                className="flex flex-wrap gap-3 mb-8">
                <a href="mailto:hello@cyberguild.co"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 transition-opacity hover:opacity-85"
                  style={{ backgroundColor: '#F26A3D', color: '#fff' }}>
                  Book a Free Consultation
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                    <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                  </svg>
                </a>
                <a href="mailto:hello@cyberguild.co"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium px-7 py-3.5 border transition-all hover:bg-white/10"
                  style={{ borderColor: 'rgba(245,240,232,0.2)', color: 'rgba(245,240,232,0.75)' }}>
                  Send an Enquiry
                </a>
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="font-sans text-xs" style={{ color: 'rgba(245,240,232,0.3)' }}>
                No commitment required &middot; Response within 24 hours &middot; Free workflow review included
              </motion.p>
            </div>

            {/* Right — contact panel */}
            <div className="p-10 border-t lg:border-t-0 lg:border-l flex flex-col justify-between"
              style={{ borderColor: '#E2E8F0', backgroundColor: '#fff' }}>
              <div>
                <motion.h3 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-serif font-semibold text-xl mb-7" style={{ color: '#111111' }}>
                  Get In Touch
                </motion.h3>

                {[
                  { label: 'Email', value: 'hello@cyberguild.co', href: 'mailto:hello@cyberguild.co' },
                  { label: 'Phone', value: '+1 (234) 567-8900', href: 'tel:+12345678900' },
                  { label: 'Response', value: 'Within 24 hours', href: '#' },
                ].map((item, i) => (
                  <motion.a key={item.label} href={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.07, ease }}
                    className="flex items-start gap-3 mb-5 group">
                    <div className="w-px h-full min-h-[2rem] mt-1 flex-shrink-0"
                      style={{ backgroundColor: '#F26A3D', opacity: 0.4 }} aria-hidden />
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: '#9CA3AF', letterSpacing: '0.1em' }}>{item.label}</p>
                      <p className="font-sans text-sm font-medium transition-colors duration-200 group-hover:text-[#F26A3D]"
                        style={{ color: '#111111' }}>{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Cert strip */}
              <div className="pt-6 border-t" style={{ borderColor: '#E2E8F0' }}>
                <p className="font-sans text-xs uppercase tracking-widest mb-3"
                  style={{ color: '#9CA3AF', letterSpacing: '0.1em' }}>
                  Certified &amp; Compliant
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ISO 27001', 'GDPR', 'Cyber Essentials', 'MFA'].map(c => (
                    <span key={c} className="font-sans text-xs px-2.5 py-1 border"
                      style={{ borderColor: '#E2E8F0', color: '#4A5568' }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0a1f17', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.webp" alt="Cyberguild" width={815} height={240}
                  className="brightness-0 invert opacity-60"
                  style={{ height: '18px', width: 'auto' }} />
                <span className="font-serif text-sm font-medium" style={{ color: 'rgba(245,240,232,0.5)' }}>
                  Accounting
                </span>
              </div>
              <p className="font-sans text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.3)' }}>
                Premium outsourced accounting services for practices worldwide.
              </p>
            </div>
            {[
              { title: 'Services', links: ['Bookkeeping', 'Payroll', 'Year-End Accounts', 'Management Accounts', 'Tax Support', 'Audit Support'] },
              { title: 'Company', links: ['About Us', 'How It Works', 'Case Studies', 'Security', 'Careers'] },
              { title: 'Contact', links: ['hello@cyberguild.co', 'Book a Consultation', 'Partner Programme'] },
            ].map(col => (
              <div key={col.title}>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'rgba(245,240,232,0.3)', letterSpacing: '0.12em' }}>
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" className="font-sans text-sm transition-colors duration-200 hover:text-[#F26A3D]"
                        style={{ color: 'rgba(245,240,232,0.4)' }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="font-sans text-xs" style={{ color: 'rgba(245,240,232,0.2)' }}>
              &copy; 2026 Cyberguild Accounting. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                <a key={l} href="#" className="font-sans text-xs transition-colors duration-200 hover:text-[#F26A3D]"
                  style={{ color: 'rgba(245,240,232,0.25)' }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
