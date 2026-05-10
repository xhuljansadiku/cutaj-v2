'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { easeOutExpo } from '@/lib/motion'

const testimonials = [
  { text: "Cutaj transformed our kitchen beyond anything we imagined. The attention to detail was extraordinary — from the way the island is positioned to the quality of every single finish. We use our kitchen every single day and it makes us happy every time.", author: 'Sarah M.', area: 'Chelsea', service: 'Kitchen Renovation', date: 'March 2025', rating: 5 },
  { text: "We've had guests who genuinely thought we'd moved to a new house. The bathroom is spectacular. Cutaj managed everything from start to finish with zero stress on our part.", author: 'James & Claire T.', area: 'Fulham', service: 'Bathroom Renovation', date: 'February 2025', rating: 5 },
  { text: "We handed over the keys and Cutaj handled everything. Six months later we moved into our dream home. They communicated constantly, never left us in the dark, and the workmanship is immaculate.", author: 'The Okonkwo Family', area: 'Brixton', service: 'Full Home Refurbishment', date: 'December 2024', rating: 5 },
  { text: "From the very first meeting I knew these were the right people for the job. They were honest about timelines, stuck to the budget, and the finished kitchen is genuinely the best room in the house now.", author: 'David H.', area: 'Islington', service: 'Kitchen Renovation', date: 'November 2024', rating: 5 },
  { text: "The en-suite they built for us is the stuff of dreams. Calacatta marble, gold fixtures, underfloor heating — and it all came in on budget. Cannot recommend them highly enough.", author: 'Caroline R.', area: 'Kensington', service: 'Bathroom Renovation', date: 'October 2024', rating: 5 },
  { text: "What impressed me most was how tidy they were. Three tradesmen in my house for six weeks and not a scuff on a wall or a mark on a floor. The renovation is beautiful — five stars without hesitation.", author: 'Michael S.', area: 'Clapham', service: 'Full Home Refurbishment', date: 'September 2024', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="section-py bg-[var(--color-cream)]">
      <div className="section-px">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <SectionLabel className="justify-center">Client Stories</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="text-display font-display font-bold text-[var(--color-primary)] mb-4"
          >
            Don&apos;t Take Our Word For It.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            className="text-[var(--color-neutral-600)]"
          >
            Real clients. Real projects. Real transformations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOutExpo }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[var(--color-neutral-600)]">
            ★★★★★{' '}
            <span className="font-semibold text-[var(--color-primary)]">4.9 / 5</span>
            {' '}from{' '}
            <span className="font-semibold text-[var(--color-primary)]">87 verified Google reviews</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
