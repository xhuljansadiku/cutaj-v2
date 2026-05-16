import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import QuoteCTABanner from '@/components/sections/QuoteCTABanner'
import Testimonials from '@/components/sections/Testimonials'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Cutaj | Premium Renovation & Refurbishment Specialists London',
  description:
    "London's trusted renovation specialists. Expert kitchen, bathroom & full home refurbishments. Fixed price quotes, 22+ years experience, fully insured. Free consultation.",
  alternates: { canonical: 'https://cutajconstruction.co.uk' },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <QuoteCTABanner />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  )
}
