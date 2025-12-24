import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block mb-4">
          <span className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-sm text-primary">
            Get in Touch
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Contact Me
        </h2>

        <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
          I'm always interested in hearing about new cybersecurity challenges and opportunities. Feel free to reach out!
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
              className="card-glow p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform"
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

            <div className="card-glow p-4 rounded-lg flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Location</p>
                <p className="text-foreground font-medium">India</p>
              </div>
            </div>
          </div>

          {/* Quick Message */}
          <div className="card-glow p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Quick Message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2 rounded-lg border border-primary bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Availability */}
        <div className="card-glow p-6 rounded-lg text-center border-t border-primary/20 pt-8">
          <p className="text-foreground mb-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Currently Available for Opportunities
          </p>
          <p className="text-foreground/60 text-sm">
            Open to cybersecurity positions, internships, and freelance projects
          </p>
        </div>
      </div>
    </section>
  );
}
