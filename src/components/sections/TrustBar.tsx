'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Award, Star } from 'lucide-react'
import { easeOutExpo } from '@/lib/motion'

const stats = [
  { icon: Star, value: '4.9 / 5', label: 'Google Rating', sub: '87 verified reviews' },
  { icon: Award, value: '200+', label: 'Projects Completed', sub: 'Across London & the UK' },
  { icon: Clock, value: '12+ Years', label: 'Experience', sub: 'Renovation specialists' },
  { icon: Shield, value: 'Fully Insured', label: '£5M+ Cover', sub: 'All trades covered' },
]

export default function TrustBar() {
  return (
    <section className="bg-[var(--color-cream)] border-b border-[var(--color-neutral-200)]">
      <div className="section-px py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOutExpo }}
              className="flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0 mt-0.5">
                <stat.icon className="w-5 h-5 text-[var(--color-gold-dark)]" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-[var(--color-primary)]">{stat.value}</div>
                <div className="text-sm font-medium text-[var(--color-primary)]">{stat.label}</div>
                <div className="text-xs text-[var(--color-neutral-600)]">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-neutral-200)] flex flex-wrap items-center gap-4 md:gap-8">
          <span className="text-xs text-[var(--color-neutral-600)] uppercase tracking-[0.1em]">Verified with:</span>
          {['Checkatrade', 'TrustATrader', 'Fully Insured', 'Free Quotes'].map((badge) => (
            <span
              key={badge}
              className="text-xs font-semibold text-[var(--color-primary)] bg-white border border-[var(--color-neutral-200)] px-3 py-1.5 rounded-full"
            >
              ✓ {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
