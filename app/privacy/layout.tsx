import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Ankh GRC privacy policy for information about how personal data is handled.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
