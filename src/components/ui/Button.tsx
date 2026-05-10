import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold-outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  arrow?: boolean
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  arrow = false,
  external = false,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-dark)] active:scale-[0.98]',
    secondary:
      'bg-[var(--color-cream)] text-[var(--color-primary)] hover:bg-[var(--color-neutral-200)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-cream)] active:scale-[0.98]',
    'gold-outline':
      'bg-transparent text-[var(--color-gold-dark)] border-2 border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2.5',
    md: 'text-sm px-6 py-3.5',
    lg: 'text-base px-8 py-4',
  }

  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  )

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <Link href={href} className={cn(classes, 'group')} {...linkProps}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cn(classes, 'group')} disabled={disabled}>
      {content}
    </button>
  )
}
