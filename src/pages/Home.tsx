import { useState } from 'react'
import CustomCursor from '@/components/CustomCursor'
import Preloader from '@/components/Preloader'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Services from '@/sections/Services'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Roblox from '@/sections/Roblox'
import Social from '@/sections/Social'
import Testimonials from '@/sections/Testimonials'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useScrollReveal()

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      {!loading && (
        <>
          <CustomCursor />
          <ParticleBackground />
          <Navigation />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Roblox />
            <Social />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </>
  )
}
