export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: string
  image: string
  features: string[]
  startingFrom?: string
  href: string
}

export const services: Service[] = [
  {
    slug: 'kitchen',
    title: 'Kitchen Renovations',
    shortTitle: 'Kitchen Renovations',
    description:
      'Transform your kitchen into the heart of your home. From sleek handleless designs to classic shakers — we build kitchens that are beautiful and built to last.',
    longDescription:
      "Your kitchen is the most-used room in your home. It deserves to be exceptional. We design and build kitchen renovations that balance stunning aesthetics with practical functionality — creating spaces you'll actually want to spend time in.",
    icon: 'utensils',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
    features: [
      'Full kitchen design & layout planning',
      'Supply & fit of all cabinetry and worktops',
      'Plumbing, electrical and gas work',
      'Tiling, flooring and plastering',
      'Island and breakfast bar installation',
      'Integrated appliance fitting',
      'LED lighting and electrical upgrades',
    ],
    startingFrom: '£15,000',
    href: '/renovations/kitchen',
  },
  {
    slug: 'bathroom',
    title: 'Bathroom Renovations',
    shortTitle: 'Bathroom Renovations',
    description:
      'From en-suite refreshes to full spa bathroom transformations. We handle everything — plumbing, tiling, fixtures and finishes — to a flawless standard.',
    longDescription:
      'A beautifully renovated bathroom adds both joy and value to your home. Whether you want a calm, spa-like retreat or a sleek, contemporary space — we design and build bathrooms that exceed expectations.',
    icon: 'bath',
    image: 'https://images.unsplash.com/photo-1620626011761-996317702519?w=800&q=80',
    features: [
      'Full bathroom design & planning',
      'Wet room & walk-in shower installation',
      'Freestanding & built-in bath fitting',
      'Full replumbing where required',
      'Premium tiling (floor & wall)',
      'Underfloor heating installation',
      'Bespoke vanity units & mirrors',
    ],
    startingFrom: '£8,000',
    href: '/renovations/bathroom',
  },
  {
    slug: 'refurbishments',
    title: 'Full Home Refurbishments',
    shortTitle: 'Full Refurbishments',
    description:
      'Complete home transformations from start to finish. We manage every trade, every detail — so you don\'t have to. One project manager. One point of contact. Zero stress.',
    longDescription:
      "A full home refurbishment is one of the biggest investments you'll make. We make it a positive experience — with clear communication, a dedicated project manager, and craftsmanship you can see in every detail.",
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    features: [
      'Full project management from start to finish',
      'Structural work including wall removal',
      'Kitchen and bathroom renovations',
      'Full rewiring and replumbing',
      'Plastering, painting and decorating',
      'Flooring throughout',
      'Joinery, doors and skirtings',
    ],
    startingFrom: '£40,000',
    href: '/renovations/refurbishments',
  },
  {
    slug: 'extensions',
    title: 'Extensions & Conversions',
    shortTitle: 'Extensions',
    description:
      'Add space and value to your home with a beautifully designed extension. Rear extensions, side returns, loft conversions and garage conversions.',
    longDescription:
      'When you need more space but love your location, an extension is the answer. We manage the entire process — from planning permission to the final finish.',
    icon: 'expand',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80',
    features: [
      'Rear & side return extensions',
      'Loft conversions',
      'Garage conversions',
      'Planning permission support',
      'Structural engineering coordination',
      'Full build from foundation to finish',
      'Bifold doors and skylight installation',
    ],
    startingFrom: '£35,000',
    href: '/renovations/extensions',
  },
  {
    slug: 'interior',
    title: 'Interior Improvements',
    shortTitle: 'Interior Improvements',
    description:
      'Refresh, update and improve your home without a full renovation. Plastering, painting, flooring, joinery and more — finished to the highest standard.',
    longDescription:
      "Sometimes a targeted improvement is all it takes to transform a space. Whether it's new flooring throughout, a full repaint, or new internal doors and joinery — we deliver every job with the same care as a full renovation.",
    icon: 'paintbrush',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    features: [
      'Full interior plastering',
      'Professional painting & decorating',
      'Hardwood & engineered flooring',
      'Internal doors and door frames',
      'Skirting boards and architraves',
      'Built-in wardrobes and storage',
      'Feature walls and joinery',
    ],
    href: '/renovations/interior',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
