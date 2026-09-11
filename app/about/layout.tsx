import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ankh GRC',
  description:
    'Learn how Ankh GRC helps organizations connect governance, risk, compliance, cybersecurity, privacy, and technology into practical business confidence.',
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
