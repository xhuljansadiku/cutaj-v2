import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import FinalCTA from '@/components/sections/FinalCTA'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Renovation Projects London | Before & After Portfolio | Cutaj',
  description:
    'Browse our portfolio of kitchen, bathroom and full home renovation projects across London. Real transformations, real clients.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/projects' },
}

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Kitchens', value: 'kitchen' },
  { label: 'Bathrooms', value: 'bathroom' },
  { label: 'Refurbishments', value: 'refurbishment' },
  { label: 'Extensions', value: 'extension' },
]

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=80"
            alt="Renovation portfolio"
            fill className="object-cover" sizes="100vw" priority
          />
        </div>
        <div className="relative z-10 section-px text-center">
          <SectionLabel className="justify-center" light>Our Work</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4">
            Real Homes. Real Transformations.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Every project tells a story. Browse our portfolio of kitchen, bathroom
            and full home renovations across London.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          {/* Filter tabs (static — JS filtering can be added progressively) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className="px-4 py-2 text-sm font-medium rounded-full border border-[var(--color-neutral-200)] text-[var(--color-primary)] bg-white cursor-pointer hover:border-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors"
              >
                {cat.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
