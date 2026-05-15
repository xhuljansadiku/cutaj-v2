'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown, Home, UtensilsCrossed, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const dropdownServices = [
  {
    icon: Home,
    label: 'Renovations',
    desc: 'Complete property refurbishments from start to finish.',
    href: '/renovations',
  },
  {
    icon: UtensilsCrossed,
    label: 'Kitchens & Bathrooms',
    desc: 'Bespoke design and professional installation.',
    href: '/renovations/kitchen',
  },
  {
    icon: Building2,
    label: 'Fit-Outs',
    desc: 'Residential and commercial fit-outs.',
    href: '/commercial',
  },
]

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] shadow-[0_2px_24px_rgba(0,0,0,0.3)]">
        <div className="section-px">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Cutaj Construction — Home">
              <Image
                src="/images/cutaj-construction-logo-footer.png"
                alt="Cutaj Construction"
                width={140}
                height={56}
                className="h-10 md:h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  Services
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', servicesOpen && 'rotate-180')} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-0 mt-1 w-72 bg-[#1a1a1a] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden p-2"
                    >
                      {dropdownServices.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/8 group transition-colors duration-150"
                        >
                          <div className="w-8 h-8 rounded-md bg-[var(--color-gold)]/15 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/25 transition-colors">
                            <s.icon className="w-4 h-4 text-[var(--color-gold)]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white/90 group-hover:text-[var(--color-gold)] transition-colors">
                              {s.label}
                            </div>
                            <div className="text-xs text-white/40 mt-0.5">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200',
                    pathname === link.href
                      ? 'text-[var(--color-gold)]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:07908787037"
                className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[var(--color-gold)] transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>07908 787 037</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white text-sm font-bold rounded-md transition-colors duration-200 whitespace-nowrap uppercase tracking-wide"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#111111] flex flex-col pt-16"
          >
            <div className="flex-1 overflow-y-auto py-8 px-6">

              {/* Services */}
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-gold)] mb-3">Services</p>
                {dropdownServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 py-3 border-b border-white/10 group"
                  >
                    <div className="w-7 h-7 rounded-md bg-[var(--color-gold)]/15 flex items-center justify-center shrink-0">
                      <s.icon className="w-3.5 h-3.5 text-[var(--color-gold)]" strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-white/80 group-hover:text-[var(--color-gold)] transition-colors text-sm">
                      {s.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Other links */}
              <div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center py-3 border-b border-white/10 font-semibold text-white/80 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="mt-8 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white text-center font-bold rounded-md transition-colors duration-200 uppercase tracking-wide"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:07908787037"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-white/20 text-white font-semibold rounded-md hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  07908 787 037
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
