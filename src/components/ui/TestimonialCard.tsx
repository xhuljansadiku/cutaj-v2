import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  text: string
  author: string
  area: string
  service: string
  date: string
  rating?: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
  dark?: boolean
}

export default function TestimonialCard({ testimonial, className, dark = false }: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5

  return (
    <div
      className={cn(
        'flex flex-col p-7 rounded-[var(--radius-card)] h-full',
        dark
          ? 'bg-white/5 border border-white/10'
          : 'bg-white shadow-[var(--shadow-card)]',
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
        ))}
      </div>

      {/* Quote mark */}
      <div
        className={cn(
          'font-display text-5xl leading-none mb-4 -mt-2',
          dark ? 'text-[var(--color-gold)]/30' : 'text-[var(--color-gold)]/20'
        )}
        aria-hidden
      >
        &ldquo;
      </div>

      {/* Text */}
      <p
        className={cn(
          'text-sm leading-relaxed flex-1 mb-6',
          dark ? 'text-white/70' : 'text-[var(--color-neutral-600)]'
        )}
      >
        {testimonial.text}
      </p>

      {/* Author */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-6 h-0.5 bg-[var(--color-gold)]" />
          <span className={cn('text-sm font-semibold', dark ? 'text-white' : 'text-[var(--color-primary)]')}>
            {testimonial.author}
          </span>
        </div>
        <div className={cn('text-xs ml-8', dark ? 'text-white/40' : 'text-[var(--color-neutral-600)]')}>
          {testimonial.area} &middot; {testimonial.service} &middot; {testimonial.date}
        </div>
      </div>
    </div>
  )
}
