import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust Center',
  description:
    'Explore Ankh GRC trust, security, privacy, governance, and responsible business commitments for clients and partners.',
  alternates: { canonical: '/trust-center' },
}

export default function TrustCenterLayout({ children }: { children: React.ReactNode }) {
  return children
}
