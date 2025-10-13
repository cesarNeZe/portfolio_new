import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socials = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-primary" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-secondary" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-accent" },
  { icon: Mail, label: "Email", href: "#", color: "hover:text-primary" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="glass-card p-8 inline-block animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex gap-6 justify-center mb-8">
            {socials.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="lg"
                className={`${social.color} transition-colors`}
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-6 h-6" />
                </a>
              </Button>
            ))}
          </div>
          <Button
            size="lg"
            className="gradient-bg animate-gradient text-white font-semibold px-8 hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
