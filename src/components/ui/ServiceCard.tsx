import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  className?: string
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gold accent bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[var(--ease-out-expo)] origin-left" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-gold-dark)] transition-colors duration-200">
          {service.shortTitle}
        </h3>
        <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed flex-1 mb-4">
          {service.description}
        </p>
        {service.startingFrom && (
          <div className="text-xs text-[var(--color-neutral-600)] mb-4">
            Starting from <span className="font-semibold text-[var(--color-primary)]">{service.startingFrom}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-dark)] group-hover:gap-3 transition-all duration-200">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}
