import type React from 'react'
import type { Metadata } from 'next'

const title = 'Cybersecurity Regulation Advisory'
const description =
  'Cybersecurity regulation advisory for security compliance, resilience, risk controls, incident readiness, and regulatory obligations.'
const url = 'https://www.ankhgrc.com/cybersecurity-regulation'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ankhgrc.com' },
    { '@type': 'ListItem', position: 2, name: title, item: url },
  ],
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/cybersecurity-regulation' },
  openGraph: { title, description, url, siteName: 'Ankh GRC', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function CybersecurityRegulationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  )
}
