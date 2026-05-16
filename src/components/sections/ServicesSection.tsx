'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { easeOutExpo, viewport } from '@/lib/motion'

const services = [
  {
    label: 'Renovations',
    title: 'Full Home Renovations & Refurbishments',
    description:
      'Complete property transformations from start to finish. One project manager, one fixed price, zero stress. We handle every trade so you don\'t have to.',
    features: [
      'Dedicated project manager from day one',
      'Fixed price — no hidden costs',
      'Full rewire, replumb & structural work',
      'Kitchen, bathroom & living spaces',
      'Flooring, plastering & decorating',
    ],
    startingFrom: '£40,000',
    href: '/renovations',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85',
    imageAlt: 'Full home renovation by Cutaj Construction London',
    flip: false,
  },
  {
    label: 'Kitchens & Bathrooms',
    title: 'Bespoke Kitchens & Luxury Bathrooms',
    description:
      'Your kitchen and bathroom deserve to be exceptional. We design and build spaces that balance stunning aesthetics with everyday functionality — finished to an uncompromising standard.',
    features: [
      'Bespoke kitchen design & installation',
      'Luxury bathroom & en-suite fit-out',
      'Supply & fit — all trades included',
      'Premium tiling, worktops & fixtures',
      'Underfloor heating & integrated lighting',
    ],
    startingFrom: '£8,000',
    href: '/renovations/kitchen',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=85',
    imageAlt: 'Bespoke kitchen renovation by Cutaj Construction London',
    flip: true,
  },
  {
    label: 'Commercial Fit-Outs',
    title: 'Commercial Fit-Outs Across London',
    description:
      'From Cat A shell to fully operational space — we deliver office, retail and hospitality fit-outs on time, on budget and to a standard your business deserves.',
    features: [
      'Office, retail & hospitality fit-out',
      'Full M&E (mechanical & electrical)',
      'Partition walls, glazing & ceilings',
      'Bespoke joinery & reception areas',
      '100% on-time delivery record',
    ],
    startingFrom: '£15,000',
    href: '/commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85',
    imageAlt: 'Commercial fit-out London by Cutaj Construction',
    flip: false,
  },
]

export default function ServicesSection() {
  return (
    <section className="section-py bg-[var(--color-off-white)]">
      <div className="section-px">

        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <SectionLabel>What We Do</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            className="text-display font-display font-bold text-[var(--color-primary)] mb-4"
          >
            Renovation & Fit-Out Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            className="text-[var(--color-neutral-600)] text-lg leading-relaxed"
          >
            From a single bathroom to a full commercial fit-out — we bring the same
            level of craft, care and commitment to every project across London.
          </motion.p>
        </div>

        {/* Services */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, i) => (
            <div
              key={service.href}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${service.flip ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: service.flip ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease: easeOutExpo }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card-hover)] img-zoom">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  </div>
                {/* Decorative corner */}
                <div className={`absolute -z-10 w-32 h-32 border-2 border-[var(--color-gold)]/20 rounded-[var(--radius-card)] ${service.flip ? '-top-4 -right-4' : '-top-4 -left-4'}`} />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: service.flip ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="gold-line" />
                  <span className="label-text">{service.label}</span>
                </div>
                <h3 className="text-heading font-display font-bold text-[var(--color-primary)] mb-5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[var(--color-neutral-600)] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[var(--color-primary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] hover:bg-black text-white font-bold text-sm rounded-md transition-all duration-200 uppercase tracking-wide group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[var(--color-gold)] text-[var(--color-gold-dark)] hover:bg-[var(--color-gold)] hover:text-white font-bold text-sm rounded-md transition-all duration-200 uppercase tracking-wide"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
