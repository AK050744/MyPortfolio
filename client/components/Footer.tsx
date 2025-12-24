import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background/50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-primary glow-text mb-2">
              Ansh Singh
            </h3>
            <p className="text-sm text-foreground/60">
              Cybersecurity Professional & Penetration Testing Specialist
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/60 hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ansh-kumar-singh024940208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:anshvikas04@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+916386030340"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Code2 size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/50">
              © 2025 Ansh Singh. All rights reserved.
            </p>
            <p className="text-xs text-foreground/40">
              Built with React, Tailwind CSS & ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
