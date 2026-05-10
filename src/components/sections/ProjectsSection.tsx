'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/lib/projects'
import SectionLabel from '@/components/ui/SectionLabel'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'
import { easeOutExpo } from '@/lib/motion'

const featured = getFeaturedProjects()

export default function ProjectsSection() {
  const [main, ...rest] = featured

  return (
    <section className="section-py bg-[var(--color-cream)]">
      <div className="section-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <SectionLabel>Our Work</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="text-display font-display font-bold text-[var(--color-primary)]"
            >
              Real Homes.
              <br />
              Real Transformations.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/projects" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-dark)] hover:gap-3 transition-all duration-200">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {main && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <BeforeAfterSlider
                beforeImage={main.beforeImage}
                afterImage={main.afterImage}
                className="shadow-[var(--shadow-card-hover)]"
              />
              <div className="lg:pl-8">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-gold-dark)] bg-[var(--color-gold)]/10 px-2.5 py-1 rounded-full mb-4">
                  {main.categoryLabel}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-3">{main.title}</h3>
                <p className="text-[var(--color-neutral-600)] mb-2 text-sm">{main.location} &middot; {main.year}</p>
                <p className="text-[var(--color-neutral-600)] leading-relaxed mb-6">{main.description}</p>
                {main.testimonial && (
                  <blockquote className="border-l-2 border-[var(--color-gold)] pl-5 mb-6">
                    <p className="text-sm text-[var(--color-neutral-600)] italic leading-relaxed">
                      &ldquo;{main.testimonial.text.slice(0, 120)}...&rdquo;
                    </p>
                    <cite className="text-xs text-[var(--color-primary)] font-semibold not-italic mt-2 block">
                      — {main.testimonial.author}, {main.testimonial.area}
                    </cite>
                  </blockquote>
                )}
                <Link href={`/projects/${main.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-dark)] hover:gap-3 transition-all duration-200">
                  View full project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutExpo }}
              >
                <Link href={`/projects/${project.slug}`} className="group relative block overflow-hidden rounded-[var(--radius-card)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.afterImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 overlay-gradient opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-gold-light)] bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full mb-2">
                        {project.categoryLabel}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/60 text-sm">{project.location}</p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="flex items-center gap-1.5 bg-white text-[var(--color-primary)] text-xs font-semibold px-3 py-1.5 rounded-full">
                        View <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
