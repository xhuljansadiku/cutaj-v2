import type { Metadata } from 'next'
import { Montserrat, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BackToTop from '@/components/layout/BackToTop'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cutajconstruction.co.uk'),
  title: {
    default: 'Cutaj | Premium Renovation & Refurbishment Specialists London',
    template: '%s | Cutaj Renovations',
  },
  description:
    "London's trusted renovation specialists. Expert kitchen, bathroom & full home refurbishments. Fixed price quotes, 22+ years experience, fully insured. Free consultation.",
  keywords: [
    'renovation specialists London',
    'kitchen renovation London',
    'bathroom renovation London',
    'home refurbishment London',
    'house renovation London',
    'renovation company London',
    'fit out contractors London',
    'kitchen fitters London',
    'bathroom fitters London',
    'full home renovation London',
    'commercial fit out London',
    'office fit out London',
    'London renovation company',
    'property refurbishment London',
    'kitchen extension London',
    'loft conversion London',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cutajconstruction.co.uk',
    siteName: 'Cutaj Renovations',
    title: 'Cutaj | Premium Renovation & Refurbishment Specialists London',
    description:
      "London's trusted renovation specialists. Expert kitchen, bathroom & full home refurbishments.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Cutaj Renovations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cutaj | Premium Renovation Specialists London',
    description: 'Expert kitchen, bathroom & full home refurbishments across London & the UK.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://cutajconstruction.co.uk' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
