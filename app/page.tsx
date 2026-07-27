import Nav                from '@/components/nav'
import AudienceBar        from '@/components/audience-bar'
import AudienceTransition from '@/components/audience-transition'
import Hero         from '@/components/hero'
import TrustBar     from '@/components/marquee'
import Positioning  from '@/components/integrations'
import Services     from '@/components/services'
import Tiers        from '@/components/why-us'
import Process      from '@/components/process'
import Outcomes     from '@/components/testimonials'
import Faq          from '@/components/faq'
import CtaSection   from '@/components/cta-section'

export default function Home() {
  return (
    <>
      <AudienceTransition />
      <Nav />
      <AudienceBar />
      <main>
        <Hero />
        <TrustBar />
        <Positioning />
        <Services />
        <Tiers />
        <Process />
        <Outcomes />
        <Faq />
        <CtaSection />
      </main>
    </>
  )
}
