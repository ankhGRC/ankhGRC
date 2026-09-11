import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ankhgrc.com'),
  title: {
    default: 'Ankh GRC | Governance, Risk, Compliance & Cybersecurity',
    template: '%s | Ankh GRC',
  },
  description:
    'Ankh GRC helps organizations strengthen governance, risk management, regulatory compliance, cybersecurity, privacy, data protection, and AI governance.',
  applicationName: 'Ankh GRC',
  authors: [{ name: 'Ankh GRC' }],
  creator: 'Ankh GRC',
  publisher: 'Ankh GRC',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.ankhgrc.com',
    siteName: 'Ankh GRC',
    title: 'Ankh GRC | Governance, Risk, Compliance & Cybersecurity',
    description:
      'Governance, risk, compliance, cybersecurity, privacy, data protection, and AI governance advisory for modern organizations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankh GRC | Governance, Risk, Compliance & Cybersecurity',
    description:
      'Governance, risk, compliance, cybersecurity, privacy, data protection, and AI governance advisory for modern organizations.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}