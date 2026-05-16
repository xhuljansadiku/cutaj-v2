'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { easeOutExpo } from '@/lib/motion'

interface Review {
  text: string
  author: string
  area: string
  service: string
  date: string
  rating: number
  profilePhoto?: string | null
}

interface Props {
  reviews: Review[]
  rating: number
  totalReviews: number
  source: 'google' | 'static'
  googleReviewUrl?: string
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function Avatar({ name, photo }: { name: string; photo?: string | null }) {
  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={photo} alt={name} className="w-10 h-10 rounded-full object-cover" />
  }
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-teal-500']
  const color = colors[name.charCodeAt(0) % colors.length]
  return (
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold`}>
      {initials}
    </div>
  )
}

export default function TestimonialsClient({ reviews, rating, totalReviews, source, googleReviewUrl }: Props) {
  return (
    <section className="section-py bg-[var(--color-cream)]">
      <div className="section-px">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <SectionLabel className="justify-center">Google Reviews</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="text-display font-display font-bold text-[var(--color-primary)] mb-6"
          >
            What Our Clients Say.
          </motion.h2>

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOutExpo }}
            className="inline-flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-[var(--shadow-card)]"
          >
            <GoogleLogo />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="font-bold text-[var(--color-primary)] text-lg">{rating}</span>
            <span className="text-[var(--color-neutral-600)] text-sm">({totalReviews} reviews)</span>
          </motion.div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOutExpo }}
              className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] flex flex-col"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar name={review.author} photo={review.profilePhoto} />
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-primary)]">{review.author}</div>
                    {(review.area || review.service) && (
                      <div className="text-xs text-[var(--color-neutral-600)]">
                        {[review.area, review.service].filter(Boolean).join(' · ')}
                      </div>
                    )}
                  </div>
                </div>
                <GoogleLogo />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Date */}
              {review.date && (
                <div className="text-xs text-[var(--color-neutral-600)]/60 mt-4">{review.date}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href={googleReviewUrl ?? 'https://g.page/r/cutaj-construction/review'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white border-2 border-[var(--color-neutral-200)] hover:border-[#4285F4] rounded-md font-semibold text-sm text-[var(--color-primary)] transition-all duration-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <GoogleLogo />
            Read all {totalReviews} reviews on Google
          </a>
          {source === 'static' && (
            <p className="text-xs text-[var(--color-neutral-600)]/50 mt-3">
              Connect your Google Business Profile to show live reviews
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
