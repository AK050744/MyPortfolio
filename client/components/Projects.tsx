import { Zap, Lock, Brain, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  link?: string;
}

function ProjectCard({
  title,
  date,
  description,
  technologies,
  icon,
  link,
}: ProjectCardProps) {
  return (
    <div className="card-glow p-6 rounded-lg hover:scale-105 transition-all duration-300 h-full flex flex-col group">
      <div className="flex items-start justify-between mb-4">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
          {date}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-foreground/70 text-sm mb-4 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/30 hover:border-primary/70 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-auto"
        >
          View Project
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Code Editor",
      date: "2025",
      description:
        "Advanced code editing tool with AI-powered code completion, intelligent bug detection, and real-time collaboration. Features multi-language support (Python, JavaScript, C++, Java) with WebSocket-based synchronization for seamless team development.",
      technologies: ["FastAPI", "React", "WebSocket", "OpenAI", "Python", "JavaScript"],
      icon: <Brain size={20} />,
      link: "https://github.com/AK050744/Hackathon-.git",
    },
    {
      title: "Secure Pay AI (One Pay)",
      date: "Jul 2025",
      description:
        "Advanced AI-driven fraud detection system leveraging machine learning, computer vision, and behavioral analytics. Provides real-time transaction risk assessment in retail and digital payment environments with facial verification and multi-factor scoring.",
      technologies: ["AI/ML", "Computer Vision", "Risk Scoring", "Payment Security"],
      icon: <Zap size={20} />,
    },
    {
      title: "DVWA Security Testing & Analysis",
      date: "Sep 2025",
      description:
        "Comprehensive web application security testing framework. Configured DVWA with Nginx and ModSecurity firewall to simulate, analyze, and document web vulnerabilities including OWASP Top 10 attacks.",
      technologies: ["DVWA", "Nginx", "ModSecurity", "Security Analysis", "Penetration Testing"],
      icon: <Lock size={20} />,
    },
    {
      title: "AI Personal Assistant (Jarvis)",
      date: "Mar 2024",
      description:
        "Voice-activated intelligent assistant capable of natural language processing, task automation, real-time news fetching, and media control. Built with speech recognition and OpenAI integration for context-aware responses.",
      technologies: ["Python", "Flask", "OpenAI API", "SpeechRecognition"],
      icon: <Brain size={20} />,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-4">
          <span className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-sm text-primary">
            Portfolio
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
            />
          ))}
        </div>

        {/* Additional Project Info */}
        <div className="border-t border-primary/20 pt-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Project Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-glow p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">
                Web Application Security
              </h4>
              <p className="text-foreground/70 text-sm">
                Expertise in identifying and mitigating web vulnerabilities including OWASP Top 10 vulnerabilities, XSS, SQLi, and CSRF attacks.
              </p>
            </div>
            <div className="card-glow p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">
                AI-Driven Security
              </h4>
              <p className="text-foreground/70 text-sm">
                Experience building intelligent security systems using machine learning for fraud detection and anomaly detection.
              </p>
            </div>
            <div className="card-glow p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">
                Network Security
              </h4>
              <p className="text-foreground/70 text-sm">
                Proficiency in network analysis, penetration testing, and firewall configuration for comprehensive security.
              </p>
            </div>
            <div className="card-glow p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">
                System Administration
              </h4>
              <p className="text-foreground/70 text-sm">
                Experience with Linux administration, system hardening, and implementing security best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
