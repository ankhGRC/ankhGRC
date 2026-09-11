import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GRC Partnerships',
  description:
    'Partner with Ankh GRC on governance, risk, compliance, cybersecurity, privacy, regulatory technology, and assurance initiatives.',
  alternates: { canonical: '/partnerships' },
}

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children
}
