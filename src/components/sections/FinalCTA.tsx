'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { easeOutExpo } from '@/lib/motion'

export default function FinalCTA() {
  return (
    <section className="relative section-py overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=80"
          alt="Premium renovation by Cutaj"
          fill className="object-cover" sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/85" />
      </div>

      <div className="relative z-10 section-px text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="label-text text-[var(--color-gold-light)]">Start Your Transformation</span>
            <span className="gold-line" />
          </div>

          <h2 className="text-display font-display font-bold text-white mb-4">
            Your Dream Home Is Closer Than You Think.
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Speak to a renovation specialist today. Free consultation, no obligation.
            We respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white font-semibold text-sm rounded-md transition-all duration-200"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:07908787037"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-md border border-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              07908 787 037
            </a>
          </div>

          <p className="text-white/30 text-xs tracking-[0.1em] uppercase">Mon – Sat &nbsp;|&nbsp; 8am – 6pm</p>
        </motion.div>
      </div>
    </section>
  )
}
