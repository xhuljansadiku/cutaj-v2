import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Cutaj Renovations',
  description: 'Terms and conditions for Cutaj Construction Ltd renovation and fit-out services in London.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/terms' },
}

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 section-px">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-display font-display font-bold text-[var(--color-primary)] mb-4">Terms &amp; Conditions</h1>
        <p className="text-[var(--color-neutral-600)] mb-10">Last updated: May 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[var(--color-neutral-600)]">
          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">1. Company Information</h2>
            <p>Cutaj Construction Ltd is a company registered in England and Wales. Registered address available upon request. Email: <a href="mailto:info@cutajconstruction.co.uk" className="text-[var(--color-gold)]">info@cutajconstruction.co.uk</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">2. Quotes &amp; Contracts</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>All quotes are valid for 30 days from the date of issue.</li>
              <li>A signed contract and deposit are required before any work commences.</li>
              <li>Fixed-price quotes cover the scope of works described in the contract. Any additional works requested will be quoted separately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">3. Payment Terms</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>A deposit (typically 20–30%) is required upon signing the contract.</li>
              <li>Stage payments are agreed in the contract schedule.</li>
              <li>Final payment is due upon project completion and sign-off.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">4. Liability</h2>
            <p>Cutaj Construction Ltd holds £5M+ public liability insurance. Our liability is limited to the value of the contracted works. We are not liable for consequential or indirect losses.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">5. Guarantee</h2>
            <p>All workmanship is guaranteed for 12 months from project completion. Manufacturer warranties apply to supplied materials and appliances.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
