export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a full-stack developer passionate about creating effective web applications. I enjoy working with modern technologies and solving complex problems.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              With experience in full-stack development, security, and AI/ML, I focus on building solutions that are functional, secure, and user-friendly. I'm always interested in collaborating on interesting projects.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, participating in hackathons, and learning from the development community.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="card-glow p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Phone</h4>
              <a
                href="tel:+916386030340"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                +91 6386030340
              </a>
            </div>
            <div className="card-glow p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Email</h4>
              <a
                href="mailto:anshvikas04@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors break-all"
              >
                anshvikas04@gmail.com
              </a>
            </div>
            <div className="card-glow p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/ansh-kumar-singh024940208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors truncate"
              >
                Ansh Kumar Singh
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
