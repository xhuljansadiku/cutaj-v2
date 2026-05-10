import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { getServiceBySlug } from '@/lib/services'
import { getProjectsByCategory } from '@/lib/projects'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import ProjectCard from '@/components/ui/ProjectCard'
import QuoteForm from '@/components/ui/QuoteForm'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Home Extensions London | Rear Extension, Loft Conversion | Cutaj',
  description:
    'Add space and value with a beautifully designed home extension in London. Rear extensions, side returns, loft conversions. Fixed price, fully managed.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/renovations/extensions' },
}

const service = getServiceBySlug('extensions')!
const projects = getProjectsByCategory('extension')

export default function ExtensionsPage() {
  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.image} alt="Home extensions London" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-transparent" />
        </div>
        <div className="relative z-10 section-px">
          <SectionLabel light>Renovation Services</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">Extensions & Conversions London</h1>
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
              <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-4">Add Space Without Moving House.</h2>
              <p className="text-[var(--color-neutral-600)] mb-8">{service.longDescription}</p>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-primary)]">{f}</span>
                  </li>
                ))}
              </ul>
              {service.startingFrom && (
                <div className="mt-6 inline-block bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 rounded-lg px-5 py-3">
                  <div className="text-xs text-[var(--color-neutral-600)] uppercase tracking-[0.1em]">Starting from</div>
                  <div className="text-2xl font-display font-bold text-[var(--color-primary)]">{service.startingFrom}</div>
                  <div className="text-xs text-[var(--color-neutral-600)]">Full build. Fixed price.</div>
                </div>
              )}
            </div>
            <div className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card-hover)]">
              <Image src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80" alt="Home extension detail" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section-py bg-[var(--color-off-white)]">
          <div className="section-px">
            <SectionLabel>Our Extension Projects</SectionLabel>
            <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-10">Recent Extensions & Conversions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (<ProjectCard key={project.slug} project={project} />))}
            </div>
          </div>
        </section>
      )}

      <section className="section-py bg-[var(--color-primary)]">
        <div className="section-px">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-heading font-display font-bold text-white mb-3">Get a Free Extension Quote</h2>
            <p className="text-white/60">We respond within 24 hours.</p>
          </div>
          <div className="max-w-xl mx-auto"><QuoteForm dark /></div>
        </div>
      </section>
      <FAQ />
    </>
  )
}
