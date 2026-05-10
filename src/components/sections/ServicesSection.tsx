'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/services'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { easeOutExpo } from '@/lib/motion'

export default function ServicesSection() {
  return (
    <section className="section-py bg-[var(--color-off-white)]">
      <div className="section-px">
        <div className="max-w-2xl mb-12 md:mb-16">
          <SectionLabel>What We Do</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            className="text-display font-display font-bold text-[var(--color-primary)] mb-4"
          >
            Specialists in Every Room.
            <br />
            <span className="text-[var(--color-gold-dark)]">Experts in Every Detail.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            className="text-[var(--color-neutral-600)] text-lg"
          >
            From a single bathroom to a complete home transformation — we bring the same
            level of craft, care and commitment to every project we take on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutExpo }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {services.slice(3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>

        <div className="text-center">
          <Button href="/renovations" variant="ghost" arrow>View All Services</Button>
        </div>
      </div>
    </section>
  )
}
