import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A&M Travel Service - Explora Costa Rica',
  description: 'Viajes seguros y cómodos por Costa Rica con A&M Travel Service.',
  keywords: ['Costa Rica', 'transporte turístico', 'viajes', 'A&M Travel Service', 'shuttle', 'tours'],
  authors: [{ name: 'A&M Travel Service', url: 'https://aymtraverlservice.vercel.app' }],
  metadataBase: new URL('https://aymtraverlservice.vercel.app'),
  openGraph: {
    title: 'A&M Travel Service - Explora Costa Rica',
    description: 'Viajes seguros y cómodos por Costa Rica con A&M Travel Service.',
    url: 'https://aymtraverlservice.vercel.app',
    siteName: 'A&M Travel Service',
    locale: 'es_CR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'A&M Travel Service - Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A&M Travel Service - Explora Costa Rica',
    description: 'Viajes seguros y cómodos por Costa Rica con A&M Travel Service.',
    images: ['/og-image.png'],
    site: '@amtravelservice',
  },
  icons: {
    icon: '/front-bus.ico',
    apple: '/logo.png',
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="es">
      <body>{children}</body>
      </html>
  )
}
