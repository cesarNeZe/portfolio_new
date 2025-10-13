import { Code2, Database, Globe, Server } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Globe,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "from-primary to-secondary",
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "GraphQL"],
    color: "from-secondary to-accent",
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "Redis", "Supabase", "Prisma"],
    color: "from-accent to-primary",
  },
  {
    category: "Tools",
    icon: Code2,
    skills: ["Git", "Docker", "AWS", "CI/CD"],
    color: "from-primary via-accent to-secondary",
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.category}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} p-2.5 mb-4 group-hover:animate-glow`}>
                <tech.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
