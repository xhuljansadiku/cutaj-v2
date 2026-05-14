'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { easeOutExpo } from '@/lib/motion'

const faqs = [
  { q: 'How long does a kitchen renovation take?', a: 'A standard kitchen renovation typically takes 3–6 weeks, depending on the scope of work. A simple kitchen refresh might be 2 weeks, while a full structural redesign with new plumbing and electrical work could take 6–8 weeks. We give you a detailed timeline before we start — and we stick to it.' },
  { q: 'Do you provide a fixed price quote?', a: 'Yes. Every quote we provide is fully itemised and fixed price. You will know exactly what you are paying before a single wall is touched. No surprise invoices, no hidden extras.' },
  { q: 'Are you fully insured?', a: "Yes. We carry £5M+ public liability insurance, employer's liability insurance, and all our tradespeople are individually insured. You are fully protected throughout your renovation." },
  { q: 'Do I need to move out during the renovation?', a: "For smaller renovations like a bathroom or single-room update, most clients stay in their home. For full home refurbishments, we'll advise you honestly — it depends on the scope and duration. We'll always help you understand what to expect before the project starts." },
  { q: 'What areas do you cover?', a: "We cover all London boroughs and surrounding areas. Our main areas include Chelsea, Fulham, Kensington, Brixton, Clapham, Islington, Hackney, Wandsworth and more. Not sure if we cover your area? Just ask — we're usually able to help." },
  { q: 'Do you handle all trades — plumbing, electrical, tiling?', a: "Yes. We manage and coordinate all trades in-house or through our trusted, vetted network. You deal with us — one point of contact — and we handle everyone else. Gas work is carried out by Gas Safe registered engineers, electrical work by NICEIC-registered electricians." },
  { q: 'How do I get started?', a: "Simply request a free quote using the form on this page, or call us directly on 07956 299 610. We'll arrange a free site visit at a time that suits you, take measurements and provide a full written quote within 48 hours." },
  { q: 'Can I see examples of previous work?', a: "Absolutely. You can browse our project portfolio on this website. We also welcome you to speak with previous clients — we're happy to arrange references for larger projects." },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[var(--color-neutral-200)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-gold-dark)] transition-colors text-sm md:text-base">
          {faq.q}
        </span>
        <span className="w-8 h-8 rounded-full bg-[var(--color-cream)] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--color-gold)]/10">
          {isOpen ? <Minus className="w-4 h-4 text-[var(--color-gold)]" /> : <Plus className="w-4 h-4 text-[var(--color-neutral-600)]" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[var(--color-neutral-600)] leading-relaxed max-w-3xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-py bg-[var(--color-cream)]">
      <div className="section-px">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <SectionLabel>Questions</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="text-heading font-display font-bold text-[var(--color-primary)] mb-4"
            >
              Everything You Need to Know.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[var(--color-neutral-600)] text-sm mb-6"
            >
              Can&apos;t find your answer? Call us — we&apos;re always happy to chat.
            </motion.p>
            <a href="tel:07956299610" className="text-sm font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors">
              07956 299 610 →
            </a>
          </div>
          <div className="lg:col-span-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
