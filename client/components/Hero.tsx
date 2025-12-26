import { ArrowRight, Code } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(160,255,200,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(160,255,200,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Radial Gradient Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-6 inline-block">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg border border-primary bg-primary/10 text-primary animate-pulse-glow">
            <Code size={32} />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Hi, I'm Ansh
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          Developer & Research Enthusiast
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://www.linkedin.com/in/ansh-kumar-singh024940208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/50 bg-primary/5 text-primary font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-primary/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary glow-text">5+</div>
            <p className="text-sm text-foreground/60 mt-2">Major Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary glow-text">6+</div>
            <p className="text-sm text-foreground/60 mt-2">Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary glow-text">15+</div>
            <p className="text-sm text-foreground/60 mt-2">Tech Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}
