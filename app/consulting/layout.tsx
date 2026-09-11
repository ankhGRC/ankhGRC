import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GRC Consulting Services',
  description:
    'Practical GRC consulting for governance design, risk management, compliance programs, controls, evidence, audit readiness, and operating model improvement.',
  alternates: { canonical: '/consulting' },
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return children
}
