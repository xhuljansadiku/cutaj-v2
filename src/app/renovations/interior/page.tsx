import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { getServiceBySlug } from '@/lib/services'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import QuoteForm from '@/components/ui/QuoteForm'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Interior Improvements London | Plastering, Flooring, Decorating | Cutaj',
  description:
    'Refresh and improve your home interiors. Professional plastering, painting, flooring, joinery and more across London. Free quotes, fully insured.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/renovations/interior' },
}

const service = getServiceBySlug('interior')!

export default function InteriorPage() {
  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.image} alt="Interior improvements London" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-transparent" />
        </div>
        <div className="relative z-10 section-px">
          <SectionLabel light>Renovation Services</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">Interior Improvements London</h1>
          <p className="text-white/75 text-lg max-w-xl mb-8">{service.description}</p>
          <Button href="/contact" size="lg" className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white">
            Get a Free Quote
          </Button>
        </div>
      </section>

      <section className="section-py bg-[var(--color-cream)]">
        <div className="section-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-4">Small Changes. Big Difference.</h2>
              <p className="text-[var(--color-neutral-600)] mb-8">{service.longDescription}</p>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-primary)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card-hover)]">
              <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" alt="Interior improvements detail" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--color-primary)]">
        <div className="section-px">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-heading font-display font-bold text-white mb-3">Get a Free Quote</h2>
            <p className="text-white/60">We respond within 24 hours.</p>
          </div>
          <div className="max-w-xl mx-auto"><QuoteForm dark /></div>
        </div>
      </section>
      <FAQ />
    </>
  )
}
