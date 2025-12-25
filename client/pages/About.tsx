import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[40vh] flex items-center justify-center pt-20 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About Me
            </h1>
            <p className="text-xl text-foreground/70">
              Full Stack Developer & Innovation Enthusiast
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a full-stack developer passionate about creating effective web applications and exploring new technologies. I enjoy working on diverse projects that challenge me to grow and learn continuously.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                With experience in full-stack development, security, and AI/ML, I focus on building solutions that are not only functional but also secure and user-friendly. I'm always interested in collaborating on interesting projects and connecting with like-minded developers.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, participating in hackathons, and contributing to projects that make a positive impact.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-12 border-t border-primary/20">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Contact
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-glow p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <a
                    href="tel:+916386030340"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +91 6386030340
                  </a>
                </div>
                <div className="card-glow p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <a
                    href="mailto:anshvikas04@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors break-all"
                  >
                    anshvikas04@gmail.com
                  </a>
                </div>
                <div className="card-glow p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">LinkedIn</h4>
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
      </main>
      <Footer />
    </div>
  );
}
