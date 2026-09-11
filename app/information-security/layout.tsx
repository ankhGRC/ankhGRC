import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Information Security Advisory',
  description:
    'Information security advisory for security governance, risk management, controls, resilience, assurance, and regulatory alignment.',
  alternates: { canonical: '/information-security' },
}

export default function InformationSecurityLayout({ children }: { children: React.ReactNode }) {
  return children
}
