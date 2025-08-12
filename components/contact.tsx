"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-orange-300 glow-text mb-4">reach out</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-orange-400 mx-auto rounded-full mb-8"></div>

        {/* Description */}
        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">for any inquiries or collaboration.</p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:contact@edoski.com"
            className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 hover:border-orange-300/40"
            style={{
              transform: "perspective(1000px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(2deg) rotateY(-2deg)"
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white/90 mb-2">Email</h3>
            <p className="text-white/60 group-hover:text-orange-300 transition-colors">contact@edoski.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 hover:border-orange-300/40"
            style={{
              transform: "perspective(1000px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(2deg) rotateY(-2deg)"
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white/90 mb-2">GitHub</h3>
            <p className="text-white/60 group-hover:text-orange-300 transition-colors">@edoski</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 hover:border-orange-300/40"
            style={{
              transform: "perspective(1000px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(2deg) rotateY(-2deg)"
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white/90 mb-2">LinkedIn</h3>
            <p className="text-white/60 group-hover:text-orange-300 transition-colors">Connect with me</p>
          </a>
        </div>

        {/* Primary CTA */}
        <a
          href="mailto:contact@edoski.com"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        >
          <Mail className="mr-2" size={20} />
          Send me a message
        </a>
      </div>
    </section>
  )
}
