import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compliance Certifications Advisory',
  description:
    'Support for compliance certification readiness, control design, evidence preparation, audit support, and ongoing governance improvement.',
  alternates: { canonical: '/certifications' },
}

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
