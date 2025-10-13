import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform leveraging AI to generate marketing content with customizable templates and styles.",
    tags: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "Real-time Chat App",
    description: "Scalable messaging application with WebSocket support, file sharing, and end-to-end encryption.",
    tags: ["TypeScript", "Socket.io", "Redis", "AWS"],
    gradient: "from-accent to-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="gradient-bg text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
