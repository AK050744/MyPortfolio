import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Linkedin, MapPin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-20 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-sm text-primary">
                Get in Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Let's Connect
            </h1>
            <p className="text-xl text-foreground/70">
              Have a project in mind or want to collaborate? Reach out and let's create something amazing together.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Contact Information
                </h3>

                <a
                  href="mailto:anshvikas04@gmail.com"
                  className="card-glow p-6 rounded-lg flex items-center gap-4 hover:scale-105 hover:border-primary/70 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email Address</p>
                    <p className="text-foreground font-medium break-all">
                      anshvikas04@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+916386030340"
                  className="card-glow p-6 rounded-lg flex items-center gap-4 hover:scale-105 hover:border-primary/70 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Phone Number</p>
                    <p className="text-foreground font-medium">+91 6386030340</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ansh-kumar-singh024940208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glow p-6 rounded-lg flex items-center gap-4 hover:scale-105 hover:border-primary/70 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary">
                      <Linkedin size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">LinkedIn Profile</p>
                    <p className="text-foreground font-medium truncate">
                      Ansh Kumar Singh
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/AK050744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glow p-6 rounded-lg flex items-center gap-4 hover:scale-105 hover:border-primary/70 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary">
                      <Github size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">GitHub Profile</p>
                    <p className="text-foreground font-medium">AK050744</p>
                  </div>
                </a>

                <div className="card-glow p-6 rounded-lg flex items-center gap-4 mt-8 border-t border-primary/20 pt-8">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="text-foreground font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-glow p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
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
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="Project collaboration"
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
                      placeholder="Tell me about your project or collaboration idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full px-6 py-3 rounded-lg border border-primary bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    {formStatus === "loading" && "Sending..."}
                    {formStatus === "success" && "Message Sent! ✓"}
                    {formStatus === "idle" && "Send Message"}
                  </button>

                  {formStatus === "success" && (
                    <div className="p-4 rounded-lg border border-primary/50 bg-primary/10 text-primary text-sm text-center">
                      Thank you for reaching out! I'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Availability Status */}
            <div className="card-glow p-8 rounded-lg text-center border-t border-primary/20 pt-12 hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-primary bg-primary/10 text-primary mx-auto mb-4">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
              </div>
              <p className="text-foreground font-semibold mb-2">
                Currently Available for Collaboration
              </p>
              <p className="text-foreground/60 text-sm max-w-2xl mx-auto">
                I'm actively looking for exciting projects, collaborations, and professional opportunities. Whether it's a full-time role, freelance work, or partnership, feel free to reach out!
              </p>
            </div>

            {/* Response Time */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="card-glow p-6 rounded-lg text-center hover:border-primary/70 transition-all duration-300">
                <p className="text-2xl font-bold text-primary mb-2">⚡ Quick Response</p>
                <p className="text-foreground/60 text-sm">
                  I typically respond to messages within 24 hours
                </p>
              </div>

              <div className="card-glow p-6 rounded-lg text-center hover:border-primary/70 transition-all duration-300">
                <p className="text-2xl font-bold text-primary mb-2">🚀 Ready to Start</p>
                <p className="text-foreground/60 text-sm">
                  Available for new projects and exciting opportunities
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
