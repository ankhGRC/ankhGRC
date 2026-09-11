import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cross-Border Data & Regulatory Governance',
  description:
    'Cross-border governance advisory for data transfers, regulatory change, operating controls, accountability, and multinational compliance programs.',
  alternates: { canonical: '/cross-border' },
}

export default function CrossBorderLayout({ children }: { children: React.ReactNode }) {
  return children
}
