'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  { label: 'Kitchen Renovations', href: '/renovations/kitchen', desc: 'Transform your kitchen' },
  { label: 'Bathroom Renovations', href: '/renovations/bathroom', desc: 'Luxury bathroom redesigns' },
  { label: 'Full Home Refurbishments', href: '/renovations/refurbishments', desc: 'Complete home transformations' },
  { label: 'Extensions & Conversions', href: '/renovations/extensions', desc: 'Rear, side & loft' },
  { label: 'Interior Improvements', href: '/renovations/interior', desc: 'Refresh and update' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          transparent
            ? 'bg-transparent'
            : 'bg-[var(--color-off-white)] shadow-[var(--shadow-nav)]'
        )}
      >
        <div className="section-px">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Cutaj Renovations — Home">
              <div className="flex flex-col">
                <span
                  className={cn(
                    'font-display text-xl md:text-2xl font-bold tracking-[0.08em] transition-colors duration-300',
                    transparent ? 'text-white' : 'text-[var(--color-primary)]'
                  )}
                >
                  CUTAJ
                </span>
                <span
                  className={cn(
                    'text-[9px] tracking-[0.2em] uppercase font-sans font-medium transition-colors duration-300 -mt-0.5',
                    transparent ? 'text-white/70' : 'text-[var(--color-gold)]'
                  )}
                >
                  Renovations
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Renovations dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    transparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-[var(--color-primary)] hover:text-[var(--color-gold)] hover:bg-[var(--color-cream)]'
                  )}
                >
                  Renovations
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      servicesOpen && 'rotate-180'
                    )}
                  />
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
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[var(--color-neutral-200)] overflow-hidden"
                    >
                      <div className="p-2">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--color-cream)] group transition-colors duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-gold-dark)] transition-colors">
                                {s.label}
                              </div>
                              <div className="text-xs text-[var(--color-neutral-600)] mt-0.5">{s.desc}</div>
                            </div>
                          </Link>
                        ))}
                        <div className="mt-1 pt-2 border-t border-[var(--color-neutral-200)]">
                          <Link
                            href="/renovations"
                            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors"
                          >
                            View all services <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    transparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : pathname === link.href
                      ? 'text-[var(--color-gold-dark)] bg-[var(--color-cream)]'
                      : 'text-[var(--color-primary)] hover:text-[var(--color-gold)] hover:bg-[var(--color-cream)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:02012345678"
                className={cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors duration-200',
                  transparent ? 'text-white/90 hover:text-white' : 'text-[var(--color-primary)] hover:text-[var(--color-gold)]'
                )}
              >
                <Phone className="w-4 h-4" />
                <span>020 1234 5678</span>
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white text-sm font-semibold rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'lg:hidden p-2 rounded-md transition-colors duration-200',
                transparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-[var(--color-primary)] hover:bg-[var(--color-cream)]'
              )}
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
            className="fixed inset-0 z-40 bg-[var(--color-off-white)] flex flex-col pt-16"
          >
            <div className="flex-1 overflow-y-auto py-8 px-6">
              {/* Services section */}
              <div className="mb-6">
                <p className="label-text mb-4">Renovations</p>
                <div className="space-y-1">
                  {services.map((s, i) => (
                    <motion.div
                      key={s.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={s.href}
                        className="flex items-center gap-3 py-3 border-b border-[var(--color-neutral-200)] group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                        <span className="font-medium text-[var(--color-primary)] group-hover:text-[var(--color-gold)] transition-colors">
                          {s.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Other links */}
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.4, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center py-3 border-b border-[var(--color-neutral-200)] font-medium text-[var(--color-primary)] hover:text-[var(--color-gold)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center py-3 border-b border-[var(--color-neutral-200)] font-medium text-[var(--color-primary)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>

              {/* Mobile CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 space-y-3"
              >
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white text-center font-semibold rounded-md transition-colors duration-200"
                >
                  Request a Free Quote
                </Link>
                <a
                  href="tel:02012345678"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-md hover:bg-[var(--color-cream)] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  020 1234 5678
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
