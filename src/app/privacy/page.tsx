import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cutaj Renovations',
  description: 'Privacy policy for Cutaj Construction Ltd — how we collect, use and protect your personal data.',
  alternates: { canonical: 'https://cutajconstruction.co.uk/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 section-px">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-display font-display font-bold text-[var(--color-primary)] mb-4">Privacy Policy</h1>
        <p className="text-[var(--color-neutral-600)] mb-10">Last updated: May 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[var(--color-neutral-600)]">
          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">1. Who We Are</h2>
            <p>Cutaj Construction Ltd (&ldquo;Cutaj&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a renovation and fit-out company based in London, UK. Our website address is: https://cutajconstruction.co.uk</p>
            <p className="mt-2">Contact: <a href="mailto:info@cutajconstruction.co.uk" className="text-[var(--color-gold)]">info@cutajconstruction.co.uk</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">2. What Data We Collect</h2>
            <p>When you submit a quote request or contact form, we collect:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Your name and contact details (email, phone number)</li>
              <li>Project details you provide</li>
              <li>IP address and browser information (via standard web logs)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">3. How We Use Your Data</h2>
            <p>We use your data solely to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Respond to your quote or enquiry</li>
              <li>Communicate about your project</li>
              <li>Improve our services</li>
            </ul>
            <p className="mt-2">We do not sell, trade or transfer your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">4. Data Retention</h2>
            <p>We retain enquiry data for up to 2 years. You can request deletion at any time by emailing us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">5. Your Rights</h2>
            <p>Under UK GDPR you have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:info@cutajconstruction.co.uk" className="text-[var(--color-gold)]">info@cutajconstruction.co.uk</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">6. Cookies</h2>
            <p>This website uses only essential cookies required for basic functionality. No tracking or advertising cookies are used.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
