'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { easeOutExpo } from '@/lib/motion'

const benefits = [
  { title: 'Dedicated Project Manager', desc: 'One person. One number. Total accountability from day one to final handover.' },
  { title: 'Fixed Price Quotes', desc: 'No surprise invoices, no hidden costs. Your quote is your price — guaranteed.' },
  { title: 'Fully Insured & Verified', desc: 'Checkatrade verified, £5M+ liability cover. Every trade, fully covered.' },
  { title: 'Clean & Respectful Teams', desc: 'We treat your home with the care and respect it deserves. Always.' },
  { title: '22+ Years of Expertise', desc: 'Over a decade of renovation experience. We have seen — and solved — everything.' },
  { title: 'Aftercare Guarantee', desc: 'We do not walk away at handover. Snag support and aftercare included.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-[var(--color-off-white)]">
      <div className="section-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-lg mx-auto lg:mx-0 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card-hover)]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Premium kitchen renovation by Cutaj"
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:right-0 lg:-right-10 bg-[var(--color-primary)] text-white p-6 rounded-[var(--radius-card)] shadow-xl w-40">
              <div className="font-display text-4xl font-bold text-[var(--color-gold)] mb-1">800+</div>
              <div className="text-xs text-white/70 uppercase tracking-[0.1em]">Projects<br />Completed</div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[var(--color-gold)]/30 rounded-[var(--radius-card)]" />
          </motion.div>

          <div>
            <SectionLabel>Why Cutaj</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="text-display font-display font-bold text-[var(--color-primary)] mb-4"
            >
              The Renovation Company That Treats Your Home Like Their Own.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              className="text-[var(--color-neutral-600)] mb-8"
            >
              We are not a big faceless contractor. We are a specialist renovation company that
              takes a limited number of projects each month — so every client gets our full focus.
            </motion.p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: easeOutExpo }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] text-sm mb-0.5">{benefit.title}</h3>
                    <p className="text-sm text-[var(--color-neutral-600)]">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button href="/contact" variant="primary" size="lg" arrow>Get a Free Quote</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
