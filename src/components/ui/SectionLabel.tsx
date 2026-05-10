import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-4', className)}>
      <span className="gold-line" />
      <span
        className={cn(
          'label-text',
          light && 'text-[var(--color-gold-light)]'
        )}
      >
        {children}
      </span>
    </div>
  )
}
