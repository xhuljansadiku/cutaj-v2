import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Areas We Cover | Renovation Services Across London | Cutaj',
  description:
    'Cutaj provides premium renovation services across London. Kitchen, bathroom and full home refurbishments in Chelsea, Fulham, Kensington, Brixton and all London boroughs.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/areas' },
}

const areas = [
  { name: 'Chelsea', slug: 'chelsea', desc: 'Kitchen & bathroom renovations in Chelsea' },
  { name: 'Fulham', slug: 'fulham', desc: 'Premium home refurbishments in Fulham' },
  { name: 'Kensington', slug: 'kensington', desc: 'Luxury renovations in Kensington' },
  { name: 'Brixton', slug: 'brixton', desc: 'Full home refurbishments in Brixton' },
  { name: 'Clapham', slug: 'clapham', desc: 'Kitchen extensions & renovations in Clapham' },
  { name: 'Islington', slug: 'islington', desc: 'Renovation specialists in Islington' },
  { name: 'Hackney', slug: 'hackney', desc: 'Home renovations across Hackney' },
  { name: 'Wandsworth', slug: 'wandsworth', desc: 'Renovation services in Wandsworth' },
  { name: 'Battersea', slug: 'battersea', desc: 'Kitchen & bathroom renovations in Battersea' },
  { name: 'Hammersmith', slug: 'hammersmith', desc: 'Home refurbishments in Hammersmith' },
  { name: 'Putney', slug: 'putney', desc: 'Renovation specialists in Putney' },
  { name: 'Wimbledon', slug: 'wimbledon', desc: 'Premium renovations in Wimbledon' },
]

export default function AreasPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--color-primary)]">
        <div className="section-px">
          <SectionLabel light>Where We Work</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">
            Renovation Services Across London
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            We cover all London boroughs and surrounding areas. If you&apos;re unsure whether we
            cover your area — just ask. We probably do.
          </p>
        </div>
      </section>

      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex items-start gap-4 bg-white p-5 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-gold-dark)]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-gold-dark)] transition-colors">
                    {area.name}
                  </h2>
                  <p className="text-xs text-[var(--color-neutral-600)]">{area.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-neutral-600)] group-hover:text-[var(--color-gold)] group-hover:translate-x-1 transition-all mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
