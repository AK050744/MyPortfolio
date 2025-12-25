import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, TrendingUp } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

function CertificationCard({ name, issuer, date, description }: Certification) {
  return (
    <div className="card-glow p-6 rounded-lg border-l-4 border-l-primary hover:border-l-secondary transition-colors duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary">
            <Award size={20} />
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-primary text-sm font-medium mt-1">{issuer}</p>
          <p className="text-foreground/60 text-sm mt-2">{description}</p>
          <p className="text-foreground/50 text-xs mt-3">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  const certifications: Certification[] = [
    {
      name: "Ethical Hacking (NPTEL)",
      issuer: "National Programme on Technology Enhanced Learning",
      date: "November 2025",
      description:
        "Comprehensive certification in ethical hacking practices and penetration testing methodologies.",
    },
    {
      name: "Database Management System (NPTEL)",
      issuer: "National Programme on Technology Enhanced Learning",
      date: "April 2025",
      description:
        "In-depth course covering database design, SQL, and database security principles.",
    },
    {
      name: "Joy of Computing with Python (NPTEL)",
      issuer: "National Programme on Technology Enhanced Learning",
      date: "November 2024",
      description:
        "Python programming course with focus on practical application development.",
    },
    {
      name: "TATA Group Job Simulation",
      issuer: "TATA Group",
      date: "August 2025",
      description:
        "Real-world job simulation experience with industry-leading practices and methodologies.",
    },
    {
      name: "UNESCO Youth Hackathon 2025",
      issuer: "UNESCO",
      date: "October 2025",
      description:
        "Certificate of participation for submitting an innovative project addressing 'Youth Leading the Way - Building MIL Solutions for Impact'.",
    },
    {
      name: "CodeFest'25 - Capture The Flag (CTF)",
      issuer: "Indian Institute of Technology (Banaras Hindu University)",
      date: "2025",
      description:
        "Participated in competitive cybersecurity CTF competition, demonstrating security and penetration testing skills.",
    },
    {
      name: "Samsung Solve for Tomorrow 2025",
      issuer: "Samsung",
      date: "2025",
      description:
        "Certificate of participation for design thinking and innovative solution development in the Samsung Solve for Tomorrow program.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-20 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Certifications
            </h1>
            <p className="text-xl text-foreground/70">
              My certifications and achievements
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="card-glow p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary mb-4">
                  <TrendingUp size={24} />
                </div>
                <p className="text-3xl font-bold text-primary">7</p>
                <p className="text-foreground/60 text-sm mt-2">Certifications Earned</p>
              </div>

              <div className="card-glow p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary mb-4">
                  <Award size={24} />
                </div>
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-foreground/60 text-sm mt-2">Hackathons & Competitions</p>
              </div>

              <div className="card-glow p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded border border-primary bg-primary/10 text-primary mb-4">
                  <Award size={24} />
                </div>
                <p className="text-3xl font-bold text-primary">Verified</p>
                <p className="text-foreground/60 text-sm mt-2">All Credentials</p>
              </div>
            </div>

            {/* Certifications List */}
            <div className="grid gap-6 mb-16">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={index}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  description={cert.description}
                />
              ))}
            </div>

            {/* Highlights */}
            <div className="border-t border-primary/20 pt-12">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Key Achievements
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-glow p-6 rounded-lg hover:border-primary/70 transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-3">
                    🏆 Hackathon Participant
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Actively participated in UNESCO Youth Hackathon 2025 and contributed innovative solutions addressing global challenges.
                  </p>
                </div>

                <div className="card-glow p-6 rounded-lg hover:border-primary/70 transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-3">
                    🔐 Security Expert
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Participated in CTF competitions and earned ethical hacking certifications demonstrating strong security expertise.
                  </p>
                </div>

                <div className="card-glow p-6 rounded-lg hover:border-primary/70 transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-3">
                    🚀 Innovation Leader
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Samsung Solve for Tomorrow participant demonstrating design thinking and commitment to innovative problem-solving.
                  </p>
                </div>

                <div className="card-glow p-6 rounded-lg hover:border-primary/70 transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-3">
                    📚 Continuous Learner
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Completed multiple NPTEL courses in Python, Databases, and Ethical Hacking showing commitment to professional development.
                  </p>
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
