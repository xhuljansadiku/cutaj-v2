import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Star } from 'lucide-react'

const residentialLinks = [
  { label: 'Kitchen Renovations', href: '/renovations/kitchen' },
  { label: 'Bathroom Renovations', href: '/renovations/bathroom' },
  { label: 'Full Home Refurbishments', href: '/renovations/refurbishments' },
  { label: 'Extensions & Conversions', href: '/renovations/extensions' },
  { label: 'Interior Improvements', href: '/renovations/interior' },
]

const commercialLinks = [
  { label: 'Office Fit-Out', href: '/commercial/office' },
  { label: 'Retail Fit-Out', href: '/commercial/retail' },
  { label: 'Restaurant & Hospitality', href: '/commercial/hospitality' },
  { label: 'Warehouse & Industrial', href: '/commercial/industrial' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Blog & Guides', href: '/blog' },
  { label: 'Areas We Cover', href: '/areas' },
  { label: 'Contact Us', href: '/contact' },
]

const areasLinks = [
  { label: 'Chelsea', href: '/areas/chelsea' },
  { label: 'Fulham', href: '/areas/fulham' },
  { label: 'Kensington', href: '/areas/kensington' },
  { label: 'Brixton', href: '/areas/brixton' },
  { label: 'Clapham', href: '/areas/clapham' },
  { label: 'Islington', href: '/areas/islington' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      {/* Main footer */}
      <div className="section-px py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/cutaj-construction-logo-footer.png"
                alt="Cutaj Construction"
                width={160}
                height={64}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              London&apos;s trusted specialists in renovation, refurbishment and commercial
              fit-out. Fixed price quotes. Fully insured.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:07908787037"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--color-gold)] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                07908 787 037
              </a>
              <a
                href="mailto:info@cutajconstruction.co.uk"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--color-gold)] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                info@cutajconstruction.co.uk
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                London, United Kingdom
              </div>
            </div>

            {/* Google rating */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <span className="text-sm text-white/70">4.9 / 5 &middot; 87 reviews</span>
            </div>
          </div>

          {/* Residential */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-gold)] mb-5">
              Residential
            </h3>
            <ul className="space-y-2.5">
              {residentialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-gold)] mb-5">
              Commercial
            </h3>
            <ul className="space-y-2.5">
              {commercialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-gold)] mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-gold)] mb-5">
              Areas We Cover
            </h3>
            <ul className="space-y-2.5">
              {areasLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors duration-200"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 section-px py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            &copy; {new Date().getFullYear()} Cutaj Construction Ltd &middot; Registered in England &amp; Wales
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
