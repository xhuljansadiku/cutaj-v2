'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { fadeUp, easeOutExpo } from '@/lib/motion'

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1800&q=85"
          alt="Premium kitchen renovation by Cutaj Construction"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/92 via-[#111111]/65 to-[#111111]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-px pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">

          {/* Label */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-[var(--color-gold-light)] label-text">Built Around Quality</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-hero font-display font-bold text-white mb-6 leading-[1.05] uppercase"
          >
            London Renovation
            <br />
            <span className="text-[var(--color-gold)]">&amp; Fit-Out</span>
            <br />
            Specialists
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-subheading text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            High-quality renovations, kitchens, bathrooms &amp; commercial fit-outs
            delivered with precision.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white font-bold text-sm rounded-md transition-all duration-200 uppercase tracking-wide"
            >
              Get a Free Quote →
            </Link>
            <a
              href="tel:07956299610"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm rounded-md border border-white/25 transition-all duration-200 uppercase tracking-wide"
            >
              <Phone className="w-4 h-4" />
              Call 07956 299 610
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-x-10 gap-y-4 items-center">
            {[
              { num: '22+', label: 'Years Experience' },
              { num: '800+', label: 'Projects Completed' },
              { num: '★ 4.9', label: '87 Reviews' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-white font-display text-2xl font-bold">{item.num}</span>
                <span className="text-white/50 text-xs uppercase tracking-[0.12em]">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
