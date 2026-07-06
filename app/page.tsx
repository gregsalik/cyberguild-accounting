import Nav          from '@/components/nav'
import Hero         from '@/components/hero'
import Marquee      from '@/components/marquee'
import Integrations from '@/components/integrations'
import Services     from '@/components/services'
import WhyUs        from '@/components/why-us'
import Process      from '@/components/process'
import Testimonials from '@/components/testimonials'
import Compliance   from '@/components/compliance'
import Faq          from '@/components/faq'
import CtaSection   from '@/components/cta-section'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Integrations />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Compliance />
      <Faq />
      <CtaSection />
    </main>
  )
}
