import ProjectCard from "./project-card"

const projects = [
  {
    title: "pub-sub",
    description: "a client-server, terminal-based, pub-sub application leveraging java's multithreading capabilities.",
    tags: ["java", "client-server", "multithreading"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "web-chat",
    description:
      "a web-based chat interface, where users can register themselves, and interact with other users either in a general chat or individually.",
    tags: ["javascript", "css", "html"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "fantasy-cards",
    description: "a javafx application, where users can save, load, and play a turn-based fantasy card game.",
    tags: ["java", "javafx", "scenebuilder"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "md-notes-app",
    description:
      "a web-based note-taking application, where users can create, edit, and preview markdown notes, stored on firebase.",
    tags: ["react", "firebase"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "youtube-clone",
    description:
      "a web-based application, where users can authenticate via their google account, and upload or watch videos on the platform.",
    tags: ["react", "typescript", "google-api"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "portfolio",
    description: "the very website you're currently on; available on my github.",
    tags: ["react", "next.js", "tailwind", "shadcn"],
    gradient: "from-amber-500 to-orange-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 glow-text mb-4">projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
