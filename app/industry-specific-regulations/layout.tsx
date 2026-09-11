import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry-Specific Regulation Advisory',
  description:
    'Industry-specific regulatory advisory for compliance obligations, controls, evidence, audit readiness, and operational risk management.',
  alternates: { canonical: '/industry-specific-regulations' },
}

export default function IndustrySpecificRegulationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
