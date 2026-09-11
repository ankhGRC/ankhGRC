import type React from 'react'
import type { Metadata } from 'next'

const title = 'Information Security Advisory'
const description =
  'Information security advisory for security governance, risk management, controls, resilience, assurance, and regulatory alignment.'
const url = 'https://www.ankhgrc.com/information-security'

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
  alternates: { canonical: '/information-security' },
  openGraph: { title, description, url, siteName: 'Ankh GRC', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function InformationSecurityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  )
}
