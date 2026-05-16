import type { Metadata } from 'next'
import Image from 'next/image'
import { getCommercialServices } from '@/lib/services'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Commercial Fit-Out London | Office, Retail & Hospitality | Cutaj',
  description:
    'Expert commercial fit-out contractors in London. Office fit-outs, retail fit-outs, restaurant & hospitality, warehouse & industrial. Fixed price, fully managed.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/commercial' },
}

const commercialServices = getCommercialServices()

export default function CommercialPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Commercial Fit-Out', href: '/commercial' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80"
            alt="Commercial fit-out London by Cutaj"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/65 to-transparent" />
        </div>
        <div className="relative z-10 section-px">
          <SectionLabel light>Commercial Fit-Out</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">
            Commercial Fit-Out Specialists Across London
          </h1>
          <p className="text-white/75 text-lg max-w-xl mb-8">
            From Cat A shell to fully operational space — we deliver commercial fit-outs
            on time, on budget and to a standard your business deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white">
              Request a Quote
            </Button>
            <a
              href="tel:07908787037"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-md border border-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Call 07908 787 037
            </a>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="bg-[var(--color-primary)] py-10">
        <div className="section-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '22+', label: 'Years experience' },
              { value: '800+', label: 'Commercial projects' },
              { value: '100%', label: 'On-time delivery' },
              { value: '£1M+', label: 'Largest fit-out' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-display font-bold text-[var(--color-gold)] mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          <SectionLabel>What We Deliver</SectionLabel>
          <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-10 max-w-xl">
            Every Type of Commercial Space, Built to Last.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercialServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Cutaj for commercial */}
      <section className="section-py bg-[var(--color-cream)]">
        <div className="section-px">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <SectionLabel>Why Cutaj</SectionLabel>
            <h2 className="text-heading font-display font-bold text-[var(--color-primary)]">
              The Commercial Fit-Out Partner You Can Rely On
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Single Point of Contact',
                body: 'One dedicated project manager from briefing to handover. No juggling contractors. No chasing.',
              },
              {
                title: 'Fixed Price. No Surprises.',
                body: 'We quote thoroughly and stand by our numbers. You will always know exactly what you are spending.',
              },
              {
                title: 'Delivered On Time',
                body: 'We understand that business downtime costs money. Our programmes are realistic and our teams deliver.',
              },
              {
                title: 'Fully Compliant',
                body: 'We manage planning, building regulations, fire safety and health & safety — so you do not have to.',
              },
              {
                title: 'All Trades In-House',
                body: 'Joinery, M&E, flooring, plastering — all managed under one roof. No subcontractor hand-offs.',
              },
              {
                title: 'Post-Handover Support',
                body: 'We do not disappear after handover. We remain on call for any snagging or follow-up works.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mb-4" />
                <h3 className="font-display font-bold text-[var(--color-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
