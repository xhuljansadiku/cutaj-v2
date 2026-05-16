import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Phone } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'About Cutaj | London Renovation Specialists',
  description:
    "Meet the team behind London's trusted renovation specialists. 22+ years experience, 800+ projects completed, fully insured. Honest, reliable renovation experts.",
  alternates: { canonical: 'https://cutajconstruction.co.uk/about' },
}

const values = [
  { title: 'Honest & Transparent', desc: 'Fixed price quotes. No hidden costs. No surprise invoices. Ever.' },
  { title: 'Precision Craftsmanship', desc: 'We obsess over every detail — because that\'s what makes the difference.' },
  { title: 'Respect for Your Home', desc: 'Clean, tidy and professional. We treat your home like our own.' },
  { title: 'Clear Communication', desc: 'Your project manager keeps you updated every step of the way.' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
            alt="Cutaj renovation team at work"
            fill className="object-cover" sizes="100vw" priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-transparent" />
        </div>
        <div className="relative z-10 section-px">
          <SectionLabel light>About Us</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">
            London&apos;s Renovation Specialists, Since 2013.
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            We started with a simple belief: renovation should be straightforward, transparent
            and exceptional. 22 years and 800+ projects later, that belief drives everything we do.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-heading font-display font-bold text-[var(--color-primary)] mb-6">
                Built on Trust. Driven by Craft.
              </h2>
              <div className="space-y-4 text-[var(--color-neutral-600)]">
                <p>
                  Cutaj was founded in 2013 with one goal: to be the renovation company we
                  always wished existed. Reliable, transparent, and obsessively focused on quality.
                </p>
                <p>
                  We started with small bathroom renovations in West London. Word spread quickly —
                  not through advertising, but through clients who told their friends and family.
                  Today, the majority of our projects come through personal recommendations.
                </p>
                <p>
                  We deliberately stay small. We take a limited number of projects each month
                  because we believe every client deserves our full focus, not just a slot in a
                  busy schedule. Your project matters to us — because our reputation depends on it.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                <Image src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80" alt="Kitchen renovation" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] mt-8">
                <Image src="https://images.unsplash.com/photo-1620626011761-996317702519?w=600&q=80" alt="Bathroom renovation" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] -mt-8">
                <Image src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80" alt="Home refurbishment" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                <Image src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80" alt="Kitchen detail" fill className="object-cover" sizes="300px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-[var(--color-cream)]">
        <div className="section-px">
          <div className="text-center max-w-xl mx-auto mb-12">
            <SectionLabel className="justify-center">Our Values</SectionLabel>
            <h2 className="text-heading font-display font-bold text-[var(--color-primary)]">
              What Makes Us Different.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)]">
                <CheckCircle className="w-6 h-6 text-[var(--color-gold)] mb-4" />
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-py bg-[var(--color-primary)]">
        <div className="section-px">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '2013', label: 'Founded' },
              { num: '800+', label: 'Projects Completed' },
              { num: '★ 4.9', label: 'Google Rating' },
              { num: '22+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-[var(--color-gold)] mb-2">{stat.num}</div>
                <div className="text-white/60 text-sm uppercase tracking-[0.1em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  )
}
