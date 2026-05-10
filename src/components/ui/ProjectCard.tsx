import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  className?: string
  large?: boolean
}

export default function ProjectCard({ project, className, large = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-cream)] img-zoom',
        className
      )}
    >
      {/* Image */}
      <div className={cn('relative w-full overflow-hidden', large ? 'aspect-[4/3]' : 'aspect-[3/2]')}>
        <Image
          src={project.afterImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 overlay-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-10">
          <span className="flex items-center gap-2 bg-white/95 text-[var(--color-primary)] text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-[var(--ease-out-expo)]">
            View Project <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-gold-dark)] bg-[var(--color-gold)]/10 px-2.5 py-1 rounded-full">
            {project.categoryLabel}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-gold-dark)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-neutral-600)]">{project.location}</p>
      </div>
    </Link>
  )
}
