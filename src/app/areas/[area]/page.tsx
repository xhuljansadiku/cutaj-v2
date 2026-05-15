import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import ServicesSection from '@/components/sections/ServicesSection'
import Testimonials from '@/components/sections/Testimonials'
import QuoteForm from '@/components/ui/QuoteForm'
import FAQ from '@/components/sections/FAQ'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

const areaData: Record<string, { name: string; desc: string }> = {
  chelsea: { name: 'Chelsea', desc: 'Premium renovation services in Chelsea, SW3 & SW10.' },
  fulham: { name: 'Fulham', desc: 'Expert renovation specialists serving Fulham, SW6.' },
  kensington: { name: 'Kensington', desc: 'Luxury renovations across Kensington, W8 & W14.' },
  brixton: { name: 'Brixton', desc: 'Full home refurbishments across Brixton, SW2 & SW9.' },
  clapham: { name: 'Clapham', desc: 'Kitchen and bathroom renovations across Clapham, SW4.' },
  islington: { name: 'Islington', desc: 'Renovation specialists serving Islington, N1.' },
  hackney: { name: 'Hackney', desc: 'Home renovations across Hackney, E8 & E9.' },
  wandsworth: { name: 'Wandsworth', desc: 'Renovation services across Wandsworth, SW18.' },
  battersea: { name: 'Battersea', desc: 'Renovation specialists across Battersea, SW11.' },
  hammersmith: { name: 'Hammersmith', desc: 'Home refurbishments across Hammersmith, W6.' },
  putney: { name: 'Putney', desc: 'Renovation specialists serving Putney, SW15.' },
  wimbledon: { name: 'Wimbledon', desc: 'Premium renovations across Wimbledon, SW19.' },
}

export function generateStaticParams() {
  return Object.keys(areaData).map((area) => ({ area }))
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params
  const data = areaData[area]
  if (!data) return {}
  return {
    title: `Renovation Specialists ${data.name} | Kitchen & Bathroom Renovation | Cutaj`,
    description: `Expert kitchen, bathroom & full home renovation specialists in ${data.name}, London. Fixed price quotes, fully insured. Free consultation available.`,
    alternates: { canonical: `https://cutajconstruction.co.uk/areas/${area}` },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params
  const data = areaData[area]
  if (!data) notFound()

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Areas', href: '/areas' },
          { name: data.name, href: `/areas/${area}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--color-primary)]">
        <div className="section-px">
          <SectionLabel light>Renovation Specialists</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">
            Renovation Specialists in {data.name}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Premium kitchen, bathroom and full home renovation services in {data.name}.
            Fixed price quotes. Fully insured. Free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white">
              Get a Free Quote in {data.name}
            </Button>
            <a href="tel:02030515418" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-md border border-white/20 transition-all duration-200">
              Call 020 3051 5418
            </a>
          </div>
        </div>
      </section>

      {/* Local content */}
      <section className="section-py bg-[var(--color-cream)]">
        <div className="section-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Why Choose Cutaj in {data.name}</SectionLabel>
              <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-4">
                {data.name}&apos;s Trusted Renovation Team
              </h2>
              <div className="space-y-4 text-[var(--color-neutral-600)] text-sm leading-relaxed">
                <p>
                  We have been transforming homes in {data.name} and the surrounding area for over
                  12 years. Our clients in {data.name} choose us because we deliver exceptional
                  work, on time and on budget — every single time.
                </p>
                <p>
                  Whether you&apos;re planning a kitchen renovation, a luxury bathroom refurbishment,
                  or a complete home transformation, our specialist team is here to help.
                </p>
                <p>
                  {data.desc} We are fully insured, Checkatrade verified, and all our quotes
                  are fixed-price — no surprises.
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-primary)] rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Free Quote for {data.name}
              </h3>
              <p className="text-white/60 text-sm mb-6">We respond within 24 hours.</p>
              <QuoteForm dark compact />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Testimonials />
      <FAQ />
    </>
  )
}
