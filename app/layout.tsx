import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fira_Sans } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import { GlobalObserver } from '@/components/global-observer'
import './globals.css'
import Image from 'next/image'

const firaSans = Fira_Sans({ 
  variable: '--font-fira-sans', 
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  adjustFontFallback: true,
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sylvedha.com'),
  title: 'SYLVEDHA — Innovating Technology in Harmony with Nature',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-google.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  description:
    'SYLVEDHA LLP is a multidisciplinary technology company developing innovative solutions across Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation, and Sustainable Infrastructure.',
  keywords: [
    "SYLVEDHA",
    "Sylvedha LLP",
    "Sustainable Technology",
    "Agriculture Technology",
    "Biotechnology",
    "Renewable Energy",
    "Artificial Intelligence",
    "Smart Automation",
    "Algae Biorefinery",
    "Smart Farming",
    "India"
  ],
  authors: [{ name: 'SYLVEDHA LLP' }],
  creator: 'SYLVEDHA LLP',
  publisher: 'SYLVEDHA LLP',
  openGraph: {
    title: 'SYLVEDHA LLP — Innovating Technology in Harmony with Nature',
    description: 'Developing innovative solutions across Agriculture, Biotechnology, Renewable Energy, AI, and Sustainable Infrastructure.',
    url: 'https://sylvedha.com',
    siteName: 'SYLVEDHA LLP',
    images: [
      {
        url: '/images/hero-nature-tech.webp',
        width: 1200,
        height: 630,
        alt: 'Sylvedha - Innovating Technology in Harmony with Nature',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYLVEDHA — Innovating Technology in Harmony with Nature',
    description: 'We build sustainable solutions addressing food security, resource management, and environmental conservation.',
    images: ['/images/hero-nature-tech.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1d3a2a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${firaSans.variable} ${fraunces.variable} bg-background`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="/background-mobile.webp" as="image" type="image/webp" media="(max-width: 640px)" fetchPriority="high" />
        <link rel="preload" href="/background.webp" as="image" type="image/webp" media="(min-width: 641px)" fetchPriority="high" />
      </head>
      <body className="font-sans antialiased">
        <GlobalObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SYLVEDHA LLP",
              url: "https://sylvedha.com",
              logo: "https://sylvedha.com/icon.png",
              description: "SYLVEDHA LLP is a multidisciplinary technology company developing innovative solutions across Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation, and Sustainable Infrastructure.",
              sameAs: [
                "https://www.linkedin.com/company/sylvedha"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-96323-97595",
                contactType: "customer service",
                email: "info@sylvedha.com",
                areaServed: "IN",
                availableLanguage: "en"
              },
              location: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Mangaluru",
                  addressRegion: "Karnataka",
                  addressCountry: "IN"
                }
              }
            })
          }}
        />
        {/* Global Watermark overlay */}
        <div className="fixed -right-[8%] -bottom-[8%] z-50 pointer-events-none select-none opacity-[0.08] w-[28vw] max-w-[380px] aspect-square">
          <Image
            src="/images/logo-icon-white.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="120px"
            loading="lazy"
            quality={50}
            className="object-contain rotate-12"
          />
        </div>

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
