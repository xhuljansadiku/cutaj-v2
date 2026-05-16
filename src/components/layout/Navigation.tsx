'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Renovations', href: '/renovations' },
  { label: 'Fit-Outs', href: '/commercial' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] shadow-[0_2px_24px_rgba(0,0,0,0.3)]">
        <div className="section-px">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="Cutaj Construction — Home">
              <Image
                src="/images/logo.png"
                alt="Cutaj Construction"
                width={280}
                height={112}
                className="h-12 md:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200',
                    isActive(link.href) ? 'text-[var(--color-gold)]' : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
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
                Free Quote
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

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center py-3 border-b border-white/10 font-semibold text-white/80 hover:text-[var(--color-gold)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-8 space-y-3">
                <Link href="/contact" className="block w-full py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white text-center font-bold rounded-md transition-colors uppercase tracking-wide">
                  Get a Free Quote
                </Link>
                <a href="tel:07908787037" className="flex items-center justify-center gap-2 w-full py-4 border-2 border-white/20 text-white font-semibold rounded-md hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
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
