import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GRC Training & Awareness',
  description:
    'GRC, cybersecurity, privacy, compliance, and governance training programs that help teams understand obligations and operate controls confidently.',
  alternates: { canonical: '/training' },
}

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return children
}
