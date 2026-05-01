import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ContactSection from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <hr className="section-divider" />

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
