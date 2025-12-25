import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-primary bg-primary/10 text-primary">
              <span className="font-bold text-sm">AS</span>
            </div>
            <span className="hidden font-bold text-primary sm:inline glow-text">
              Ansh Singh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/ansh-kumar-singh024940208"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-primary bg-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary hover:text-primary/80 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-primary/20 py-4 space-y-3 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/ansh-kumar-singh024940208"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded border border-primary bg-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-center"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
