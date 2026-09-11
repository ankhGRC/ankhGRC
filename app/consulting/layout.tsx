import type React from 'react'
import type { Metadata } from 'next'

const title = 'GRC Consulting Services'
const description =
  'Practical GRC consulting for governance design, risk management, compliance programs, controls, evidence, audit readiness, and operating model improvement.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/consulting' },
  openGraph: {
    title,
    description,
    url: 'https://www.ankhgrc.com/consulting',
    siteName: 'Ankh GRC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return children
}
