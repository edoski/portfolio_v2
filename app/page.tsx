import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/**
 * This is the main page for Edo Galli's portfolio.  It renders a simple
 * one‑page layout with anchors for the about, projects and contact sections.
 * Data for the projects is kept in a local array to make it easy to map
 * into cards.  All text values here are taken directly from the existing
 * portfolio at edoski.com.  Only shadcn components are used for UI
 * primitives such as cards, buttons, badges and separators.
 */

// A list of projects with their metadata pulled from the existing site.
const projects = [
  {
    title: "pub-sub",
    description:
      "(OS course project) a client‑server, terminal‑based, pub‑sub application leveraging java's multithreading capabilities.",
    tags: ["java", "client-server", "multithreading"],
    url: "https://github.com/edoski/pub-sub",
  },
  {
    title: "web-chat",
    description:
      "a web‑based chat interface, where users can register themselves, and interact with other users either in a general chat, or individually",
    tags: ["javascript", "css", "html"],
    url: "https://github.com/edoski/web-chat",
  },
  {
    title: "fantasy-cards",
    description:
      "(university project) a javafx application, where users can save, load, and play a turn‑based fantasy card game.",
    tags: ["java", "javafx", "scenebuilder"],
    url: "https://github.com/edoski/fantasy-cards",
  },
  {
    title: "md-notes-app",
    description:
      "a web‑based note‑taking application, where users can create, edit, and preview markdown notes, stored on firebase.",
    tags: ["react", "firebase"],
    url: "https://github.com/edoski/md-notes-app",
  },
  {
    title: "youtube-clone",
    description:
      "a web‑based application where users can authenticate via their google account, and upload or watch videos on the platform.",
    tags: ["react", "typescript", "google-api"],
    url: "https://github.com/edoski/youtube-clone",
  },
  {
    title: "portfolio",
    description:
      "the very website you're currently on; originally in vanilla js, now in react; everything you see here is freely available on my github.",
    tags: ["javascript", "css", "html"],
    url: "https://github.com/edoski/portfolio",
  },
];

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto font-sans space-y-16">
      {/* Navigation links fixed to the top of the page */}
      <nav className="flex justify-end gap-6 text-sm sticky top-0 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 z-10">
        <a href="#about" className="hover:underline">
          about
        </a>
        <a href="#projects" className="hover:underline">
          projects
        </a>
        <a href="#contact" className="hover:underline">
          contact
        </a>
      </nav>

      {/* About section */}
      <section id="about" className="space-y-4">
        <p className="font-mono text-sm text-muted-foreground">&gt;_ edo@portfolio</p>
        {/* Escape quotation marks and apostrophe inside the terminal prompt to satisfy
           the react/no-unescaped-entities rule. */}
        <p className="font-mono text-lg">
          $ echo &quot;Hello, I&apos;m Edo&quot;
        </p>
        <h1 className="text-4xl font-semibold">Edo Galli</h1>
        <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
          an ambitious 21‑year‑old software engineer; currently studying computer science at the University of Bologna.
        </p>
      </section>

      <Separator />

      {/* Projects section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-3xl font-semibold">projects</h2>
        <div className="grid gap-6">
          {projects.map(({ title, description, tags, url }) => (
            <Card key={title} className="hover:border-ring transition-colors">
              <CardHeader className="pb-2">
                <CardTitle>
                  {/* Project title links to the GitHub repository */}
                  <a href={url} target="_blank" rel="noreferrer" className="hover:underline">
                    {title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>{description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="lowercase">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact section */}
      <section id="contact" className="space-y-4">
        <h2 className="text-3xl font-semibold">reach out</h2>
        <p className="text-base text-muted-foreground">
          for any inquiries or collaboration.
        </p>
        <a href="mailto:edoxtreme@gmail.com">
          <Button variant="outline">contact</Button>
        </a>
        <div className="font-mono text-xs text-muted-foreground space-y-1">
          <p>edo dev</p>
          <p>&lt;/&gt;</p>
        </div>
      </section>

      <footer className="text-center text-xs text-muted-foreground pt-10">
        © 2024 - All rights reserved.
      </footer>
    </div>
  );
}