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
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Restaurant & Hospitality Fit-Out London | Cutaj Construction',
  description:
    'Hospitality fit-out specialists in London. Restaurants, bars, cafés and hotels built to the highest spec. Commercial kitchen installation, full compliance, on-time delivery.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/commercial/hospitality' },
}

const service = getServiceBySlug('hospitality-fit-out')!
const projects = getProjectsByCategory('commercial')

export default function HospitalityFitOutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Commercial Fit-Out', href: '/commercial' },
          { name: 'Restaurant & Hospitality', href: '/commercial/hospitality' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt="Restaurant fit-out London by Cutaj"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-transparent" />
        </div>
        <div className="relative z-10 section-px">
          <SectionLabel light>Commercial Fit-Out</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">
            Restaurant & Hospitality Fit-Out London
          </h1>
          <p className="text-white/75 text-lg max-w-xl mb-8">
            From intimate restaurants to high-volume bars and hotels — we build hospitality
            spaces that deliver atmosphere, durability and compliance from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white">
              Get a Free Quote
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

      {/* What's included */}
      <section className="section-py bg-[var(--color-cream)]">
        <div className="section-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-4">
                Hospitality Spaces Built to Perform.
              </h2>
              <p className="text-[var(--color-neutral-600)] mb-8">
                Hospitality fit-outs are complex — strict compliance, heavy-use materials,
                commercial kitchen installations. We have done it all and we do it right.
              </p>
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
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="Restaurant fit-out detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="section-py bg-[var(--color-off-white)]">
          <div className="section-px">
            <SectionLabel>Our Commercial Projects</SectionLabel>
            <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-10">
              Recent Commercial Fit-Outs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote form */}
      <section className="section-py bg-[var(--color-primary)]">
        <div className="section-px">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-heading font-display font-bold text-white mb-3">
              Get a Free Hospitality Fit-Out Quote
            </h2>
            <p className="text-white/60">
              Tell us about your venue and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <QuoteForm dark />
          </div>
        </div>
      </section>

      <FAQ />
    </>
  )
}
