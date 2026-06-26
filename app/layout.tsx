import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fira_Sans } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import './globals.css'

const firaSans = Fira_Sans({ 
  variable: '--font-fira-sans', 
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'optional',
  adjustFontFallback: true,
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'optional',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sylvedha.com'),
  title: 'SYLVEDHA LLP — Innovating Technology in Harmony with Nature',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', type: 'image/png', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
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
        url: '/images/hero-nature-tech.png',
        width: 1200,
        height: 630,
        alt: 'SYLVEDHA LLP - Innovating Technology in Harmony with Nature',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYLVEDHA LLP — Innovating Technology in Harmony with Nature',
    description: 'Innovative solutions across Agriculture, Biotechnology, Renewable Energy, AI, and Sustainable Infrastructure.',
    images: ['/images/hero-nature-tech.png'],
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
        <link rel="preload" href="/background-mobile.webp" as="image" type="image/webp" media="(max-width: 640px)" fetchPriority="high" />
        <link rel="preload" href="/background.webp" as="image" type="image/webp" media="(min-width: 641px)" fetchPriority="high" />
        <link rel="preload" href="/images/logo-horizontal-dark-green.webp" as="image" type="image/webp" fetchPriority="high" />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SYLVEDHA LLP",
              url: "https://sylvedha.com",
              logo: "https://sylvedha.com/images/logo-horizontal-dark-green.webp",
              description: "SYLVEDHA LLP is a multidisciplinary technology company developing innovative solutions across Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation, and Sustainable Infrastructure.",
              sameAs: [
                "https://www.linkedin.com/company/sylvedhallp/"
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
        <div className="fixed -right-[5%] top-[15%] z-50 pointer-events-none select-none opacity-[0.08]">
          <svg className="w-[50vw] max-w-[600px] h-auto rotate-12" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g style={{ transform: "scale(95%)", transformOrigin: "center" }}>
              <path fill="white" d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z" />
              <path fill="white" d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z" />
            </g>
          </svg>
        </div>
        

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
