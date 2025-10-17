import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Roboto } from 'next/font/google'

import logo from "public/assets/logo.svg";
import favicon from "public/favicon.ico";
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'घर का स्वाद | Authentic Home-Cooked Bihari Food',
  description: 'Delicious home-style bihari food delivered to your doorstep in Darbhanga. Fresh, hygienic, and made with love.',
  keywords: ['घर का स्वाद', 'Bihari food', 'home cooked', 'Darbhanga', 'tiffin service', 'monthly package', 'event catering'],
  openGraph: {
    title: 'घर का स्वाद | Authentic Home-Cooked Bihari Food',
    description: 'Delicious home-style bihari food delivered to your doorstep in Darbhanga. Fresh, hygienic, and made with love.',
    url: 'https://gharkaswad.com',
    siteName: 'घर का स्वाद',
    images: [
      {
        url: logo.src,
        width: 400,
        height: 400,
        alt: 'घर का स्वाद logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'घर का स्वाद | Authentic Home-Cooked Bihari Food',
    description: 'Delicious home-style bihari food delivered to your doorstep in Darbhanga. Fresh, hygienic, and made with love.',
    images: [logo.src],
    site: '@gharkaswad',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href={logo.src} />
        <link rel="preload" as="image" href="/assets/hero-food.jpg" />
        <link rel="icon" href={favicon.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5f5f5" />
      </head>
  <body className={`${montserrat.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  )
}