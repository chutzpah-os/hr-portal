export const revalidate = 60

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BlogTeaser from '@/components/sections/BlogTeaser'
import ContactSection from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero / About — fullscreen with rocket background */}
        <Hero />

        <hr className="section-divider" />

        {/* Blog teaser */}
        <BlogTeaser />

        <hr className="section-divider" />

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer />

    </>
  )
}
