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
              I'm a developer focused on building scalable, secure, and
              user-centric products. I enjoy working in fast-paced, startup-like
              environments where ideas turn into real-world solutions.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My experience spans development, cybersecurity, and AI, with a
              strong interest in research-driven problem solving. I actively
              contribute to open-source projects and experiment with emerging
              technologies.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm always open to collaborating on innovative products, impactful
              research, and open-source initiatives.
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
