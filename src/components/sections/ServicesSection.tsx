'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, UtensilsCrossed, Building2, ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { easeOutExpo } from '@/lib/motion'

const services = [
  {
    icon: Home,
    title: 'Renovations',
    description: 'Complete property refurbishments from start to finish.',
    href: '/renovations',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchens & Bathrooms',
    description: 'Bespoke design and professional installation with quality finishes.',
    href: '/renovations/kitchen',
  },
  {
    icon: Building2,
    title: 'Fit-Outs',
    description: 'Residential and commercial fit-outs tailored to your space and requirements.',
    href: '/commercial',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-py bg-[var(--color-off-white)]">
      <div className="section-px">
        <div className="max-w-2xl mb-12 md:mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            className="text-display font-display font-bold text-[var(--color-primary)] mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            className="text-[var(--color-neutral-600)] text-lg"
          >
            From a single bathroom to a full commercial fit-out — we bring the same
            level of craft and commitment to every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutExpo }}
            >
              <Link
                href={service.href}
                className="group flex flex-col items-center text-center p-10 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] border border-[var(--color-neutral-200)] hover:border-[var(--color-gold)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[var(--color-gold)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-gold-dark)] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-gold-dark)] group-hover:gap-3 transition-all duration-200">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
