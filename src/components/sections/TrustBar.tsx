'use client'

import { motion } from 'framer-motion'
import { Clock, Building2, Shield, Users } from 'lucide-react'
import { easeOutExpo } from '@/lib/motion'

const stats = [
  { icon: Clock,     value: '22+',             label: 'Years Experience',         sub: 'Renovation specialists' },
  { icon: Building2, value: '800+',            label: 'Projects Completed',       sub: 'Across London & the UK' },
  { icon: Shield,    value: 'Fully Insured',   label: '& Certified',             sub: 'All trades covered' },
  { icon: Users,     value: 'Residential',     label: '& Commercial',            sub: 'Every project type' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#1a1a1a] border-b border-white/10">
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
              <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/15 flex items-center justify-center shrink-0 mt-0.5">
                <stat.icon className="w-5 h-5 text-[var(--color-gold)]" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">{stat.value}</div>
                <div className="text-sm font-semibold text-white/70">{stat.label}</div>
                <div className="text-xs text-white/40">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
