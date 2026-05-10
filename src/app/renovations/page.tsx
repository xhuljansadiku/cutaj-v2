import type { Metadata } from 'next'
import Image from 'next/image'
import { services } from '@/lib/services'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Renovation Services London | Kitchen, Bathroom & Home Refurbishment',
  description:
    'Premium renovation services across London. Kitchen renovations, bathroom renovations, full home refurbishments and extensions. Fixed price quotes, fully insured.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/renovations' },
}

export default function RenovationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Renovation Services', href: '/renovations' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1800&q=80"
            alt="Renovation services"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 section-px">
          <SectionLabel light>What We Do</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">
            Premium Renovation Services Across London
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            From a single bathroom to a complete home transformation — we bring the same
            level of craft, care and commitment to every project.
          </p>
          <Button href="/contact" size="lg" className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
