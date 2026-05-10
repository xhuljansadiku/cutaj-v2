import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/blog'
import SectionLabel from '@/components/ui/SectionLabel'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Renovation Guides & Advice | London Home Renovation Blog | Cutaj',
  description:
    'Expert renovation advice, cost guides and inspiration for London homeowners. Kitchen costs, bathroom planning, refurbishment tips and more.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/blog' },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--color-primary)]">
        <div className="section-px">
          <SectionLabel light>Expert Advice</SectionLabel>
          <h1 className="text-display font-display font-bold text-white mb-4 max-w-2xl">
            Renovation Guides for London Homeowners
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Honest advice on costs, planning and design — written by renovation specialists.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="section-py bg-[var(--color-off-white)]">
          <div className="section-px">
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-400">
              <div className="relative aspect-video lg:aspect-auto min-h-56 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="label-text">{featured.category}</span>
                  <span className="text-[var(--color-neutral-600)] text-xs">{featured.readTime}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-gold-dark)] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-dark)] group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="pb-24 bg-[var(--color-off-white)]">
        <div className="section-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-400 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="label-text">{post.category}</span>
                    <span className="text-[var(--color-neutral-600)] text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-gold-dark)] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-neutral-600)] line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-gold-dark)] group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
