import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[var(--color-off-white)] border-t border-[var(--color-neutral-200)] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 h-16">
        <a
          href="tel:07908787037"
          className="flex items-center justify-center gap-2.5 bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-black transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-[var(--color-gold)] text-white font-semibold text-sm hover:bg-[var(--color-gold-dark)] transition-colors active:scale-95"
        >
          Free Quote
        </Link>
      </div>
    </div>
  )
}
