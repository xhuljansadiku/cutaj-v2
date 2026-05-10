import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-svh flex items-center justify-center section-px bg-[var(--color-off-white)]">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl font-bold text-[var(--color-gold)]/20 mb-4">404</div>
        <h1 className="text-heading font-display font-bold text-[var(--color-primary)] mb-3">
          Page Not Found
        </h1>
        <p className="text-[var(--color-neutral-600)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">Go Home</Button>
          <Button href="/contact" variant="ghost">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
