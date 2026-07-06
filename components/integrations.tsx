'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// Software logos as clean SVG wordmarks — no emojis, no generic icons
const SOFTWARE = [
  {
    name: 'Xero',
    svg: <svg viewBox="0 0 80 28" fill="none" aria-label="Xero" className="h-6 w-auto"><text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="currentColor">Xero</text></svg>,
  },
  {
    name: 'QuickBooks',
    svg: <svg viewBox="0 0 110 28" fill="none" aria-label="QuickBooks" className="h-5 w-auto"><text x="0" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="currentColor">QuickBooks</text></svg>,
  },
  {
    name: 'Sage',
    svg: <svg viewBox="0 0 55 28" fill="none" aria-label="Sage" className="h-6 w-auto"><text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="currentColor">Sage</text></svg>,
  },
  {
    name: 'IRIS',
    svg: <svg viewBox="0 0 45 28" fill="none" aria-label="IRIS" className="h-5 w-auto"><text x="0" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="currentColor">IRIS</text></svg>,
  },
  {
    name: 'FreeAgent',
    svg: <svg viewBox="0 0 100 28" fill="none" aria-label="FreeAgent" className="h-5 w-auto"><text x="0" y="20" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="16" fill="currentColor">FreeAgent</text></svg>,
  },
  {
    name: 'Dext',
    svg: <svg viewBox="0 0 48 28" fill="none" aria-label="Dext" className="h-5 w-auto"><text x="0" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="currentColor">Dext</text></svg>,
  },
]

export default function Integrations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-14 border-y" style={{ backgroundColor: '#fff', borderColor: '#E2E8F0' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div ref={ref} className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Label */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }} className="flex-shrink-0 text-center md:text-left">
            <p className="font-sans text-xs uppercase tracking-widest mb-1"
              style={{ color: '#9CA3AF', letterSpacing: '0.14em' }}>
              Works with
            </p>
            <p className="font-serif font-semibold text-lg leading-tight" style={{ color: '#111111' }}>
              Your existing<br />software stack
            </p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 flex-shrink-0" style={{ backgroundColor: '#E2E8F0' }} aria-hidden />

          {/* Logos */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-10 flex-1">
            {SOFTWARE.map((s, i) => (
              <motion.div key={s.name}
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="transition-opacity duration-200 hover:opacity-100"
                style={{ color: '#9CA3AF', opacity: 0.6 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
                {s.svg}
              </motion.div>
            ))}
          </motion.div>

          {/* And more */}
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex-shrink-0 font-sans text-xs"
            style={{ color: '#9CA3AF' }}>
            + many more
          </motion.p>
        </div>
      </div>
    </section>
  )
}
