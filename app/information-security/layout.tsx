import type React from 'react'
import type { Metadata } from 'next'

const title = 'Information Security Advisory'
const description =
  'Information security advisory for security governance, risk management, controls, resilience, assurance, and regulatory alignment.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/information-security' },
  openGraph: {
    title,
    description,
    url: 'https://www.ankhgrc.com/information-security',
    siteName: 'Ankh GRC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function InformationSecurityLayout({ children }: { children: React.ReactNode }) {
  return children
}
