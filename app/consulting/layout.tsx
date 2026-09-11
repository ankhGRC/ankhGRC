import type React from 'react'
import type { Metadata } from 'next'

const title = 'GRC Consulting Services'
const description =
  'Practical GRC consulting for governance design, risk management, compliance programs, controls, evidence, audit readiness, and operating model improvement.'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.ankhgrc.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: title,
      item: 'https://www.ankhgrc.com/consulting',
    },
  ],
}

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/consulting' },
  openGraph: {
    title,
    description,
    url: 'https://www.ankhgrc.com/consulting',
    siteName: 'Ankh GRC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
