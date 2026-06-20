import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fira_Sans } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import './globals.css'

const firaSans = Fira_Sans({ 
  variable: '--font-fira-sans', 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sylvedha.com'),
  title: 'SYLVEDHA LLP — Innovating Technology in Harmony with Nature',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
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
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SYLVEDHA LLP",
              url: "https://sylvedha.com",
              logo: "https://sylvedha.com/images/logo-horizontal-dark-green.png",
              description: "SYLVEDHA LLP is a multidisciplinary technology company developing innovative solutions across Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation, and Sustainable Infrastructure.",
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
          <img 
            src="/images/logo-icon-white.png" 
            alt="" 
            className="w-[50vw] max-w-[600px] h-auto object-contain rotate-12"
          />
        </div>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
