import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    "Full Stack Developer & Security Specialist",
    "Web Application Security Expert",
    "AI/ML & Fraud Detection Enthusiast",
    "Experienced with Python, JavaScript, and Modern Frameworks",
    "Ethical Hacking & Penetration Testing Specialist",
    "Hackathon Participant & Innovation Advocate",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-20 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-sm text-primary">
                About Me
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Professional Profile
            </h1>
            <p className="text-xl text-foreground/70">
              Full Stack Developer & Security Innovator
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              {/* Left Column */}
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a passionate full-stack developer with a strong focus on building secure, scalable applications. I combine technical excellence with innovative problem-solving to create solutions that matter. My journey spans from building web applications to implementing advanced security practices.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  My expertise encompasses full-stack development, ethical hacking, penetration testing, and AI-driven fraud detection systems. I'm skilled at developing robust applications using modern frameworks and implementing security best practices throughout the development lifecycle.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm committed to continuous learning and staying updated with the latest technologies and industry trends. My recent work includes developing AI-powered development tools, fraud detection systems, and contributing to open-source projects that make a real impact.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="grid gap-3">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-primary/20 pt-12">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Contact Information
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
