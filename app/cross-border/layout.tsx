import type React from 'react'
import type { Metadata } from 'next'

const title = 'Cross-Border Data & Regulatory Governance'
const description =
  'Cross-border governance advisory for data transfers, regulatory change, operating controls, accountability, and multinational compliance programs.'
const url = 'https://www.ankhgrc.com/cross-border'

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
  alternates: { canonical: '/cross-border' },
  openGraph: { title, description, url, siteName: 'Ankh GRC', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function CrossBorderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  )
}
