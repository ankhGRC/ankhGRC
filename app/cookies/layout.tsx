import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Read the Ankh GRC cookie policy for information about cookies and similar technologies.',
  alternates: { canonical: '/cookies' },
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
