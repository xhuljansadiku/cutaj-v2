export interface Project {
  slug: string
  title: string
  location: string
  category: 'kitchen' | 'bathroom' | 'refurbishment' | 'extension'
  categoryLabel: string
  year: string
  description: string
  briefDescription: string
  challenge: string
  result: string
  beforeImage: string
  afterImage: string
  gallery: string[]
  testimonial?: {
    text: string
    author: string
    area: string
  }
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'chelsea-kitchen-transformation',
    title: 'Chelsea Kitchen Transformation',
    location: 'Chelsea, London',
    category: 'kitchen',
    categoryLabel: 'Kitchen Renovation',
    year: '2025',
    description:
      'A complete redesign of a dated 1980s kitchen into a sleek, handleless modern space with an island, integrated appliances and premium marble worktops.',
    briefDescription:
      'A Chelsea family wanted a kitchen that worked for everyday living and entertaining — open, light-filled and immaculately finished.',
    challenge:
      'The original kitchen had a poor layout with limited natural light, dated cabinetry and no island. Structural walls and limited ceiling height added complexity.',
    result:
      'A completely reimagined kitchen with a 4-metre island, full-height cabinetry, LED feature lighting and Calacatta marble throughout. Natural light increased by 60% via a new skylight.',
    beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    testimonial: {
      text: "Cutaj transformed our kitchen beyond anything we imagined. The attention to detail was extraordinary — from the way the island is positioned to the quality of every single finish. We use our kitchen every single day and it makes us happy every time.",
      author: 'Sarah M.',
      area: 'Chelsea',
    },
    featured: true,
  },
  {
    slug: 'fulham-bathroom-suite',
    title: 'Fulham Luxury Bathroom Suite',
    location: 'Fulham, London',
    category: 'bathroom',
    categoryLabel: 'Bathroom Renovation',
    year: '2025',
    description:
      'A dated bathroom transformed into a spa-like retreat with a walk-in rainfall shower, freestanding bath, heated floors and bespoke vanity unit.',
    briefDescription:
      'A couple in Fulham wanted a bathroom that felt like a five-star hotel — calming, luxurious and completely bespoke.',
    challenge:
      'The original bathroom was cramped, had poor plumbing layout and mould issues from poor ventilation. Full re-plumbing and structural work was required.',
    result:
      'A full wet room with 1200mm rainfall shower head, Lusso Stone freestanding bath, herringbone mosaic feature wall and underfloor heating throughout. Ventilation fully resolved.',
    beforeImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1620626011761-996317702519?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620626011761-996317702519?w=800&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    ],
    testimonial: {
      text: "We've had guests who genuinely thought we'd moved to a new house. The bathroom is spectacular. Cutaj managed everything from start to finish with zero stress on our part.",
      author: 'James & Claire T.',
      area: 'Fulham',
    },
    featured: true,
  },
  {
    slug: 'brixton-full-home-refurbishment',
    title: 'Brixton Victorian Full Refurbishment',
    location: 'Brixton, London',
    category: 'refurbishment',
    categoryLabel: 'Full Home Refurbishment',
    year: '2024',
    description:
      'A complete gut-and-rebuild of a Victorian terrace — new kitchen, two bathrooms, ground floor open plan, new flooring throughout, full rewire and replumb.',
    briefDescription:
      "A young family purchased a rundown Victorian terrace and needed someone to manage the entire renovation from first fix to final finish.",
    challenge:
      'The property had been vacant for 3 years, had significant damp, outdated electrics and plumbing, and required planning coordination for the rear extension.',
    result:
      'A stunning, liveable family home with open-plan kitchen-diner, two fully fitted bathrooms, four bedrooms with wardrobes, and a new rear garden extension. Delivered on time and on budget.',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80',
    ],
    testimonial: {
      text: "We handed over the keys and Cutaj handled everything. Six months later we moved into our dream home. They communicated constantly, never left us in the dark, and the workmanship is immaculate.",
      author: 'The Okonkwo Family',
      area: 'Brixton',
    },
    featured: true,
  },
  {
    slug: 'kensington-master-bathroom',
    title: 'Kensington Master En-Suite',
    location: 'Kensington, London',
    category: 'bathroom',
    categoryLabel: 'Bathroom Renovation',
    year: '2024',
    description:
      'A master en-suite redesign in a period flat featuring bespoke joinery, gold fixtures, Porcelanosa tiles and integrated mood lighting.',
    briefDescription:
      'A client in Kensington wanted their master en-suite to match the period elegance of their flat while incorporating modern luxury.',
    challenge:
      'Matching period features while delivering contemporary luxury. Space constraints required a bespoke vanity designed to fit within an awkward alcove.',
    result:
      'A timeless en-suite with Calacatta marble, brushed gold fixtures, bespoke mahogany vanity and an integrated dressing mirror with mood lighting.',
    beforeImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    ],
    featured: false,
  },
  {
    slug: 'clapham-kitchen-extension',
    title: 'Clapham Kitchen Extension',
    location: 'Clapham, London',
    category: 'extension',
    categoryLabel: 'Kitchen Extension',
    year: '2024',
    description:
      'A rear single-storey extension adding a full open-plan kitchen-diner with bifold doors opening onto the garden.',
    briefDescription:
      'A growing family in Clapham needed more space. The solution: a beautifully designed rear extension that brought the garden in.',
    challenge:
      'Planning restrictions limited the extension footprint. Structural work on the party wall required careful coordination with the neighbouring property.',
    result:
      'A 28m² open-plan kitchen-diner with full-width bifold doors, a vaulted skylight ceiling, bespoke shaker kitchen and limestone flooring that flows seamlessly to the garden.',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    ],
    featured: false,
  },
  {
    slug: 'islington-open-plan-renovation',
    title: 'Islington Open Plan Renovation',
    location: 'Islington, London',
    category: 'refurbishment',
    categoryLabel: 'Full Home Refurbishment',
    year: '2023',
    description:
      'Structural wall removal, complete ground floor open plan renovation with bespoke kitchen, new flooring and full redecoration.',
    briefDescription:
      'A couple wanted to transform their disconnected ground floor into a flowing, social open-plan space for entertaining.',
    challenge:
      'Two structural walls needed to be removed, requiring steel beam installation and temporary propping. Coordinating trades across a tight London terrace.',
    result:
      'A seamless open-plan living space with a 5-metre kitchen run, integrated living and dining area, herringbone oak flooring and bespoke joinery throughout.',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    ],
    featured: false,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category)
}
