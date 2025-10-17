import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import logo from "public/assets/logo.svg";
import favicon from "public/favicon.ico";
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bihar ki Sanskriti k Ghar Ka Swad',
  description: 'Delicious home-style food delivered to your doorstep',
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
        <link rel="icon" href={favicon.src} />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}