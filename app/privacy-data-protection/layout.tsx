import type React from 'react'
import type { Metadata } from 'next'

const title = 'Privacy & Data Protection Advisory'
const description =
  'Privacy and data protection advisory for responsible data governance, regulatory compliance, cross-border data use, controls, and accountability.'
const url = 'https://www.ankhgrc.com/privacy-data-protection'

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
  alternates: { canonical: '/privacy-data-protection' },
  openGraph: { title, description, url, siteName: 'Ankh GRC', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function PrivacyDataProtectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  )
}
