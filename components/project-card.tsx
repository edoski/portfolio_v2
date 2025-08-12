"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  gradient: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5"
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovered
          ? "perspective(1000px) rotateX(2deg) rotateY(-2deg)"
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
          isHovered ? "border-orange-300/40" : "border-transparent"
        }`}
        style={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
            : "transparent",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-orange-300 font-mono">{project.title}</h3>
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 text-white/60 hover:text-orange-300 transition-colors">
              <Github size={18} />
            </button>
            <button className="p-2 text-white/60 hover:text-orange-300 transition-colors">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-white/10 text-white/80 rounded-full border border-white/20 hover:border-orange-300/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
