import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity Regulation Advisory',
  description:
    'Cybersecurity regulation advisory for security compliance, resilience, risk controls, incident readiness, and regulatory obligations.',
  alternates: { canonical: '/cybersecurity-regulation' },
}

export default function CybersecurityRegulationLayout({ children }: { children: React.ReactNode }) {
  return children
}
