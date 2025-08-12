"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "hi, my name is"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal Command */}
        <div className="font-mono text-sm md:text-base text-slate-400 mb-8 float">
          <span className="text-orange-400">$</span> echo &quot;{displayText}&quot;
          <span className="cursor text-orange-400">|</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="text-orange-400 glow-text">edo</span>
          <span className="text-slate-300">.</span>
        </h1>

        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            an ambitious <span className="text-orange-400 font-semibold">21-year-old software engineer</span>, currently
            studying computer science at the{" "}
            <span className="text-orange-400 font-semibold">University of Bologna</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-border"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}