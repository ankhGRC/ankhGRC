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

const googleSiteVerification = 'tkzsgMaZfc-fsnOZqllvrvuXWi7NmqkP8nVRyds6J3A'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.ankhgrc.com/#organization',
      name: 'Ankh GRC',
      url: 'https://www.ankhgrc.com',
      email: 'help@ankhgrc.com',
      description:
        'Ankh GRC helps organizations strengthen governance, risk management, regulatory compliance, cybersecurity, privacy, data protection, and AI governance.',
      areaServed: 'Global',
      knowsAbout: [
        'Governance',
        'Risk Management',
        'Regulatory Compliance',
        'Cybersecurity',
        'Information Security',
        'Privacy',
        'Data Protection',
        'AI Governance',
      ],
      sameAs: ['https://github.com/ankhGRC'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.ankhgrc.com/#website',
      url: 'https://www.ankhgrc.com',
      name: 'Ankh GRC',
      publisher: { '@id': 'https://www.ankhgrc.com/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.ankhgrc.com/#services',
      name: 'Ankh GRC advisory services',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'GRC Consulting',
          serviceType: 'Governance, risk, and compliance consulting',
          url: 'https://www.ankhgrc.com/consulting',
          provider: { '@id': 'https://www.ankhgrc.com/#organization' },
        },
        {
          '@type': 'Service',
          name: 'Information Security Advisory',
          serviceType: 'Information security governance and risk advisory',
          url: 'https://www.ankhgrc.com/information-security',
          provider: { '@id': 'https://www.ankhgrc.com/#organization' },
        },
        {
          '@type': 'Service',
          name: 'Privacy and Data Protection Advisory',
          serviceType: 'Privacy, data protection, and data governance advisory',
          url: 'https://www.ankhgrc.com/privacy-data-protection',
          provider: { '@id': 'https://www.ankhgrc.com/#organization' },
        },
        {
          '@type': 'Service',
          name: 'AI Governance Advisory',
          serviceType: 'Responsible AI governance and model risk advisory',
          url: 'https://www.ankhgrc.com/ai-governance',
          provider: { '@id': 'https://www.ankhgrc.com/#organization' },
        },
        {
          '@type': 'Service',
          name: 'Cybersecurity Regulation Advisory',
          serviceType: 'Cybersecurity regulatory compliance advisory',
          url: 'https://www.ankhgrc.com/cybersecurity-regulation',
          provider: { '@id': 'https://www.ankhgrc.com/#organization' },
        },
      ],
    },
  ],
}

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
  verification: {
    google: googleSiteVerification,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': 160,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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
      <head>
        <meta name="google-site-verification" content={googleSiteVerification} />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}