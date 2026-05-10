export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Cutaj Construction Ltd',
    description:
      "London's trusted renovation specialists. Expert kitchen, bathroom & full home refurbishments across London & the UK.",
    url: 'https://cutajconstruction.co.uk',
    telephone: '+442012345678',
    email: 'hello@cutajconstruction.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    areaServed: [
      'London',
      'Chelsea',
      'Fulham',
      'Kensington',
      'Brixton',
      'Clapham',
      'Islington',
      'Hackney',
      'Wandsworth',
    ],
    priceRange: '££–£££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Renovation Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Renovations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Renovations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Home Refurbishments' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Extensions & Conversions' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
