import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Ankh GRC',
  description:
    'Contact Ankh GRC to discuss governance, risk, compliance, cybersecurity, privacy, AI governance, and regulatory readiness needs.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
