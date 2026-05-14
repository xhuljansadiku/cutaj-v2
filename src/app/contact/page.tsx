import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import QuoteForm from '@/components/ui/QuoteForm'
import FAQ from '@/components/sections/FAQ'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Renovation Quote | Cutaj London',
  description:
    "Contact Cutaj for a free renovation quote. We cover all London boroughs. Call 07956 299 610 or fill in our form — we respond within 24 hours.",
  alternates: { canonical: 'https://cutajconstruction.co.uk/contact' },
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '07956 299 610',
    href: 'tel:07956299610',
    desc: 'Mon–Sat, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@cutajconstruction.co.uk',
    href: 'mailto:info@cutajconstruction.co.uk',
    desc: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'London, UK',
    href: null,
    desc: 'All London boroughs covered',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat',
    href: null,
    desc: '8:00am – 6:00pm',
  },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--color-primary)]">
        <div className="section-px">
          <SectionLabel light>Get in Touch</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-xl">
            Let&apos;s Talk About Your Project.
          </h1>
          <p className="text-white/70 text-lg max-w-lg">
            Free consultation. No obligation. We respond within 24 hours and can
            visit your property at a time that suits you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-[var(--color-primary)] mb-2">
                  Contact Details
                </h2>
                <p className="text-sm text-[var(--color-neutral-600)]">
                  Prefer to speak to someone directly? Give us a call — we love talking renovation.
                </p>
              </div>

              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[var(--color-gold-dark)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-neutral-600)] uppercase tracking-[0.1em] mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-gold-dark)] transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-[var(--color-primary)] text-sm">{item.value}</span>
                    )}
                    <div className="text-xs text-[var(--color-neutral-600)] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}

              {/* Areas */}
              <div className="bg-[var(--color-cream)] rounded-[var(--radius-card)] p-5">
                <h3 className="font-semibold text-[var(--color-primary)] text-sm mb-3">Areas We Cover</h3>
                <p className="text-sm text-[var(--color-neutral-600)]">
                  Chelsea, Fulham, Kensington, Brixton, Clapham, Islington, Hackney, Wandsworth,
                  and all London boroughs. Not sure? Just ask.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-[var(--shadow-card)] p-8">
              <h2 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-2">
                Request a Free Quote
              </h2>
              <p className="text-sm text-[var(--color-neutral-600)] mb-8">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  )
}
