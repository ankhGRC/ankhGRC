import type React from 'react'
import type { Metadata } from 'next'

const title = 'Privacy & Data Protection Advisory'
const description =
  'Privacy and data protection advisory for responsible data governance, regulatory compliance, cross-border data use, controls, and accountability.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-data-protection' },
  openGraph: {
    title,
    description,
    url: 'https://www.ankhgrc.com/privacy-data-protection',
    siteName: 'Ankh GRC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function PrivacyDataProtectionLayout({ children }: { children: React.ReactNode }) {
  return children
}
