import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Read the Ankh GRC website disclaimer for information about content, advisory material, and limitations.',
  alternates: { canonical: '/disclaimer' },
}

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return children
}
