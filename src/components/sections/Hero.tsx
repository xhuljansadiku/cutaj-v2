'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowDown } from 'lucide-react'
import { fadeUp, easeOutExpo } from '@/lib/motion'

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1800&q=85"
          alt="Premium kitchen renovation by Cutaj"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-px pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-[var(--color-gold-light)] label-text">London&apos;s Renovation Specialists</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-hero font-display font-bold text-white mb-6 leading-[1.05]"
          >
            Your Home.
            <br />
            <span className="text-[var(--color-gold-light)]">Transformed.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-subheading text-white/75 max-w-xl mb-10 leading-relaxed"
          >
            Expert kitchen, bathroom &amp; full home renovations delivered with
            precision and care across London &amp; the UK.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white font-semibold text-sm rounded-md transition-all duration-200"
            >
              Request a Free Quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-sm rounded-md border border-white/20 transition-all duration-200"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-x-8 gap-y-3 items-center">
            {[
              { num: '200+', label: 'Renovations' },
              { num: '★ 4.9', label: '87 Reviews' },
              { num: '12+', label: 'Years Experience' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-white font-display text-xl font-bold">{item.num}</span>
                <span className="text-white/50 text-xs uppercase tracking-[0.1em]">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Phone pill (desktop) */}
      <motion.div
        {...fadeUp(0.65)}
        className="absolute top-28 right-8 z-10 hidden xl:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3"
      >
        <Phone className="w-4 h-4 text-[var(--color-gold-light)]" />
        <a href="tel:02012345678" className="text-white text-sm font-medium">
          020 1234 5678
        </a>
      </motion.div>
    </section>
  )
}
