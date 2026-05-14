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
  type: 'residential' | 'commercial'
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
    type: 'residential',
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
    type: 'residential',
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
    type: 'residential',
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
    type: 'residential',
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
    type: 'residential',
  },
  {
    slug: 'office-fit-out',
    title: 'Office Fit-Out',
    shortTitle: 'Office Fit-Out',
    description:
      'Create a workspace that reflects your brand and drives productivity. From open-plan offices to private suites — we deliver commercial fit-outs to the highest specification.',
    longDescription:
      'Your office is your brand made physical. We design and build commercial office spaces that combine functionality with a strong visual identity — on time and within budget.',
    icon: 'building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    features: [
      'Full space planning & design',
      'Partition walls & glazed offices',
      'Raised access flooring',
      'Suspended ceilings & lighting',
      'Full M&E (mechanical & electrical)',
      'IT infrastructure & data cabling',
      'Kitchen, breakout & welfare areas',
    ],
    href: '/commercial/office',
    type: 'commercial',
  },
  {
    slug: 'retail-fit-out',
    title: 'Retail Fit-Out',
    shortTitle: 'Retail Fit-Out',
    description:
      'Fit-outs that convert browsers into buyers. We build retail environments that showcase your products, guide customers naturally, and leave a lasting impression.',
    longDescription:
      'Retail spaces need to work hard. We create environments that balance brand expression with commercial practicality — delivering on time so you can open your doors without delay.',
    icon: 'store',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    features: [
      'Shopfront & entrance design',
      'Bespoke display fixtures & joinery',
      'Flooring, wall finishes & ceilings',
      'Feature lighting & signage',
      'Fitting rooms & service areas',
      'POS and till point installation',
      'Storage and stockroom fit-out',
    ],
    href: '/commercial/retail',
    type: 'commercial',
  },
  {
    slug: 'hospitality-fit-out',
    title: 'Restaurant & Hospitality',
    shortTitle: 'Hospitality Fit-Out',
    description:
      'From intimate restaurants to high-volume bars and hotels — we build hospitality spaces that deliver atmosphere, durability and compliance from day one.',
    longDescription:
      'Hospitality fit-outs demand more: strict compliance, heavy-use materials, complex kitchen and bar installations, and a tight schedule. We have done it all.',
    icon: 'utensils',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    features: [
      'Restaurant, bar & café fit-out',
      'Commercial kitchen installation',
      'Extraction & ventilation systems',
      'Bespoke joinery & feature walls',
      'Acoustic treatment & ceilings',
      'Full compliance (fire, building regs)',
      'Hotel room & reception fit-out',
    ],
    href: '/commercial/hospitality',
    type: 'commercial',
  },
  {
    slug: 'industrial-fit-out',
    title: 'Warehouse & Industrial',
    shortTitle: 'Warehouse & Industrial',
    description:
      'Practical, robust fit-outs for warehouses, logistics hubs and industrial units. We optimise your space for operations, safety and efficiency.',
    longDescription:
      'Industrial spaces require a different kind of expertise. We deliver fit-outs that are built for heavy use — maximising operational efficiency without compromising on safety or compliance.',
    icon: 'warehouse',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    features: [
      'Mezzanine floor installation',
      'Racking & shelving systems',
      'Welfare & office facilities',
      'Loading bay fit-out',
      'Industrial flooring & line marking',
      'LED lighting upgrades',
      'Fire suppression & compliance',
    ],
    href: '/commercial/industrial',
    type: 'commercial',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getResidentialServices(): Service[] {
  return services.filter((s) => s.type === 'residential')
}

export function getCommercialServices(): Service[] {
  return services.filter((s) => s.type === 'commercial')
}
