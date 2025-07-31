'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/**
 * This is the revamped main page for Edo Galli's portfolio.  The layout now
 * features a fixed top navigation bar with a terminal‑like prompt on the
 * left, navigation links in the middle, and social icons on the right.  The
 * content itself sits below the bar with sufficient top padding.
 *
 * All project data and descriptive text remains the same as the original
 * implementation.  Additional styling has been applied to make headings
 * gradient‑coloured, cards animate subtly on hover, and the contact section
 * more compact and cohesive.  Colours draw from the updated accent palette
 * defined in globals.css.
 */

// A list of projects with their metadata pulled from the existing site.
const projects = [
  {
    title: "pub-sub",
    description:
      "a client‑server, terminal‑based, pub‑sub application leveraging java's multithreading capabilities.",
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
      "a javafx application, where users can save, load, and play a turn‑based fantasy card game.",
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
      "the very website you're currently on; available on my github.",
    tags: ["react", "next.js", "tailwind", "shadcn"],
    url: "https://github.com/edoski/portfolio",
  },
];

export default function Home() {
  return (
    <>
      {/* Fixed top navigation bar */}
      <nav className="fixed top-0 left-0 right-0 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Terminal prompt style label with blinking caret */}
          <a
            href="#about"
            className="font-mono text-sm text-muted-foreground flex items-center space-x-1 whitespace-nowrap"
          >
            <span>&gt;_ edo@portfolio</span>
            <span className="animate-pulse">▌</span>
          </a>
          {/* Navigation links */}
          <div className="flex items-center gap-4">
            <a
              href="#about"
              className="text-sm hover:underline transition-colors hover:text-primary"
            >
              about
            </a>
            <a
              href="#projects"
              className="text-sm hover:underline transition-colors hover:text-primary"
            >
              projects
            </a>
            <a
              href="#contact"
              className="text-sm hover:underline transition-colors hover:text-primary"
            >
              contact
            </a>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/edoski"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/edoardo-galli-5074321b9/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Main content container with top padding to accommodate the fixed nav */}
      <div className="pt-28 px-6 pb-12 max-w-4xl mx-auto font-sans space-y-16">
        {/* About section */}
        <section id="about" className="space-y-4">
          {/* Escape quotation marks and apostrophe inside the terminal prompt to satisfy the react/no-unescaped-entities rule. */}
          <p className="font-mono text-lg">$ echo &quot;hi, my name is&quot;</p>
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text animate-gradient-x">
            edo.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
            an ambitious 21‑year‑old software engineer; currently studying computer science at the University of Bologna.
          </p>
        </section>

        <Separator />

        {/* Projects section */}
        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text animate-gradient-x">
            projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map(({ title, description, tags, url }) => (
              <Card
                key={title}
                className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary animate-fade-up"
              >
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
        <section id="contact" className="space-y-6">
          <Card className="p-6">
            <CardHeader className="pb-2">
              <CardTitle>
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text animate-gradient-x">
                  reach out
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-muted-foreground">
                for any inquiries or collaboration.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="mailto:edoxtreme@gmail.com">
                  <Button variant="default">contact</Button>
                </a>
                <a
                  href="https://github.com/edoski"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/edoardo-galli-5074321b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-20 py-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} – All rights reserved.
        </footer>
      </div>
    </>
  );
}