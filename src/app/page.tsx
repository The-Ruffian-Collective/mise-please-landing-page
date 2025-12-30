import {
  Hero,
  Features,
  HowItWorks,
  Testimonials,
  Pricing,
  CTA,
} from '@/components/sections'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
