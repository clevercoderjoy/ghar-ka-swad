
import './globals.css'
import logo from "public/assets/logo.svg";
import favicon from "public/favicon.ico";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })

function RootLayout({
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
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;