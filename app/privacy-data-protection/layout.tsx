import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy & Data Protection Advisory',
  description:
    'Privacy and data protection advisory for responsible data governance, regulatory compliance, cross-border data use, controls, and accountability.',
  alternates: { canonical: '/privacy-data-protection' },
}

export default function PrivacyDataProtectionLayout({ children }: { children: React.ReactNode }) {
  return children
}
