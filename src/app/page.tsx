import './globals.css'
import { Header } from '@/layouts/Header'
import { Footer } from '@/layouts/Footer'
import HomeClient from './HomeClient'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeClient />
      </main>
      <Footer />
    </div>
  )
}