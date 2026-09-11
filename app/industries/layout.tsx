import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Support',
  description:
    'GRC, cybersecurity, privacy, data protection, and compliance support for financial services, healthcare, technology, manufacturing, energy, retail, and global enterprises.',
  alternates: { canonical: '/industries' },
}

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children
}
