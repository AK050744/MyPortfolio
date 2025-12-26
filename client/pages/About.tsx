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
              Developer | Startup & Research Enthusiast
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a developer focused on building scalable, secure, and
                user-centric products. I enjoy working in fast-paced,
                startup-like environments where ideas turn into real-world
                solutions.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My experience spans development, cybersecurity, and AI, with a
                strong interest in research-driven problem solving. I actively
                contribute to open-source projects and experiment with emerging
                technologies to stay ahead of the curve.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm always open to collaborating on innovative products,
                impactful research, and open-source initiatives.
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
