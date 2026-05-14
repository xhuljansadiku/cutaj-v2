'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import QuoteForm from '@/components/ui/QuoteForm'
import { easeOutExpo } from '@/lib/motion'

export default function QuoteCTABanner() {
  return (
    <section className="section-py bg-[var(--color-primary)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="section-px relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionLabel light>Free Consultation</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="text-display font-display font-bold text-white mb-4"
            >
              Ready to Transform Your Home?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              className="text-white/60 mb-8 text-lg"
            >
              Get your free, no-obligation quote today. We respond within 24 hours
              and visit your property at a time that suits you.
            </motion.p>

            <motion.a
              href="tel:07956299610"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 text-white group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center group-hover:bg-[var(--color-gold-dark)] transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-[0.1em]">Or call directly</div>
                <div className="text-lg font-semibold">07956 299 610</div>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8"
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">Request a Free Quote</h3>
            <QuoteForm dark compact={false} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
