import './globals.css'
import { Header } from '@/layouts/Header'
import { Footer } from '@/layouts/Footer'
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { WhyChooseUs } from '@/sections/WhyChooseUs'
import { Packages } from '@/sections/Packages'
import { Contact } from '@/sections/Contact'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}