import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Get in Touch
        </h2>

        <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
          Feel free to reach out. I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>

            <a
              href="mailto:anshvikas04@gmail.com"
              className="card-glow p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Email</p>
                <p className="text-foreground font-medium break-all">
                  anshvikas04@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+916386030340"
              className="card-glow p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Phone</p>
                <p className="text-foreground font-medium">+91 6386030340</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ansh-kumar-singh024940208"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary">
                  <Linkedin size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground/60">LinkedIn</p>
                <p className="text-foreground font-medium truncate">
                  Ansh Kumar Singh
                </p>
              </div>
            </a>

            <a
              href="https://github.com/AK050744"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary">
                  <Github size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground/60">GitHub</p>
                <p className="text-foreground font-medium">AK050744</p>
              </div>
            </a>
          </div>

          {/* Quick Message */}
          <div className="card-glow p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Quick Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full px-6 py-3 rounded-lg border border-primary bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {formStatus === "loading" && "Sending..."}
                {formStatus === "success" && "Message Sent! ✓"}
                {formStatus === "idle" && "Send Message"}
              </button>

              {formStatus === "success" && (
                <div className="p-4 rounded-lg border border-primary/50 bg-primary/10 text-primary text-sm">
                  Thank you for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Status */}
        <div className="card-glow p-6 rounded-lg text-center border-t border-primary/20 pt-8 hover:border-primary/50 transition-colors">
          <p className="text-foreground mb-2 flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            Open to Opportunities
          </p>
          <p className="text-foreground/60 text-sm">
            Available for full-time roles, freelance projects, consulting work, and innovative collaborations
          </p>
        </div>
      </div>
    </section>
  );
}
