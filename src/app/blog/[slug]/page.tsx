import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { blogPosts, getPostBySlug } from '@/lib/blog'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import QuoteForm from '@/components/ui/QuoteForm'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Cutaj Renovations`,
    description: post.excerpt,
    alternates: { canonical: `https://cutajconstruction.co.uk/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 overflow-hidden">
        <div className="relative aspect-[21/9] min-h-[35vh]">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 overlay-gradient" />
          <div className="absolute bottom-0 left-0 right-0 section-px pb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="label-text text-[var(--color-gold-light)]">{post.category}</span>
              <span className="text-white/60 text-xs">{post.readTime}</span>
            </div>
            <h1 className="text-display font-display font-bold text-white max-w-3xl">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <div className="section-px py-5 border-b border-[var(--color-neutral-200)] bg-[var(--color-off-white)]">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
      </div>

      {/* Article */}
      <section className="section-py bg-[var(--color-off-white)]">
        <div className="section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Content */}
            <article className="lg:col-span-2">
              <p className="text-xl text-[var(--color-neutral-600)] leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>

              {/* Placeholder content — replace with CMS/MDX in production */}
              <div className="prose prose-neutral max-w-none text-[var(--color-neutral-600)] space-y-6">
                <p>
                  This is a placeholder for the full article content. In production, this would be
                  rendered from a CMS (Contentful, Sanity, Notion) or MDX files. The article would
                  cover all aspects of the topic with expert insights from the Cutaj team.
                </p>

                {/* Mid-article CTA */}
                <div className="not-prose my-10 bg-[var(--color-cream)] border border-[var(--color-neutral-200)] rounded-2xl p-7">
                  <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-2">
                    Thinking About Renovating?
                  </h3>
                  <p className="text-sm text-[var(--color-neutral-600)] mb-4">
                    Get a free, no-obligation quote from London&apos;s trusted renovation specialists.
                  </p>
                  <Button href="/contact" arrow>Get a Free Quote</Button>
                </div>

                <p>
                  For accurate pricing and professional advice tailored to your specific property
                  and location, always speak to a specialist. Our team is happy to visit your home
                  and provide a free, fixed-price quote.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[var(--color-primary)] rounded-2xl p-7">
                <h3 className="font-display text-lg font-bold text-white mb-2">Get a Free Quote</h3>
                <p className="text-white/60 text-sm mb-6">Speak to a specialist today. We respond within 24 hours.</p>
                <QuoteForm dark compact />
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <SectionLabel>More Articles</SectionLabel>
                  <div className="space-y-4">
                    {related.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="flex items-start gap-4 group"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                          <Image src={p.image} alt={p.title} fill className="object-cover" sizes="64px" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--color-gold-dark)] font-medium mb-1">{p.category}</p>
                          <h4 className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-gold-dark)] transition-colors line-clamp-2">{p.title}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
