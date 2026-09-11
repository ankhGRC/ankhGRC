import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GRC Insights',
  description:
    'Insights from Ankh GRC on regulatory change, digital trust, AI governance, cybersecurity, privacy, compliance, and risk management.',
  alternates: { canonical: '/insights' },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children
}
