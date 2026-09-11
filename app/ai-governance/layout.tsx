import type React from 'react'
import type { Metadata } from 'next'

const title = 'AI Governance Advisory'
const description =
  'AI governance advisory for responsible AI controls, model risk, accountability, privacy, transparency, compliance, and oversight.'
const url = 'https://www.ankhgrc.com/ai-governance'

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
  alternates: { canonical: '/ai-governance' },
  openGraph: { title, description, url, siteName: 'Ankh GRC', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function AiGovernanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  )
}
