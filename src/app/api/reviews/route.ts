import { NextResponse } from 'next/server'

const staticReviews = [
  { text: "Cutaj transformed our kitchen beyond anything we imagined. The attention to detail was extraordinary — from the way the island is positioned to the quality of every single finish.", author: 'Sarah M.', area: 'Chelsea', service: 'Kitchen Renovation', date: 'March 2025', rating: 5 },
  { text: "We've had guests who genuinely thought we'd moved to a new house. The bathroom is spectacular. Cutaj managed everything from start to finish with zero stress on our part.", author: 'James T.', area: 'Fulham', service: 'Bathroom Renovation', date: 'February 2025', rating: 5 },
  { text: "We handed over the keys and Cutaj handled everything. Six months later we moved into our dream home. They communicated constantly, never left us in the dark, and the workmanship is immaculate.", author: 'The Okonkwo Family', area: 'Brixton', service: 'Full Home Refurbishment', date: 'December 2024', rating: 5 },
  { text: "From the very first meeting I knew these were the right people for the job. They were honest about timelines, stuck to the budget, and the finished kitchen is genuinely the best room in the house.", author: 'David H.', area: 'Islington', service: 'Kitchen Renovation', date: 'November 2024', rating: 5 },
  { text: "The en-suite they built for us is the stuff of dreams. Calacatta marble, gold fixtures, underfloor heating — and it all came in on budget. Cannot recommend them highly enough.", author: 'Caroline R.', area: 'Kensington', service: 'Bathroom Renovation', date: 'October 2024', rating: 5 },
  { text: "What impressed me most was how tidy they were. Three tradesmen in my house for six weeks and not a scuff on a wall or a mark on a floor. The renovation is beautiful — five stars.", author: 'Michael S.', area: 'Clapham', service: 'Full Home Refurbishment', date: 'September 2024', rating: 5 },
]

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (apiKey && placeId) {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
        { next: { revalidate: 3600 } }
      )
      const data = await res.json()

      if (data.result?.reviews?.length) {
        return NextResponse.json({
          reviews: data.result.reviews.map((r: { text: string; author_name: string; rating: number; time: number; profile_photo_url?: string }) => ({
            text: r.text,
            author: r.author_name,
            rating: r.rating,
            date: new Date(r.time * 1000).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
            profilePhoto: r.profile_photo_url ?? null,
            area: '',
            service: '',
          })),
          rating: data.result.rating,
          totalReviews: data.result.user_ratings_total,
          source: 'google',
        })
      }
    } catch {
      // fall through to static
    }
  }

  return NextResponse.json({
    reviews: staticReviews,
    rating: 4.9,
    totalReviews: 87,
    source: 'static',
  })
}
