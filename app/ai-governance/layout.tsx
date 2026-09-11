import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Governance Advisory',
  description:
    'AI governance advisory for responsible AI controls, model risk, accountability, privacy, transparency, compliance, and oversight.',
  alternates: { canonical: '/ai-governance' },
}

export default function AiGovernanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
