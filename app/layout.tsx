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
  title: 'SYLVEDHA LLP — Nature Powered. Technology Driven.',
  description:
    'SYLVEDHA LLP is a multidisciplinary technology company developing innovative solutions across Agriculture, Biotechnology, Renewable Energy, AI, Automation, and Sustainable Infrastructure.',
  generator: 'v0.app',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
