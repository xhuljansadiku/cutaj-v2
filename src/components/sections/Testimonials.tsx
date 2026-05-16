import TestimonialsClient from './TestimonialsClient'

async function getReviews() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/reviews`, { next: { revalidate: 3600 } })
    return res.json()
  } catch {
    return {
      reviews: [],
      rating: 4.9,
      totalReviews: 87,
      source: 'static' as const,
    }
  }
}

export default async function Testimonials() {
  const data = await getReviews()
  return <TestimonialsClient {...data} googleReviewUrl={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL} />
}
