'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { easeOutExpo } from '@/lib/motion'

const steps = [
  { number: '01', title: 'Free Quote', desc: "Tell us about your project. No pressure, no commitment. We'll listen and give honest advice." },
  { number: '02', title: 'Site Survey', desc: 'We visit your home, take measurements, assess the space and plan everything in detail.' },
  { number: '03', title: 'We Build', desc: 'Our skilled team delivers your renovation. Your project manager keeps you updated throughout.' },
  { number: '04', title: 'You Love It', desc: 'Handover, snagging walkthrough and aftercare. Your home — transformed.' },
]

export default function Process() {
  return (
    <section className="section-py bg-[var(--color-off-white)]">
      <div className="section-px">
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-20">
          <SectionLabel className="justify-center">The Process</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="text-display font-display font-bold text-[var(--color-primary)]"
          >
            Simple from Start to Finish.
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-[var(--color-neutral-200)] z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: easeOutExpo }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center mb-6 bg-[var(--color-off-white)]">
                  <span className="font-display text-2xl font-bold text-[var(--color-gold-dark)]">{step.number}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
