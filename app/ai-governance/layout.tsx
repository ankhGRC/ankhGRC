import type React from 'react'
import type { Metadata } from 'next'

const title = 'AI Governance Advisory'
const description =
  'AI governance advisory for responsible AI controls, model risk, accountability, privacy, transparency, compliance, and oversight.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ai-governance' },
  openGraph: {
    title,
    description,
    url: 'https://www.ankhgrc.com/ai-governance',
    siteName: 'Ankh GRC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function AiGovernanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
