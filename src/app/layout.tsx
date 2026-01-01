import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mise Please - Professional Kitchen Prep Management',
  description: 'Stop juggling sticky notes and spreadsheets. Fast, smart, printable mise en place for professional kitchens.',
  keywords: ['mise en place', 'kitchen management', 'prep list', 'restaurant software', 'chef tools'],
  authors: [{ name: 'Mise Please' }],
  creator: 'Mise Please',
  publisher: 'Mise Please',
  openGraph: {
    title: 'Mise Please - Professional Kitchen Prep Management',
    description: 'Fast, smart, printable mise en place for professional kitchens.',
    url: 'https://mise-please.vercel.app',
    siteName: 'Mise Please',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mise Please - Kitchen Prep Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mise Please - Professional Kitchen Prep Management',
    description: 'Fast, smart, printable mise en place for professional kitchens.',
    images: ['/og-image.svg'],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#FF006E',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://mise-please.vercel.app" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
