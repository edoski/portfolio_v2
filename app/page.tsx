"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />
      <div className="gradient-orb gradient-orb-4" />

      <div className="gradient-diffusion-1" />
      <div className="gradient-diffusion-2" />
      <div className="gradient-diffusion-3" />

      <div className="dot-pattern" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
