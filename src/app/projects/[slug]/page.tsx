import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Calendar, Tag } from 'lucide-react'
import { projects, getProjectBySlug } from '@/lib/projects'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'
import TestimonialCard from '@/components/ui/TestimonialCard'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} | Renovation Project | Cutaj`,
    description: project.description,
    alternates: { canonical: `https://cutajconstruction.co.uk/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.afterImage }],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3)
  const otherRelated = projects.filter((p) => p.slug !== slug && p.category !== project.category).slice(0, 3 - related.length)
  const relatedProjects = [...related, ...otherRelated].slice(0, 3)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' },
          { name: project.title, href: `/projects/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 overflow-hidden">
        <div className="relative aspect-[21/9] min-h-[40vh]">
          <Image
            src={project.afterImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 overlay-gradient" />
          <div className="absolute bottom-0 left-0 right-0 section-px pb-10">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-gold-light)] bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {project.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/70">
                <MapPin className="w-3 h-3" /> {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/70">
                <Calendar className="w-3 h-3" /> {project.year}
              </span>
            </div>
            <h1 className="text-display font-display font-bold text-white">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <div className="section-px py-6 border-b border-[var(--color-neutral-200)] bg-[var(--color-off-white)]">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all projects
        </Link>
      </div>

      {/* Main content */}
      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left: details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Before/After */}
              <div>
                <h2 className="text-subheading font-display font-bold text-[var(--color-primary)] mb-4">
                  The Transformation
                </h2>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  className="shadow-[var(--shadow-card-hover)]"
                />
              </div>

              {/* Brief / Challenge / Result */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'The Brief', text: project.briefDescription },
                  { label: 'The Challenge', text: project.challenge },
                  { label: 'The Result', text: project.result },
                ].map((item) => (
                  <div key={item.label} className="bg-[var(--color-cream)] rounded-[var(--radius-card)] p-5">
                    <div className="label-text mb-2">{item.label}</div>
                    <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              {project.gallery.length > 0 && (
                <div>
                  <h2 className="text-subheading font-display font-bold text-[var(--color-primary)] mb-4">
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {project.gallery.map((img, i) => (
                      <div key={i} className={`relative overflow-hidden rounded-[var(--radius-card)] ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                        <Image
                          src={img}
                          alt={`${project.title} — photo ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <TestimonialCard
                  testimonial={{
                    text: project.testimonial.text,
                    author: project.testimonial.author,
                    area: project.testimonial.area,
                    service: project.categoryLabel,
                    date: project.year,
                  }}
                />
              )}
            </div>

            {/* Right: sidebar */}
            <div className="space-y-6">
              {/* Quote CTA */}
              <div className="bg-[var(--color-primary)] rounded-2xl p-7 text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Love What You See?
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  We can do the same for your home. Free quote, no obligation.
                </p>
                <Button href="/contact" fullWidth className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white">
                  Get a Free Quote
                </Button>
                <a href="tel:02030515418" className="block mt-3 text-sm text-white/50 hover:text-white/80 transition-colors">
                  Or call 020 3051 5418
                </a>
              </div>

              {/* Project info */}
              <div className="bg-[var(--color-cream)] rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-[var(--color-primary)] text-sm">Project Details</h3>
                {[
                  { icon: Tag, label: 'Service', value: project.categoryLabel },
                  { icon: MapPin, label: 'Location', value: project.location },
                  { icon: Calendar, label: 'Year', value: project.year },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-[var(--color-gold)]" />
                    <div>
                      <div className="text-xs text-[var(--color-neutral-600)]">{item.label}</div>
                      <div className="text-sm font-medium text-[var(--color-primary)]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section-py bg-[var(--color-cream)]">
          <div className="section-px">
            <SectionLabel>More Projects</SectionLabel>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-heading font-display font-bold text-[var(--color-primary)]">
                You Might Also Like
              </h2>
              <Link href="/projects" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-dark)] hover:gap-3 transition-all">
                All projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (<ProjectCard key={p.slug} project={p} />))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
