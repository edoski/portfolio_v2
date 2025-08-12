"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-mono text-xl font-bold flex items-center">
            <span className="text-orange-300 glow-orange-subtle">&gt;</span>
            <span className="text-white/90 ml-2">edo</span>
            <span className="text-orange-300">@portfolio</span>
            <span className="cursor text-orange-300">|</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <a href="#about" className="text-white/70 hover:text-orange-300 transition-colors">
                about
              </a>
              <a href="#projects" className="text-white/70 hover:text-orange-300 transition-colors">
                projects
              </a>
              <a href="#contact" className="text-white/70 hover:text-orange-300 transition-colors">
                contact
              </a>
            </nav>

            <div className="w-px h-6 bg-white/20"></div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                className="text-white/60 hover:text-orange-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white/60 hover:text-orange-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/70 hover:text-orange-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="#about"
                className="text-white/70 hover:text-orange-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </a>
              <a
                href="#projects"
                className="text-white/70 hover:text-orange-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                projects
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-orange-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                contact
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com"
                  className="text-white/60 hover:text-orange-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-white/60 hover:text-orange-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
