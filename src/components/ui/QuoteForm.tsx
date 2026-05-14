'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const services = [
  'Kitchen Renovation',
  'Bathroom Renovation',
  'Full Home Refurbishment',
  'Extension / Conversion',
  'Interior Improvements',
  'Other / Not Sure',
]

interface QuoteFormProps {
  dark?: boolean
  compact?: boolean
  className?: string
}

export default function QuoteForm({ dark = false, compact = false, className }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please call us directly on 07956 299 610.')
    }
  }

  const inputClass = cn(
    'w-full rounded-md border px-4 py-3 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent',
    dark
      ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15'
      : 'bg-white border-[var(--color-neutral-200)] text-[var(--color-primary)] placeholder:text-[var(--color-neutral-600)]'
  )

  const labelClass = cn(
    'block text-xs font-semibold uppercase tracking-[0.1em] mb-1.5',
    dark ? 'text-white/60' : 'text-[var(--color-neutral-600)]'
  )

  const errorClass = 'text-red-400 text-xs mt-1'

  if (submitted) {
    return (
      <div className={cn('flex flex-col items-center justify-center py-10 text-center gap-4', className)}>
        <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-[var(--color-gold)]" />
        </div>
        <div>
          <h3 className={cn('font-display text-xl font-bold mb-2', dark ? 'text-white' : 'text-[var(--color-primary)]')}>
            Quote Request Received!
          </h3>
          <p className={cn('text-sm', dark ? 'text-white/60' : 'text-[var(--color-neutral-600)]')}>
            Thank you. We&apos;ll call you within 24 hours to discuss your project.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-4', className)} noValidate>
      <div className={cn('grid gap-4', compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2')}>
        {/* Name */}
        <div>
          <label className={labelClass}>Your Name *</label>
          <input
            {...register('name')}
            type="text"
            placeholder="John Smith"
            autoComplete="name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="07700 900000"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      {!compact && (
        <div>
          <label className={labelClass}>Email (optional)</label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      )}

      {/* Service */}
      <div>
        <label className={labelClass}>Service Required *</label>
        <select {...register('service')} className={cn(inputClass, 'cursor-pointer')}>
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      {!compact && (
        <div>
          <label className={labelClass}>Tell us about your project</label>
          <textarea
            {...register('message')}
            rows={3}
            placeholder="Brief description of what you're looking for..."
            className={cn(inputClass, 'resize-none')}
          />
        </div>
      )}

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 rounded-md px-4 py-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] disabled:opacity-60 text-white font-semibold rounded-md transition-colors duration-200 text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Request My Free Quote →'
        )}
      </button>

      <p className={cn('text-xs text-center', dark ? 'text-white/40' : 'text-[var(--color-neutral-600)]')}>
        Free, no-obligation quote. We respond within 24 hours.
      </p>
    </form>
  )
}
