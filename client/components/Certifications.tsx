import { Award } from "lucide-react";

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

export function Certifications() {
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
        "Foundational Python programming course with focus on practical application development.",
    },
    {
      name: "TATA Group Job Simulation",
      issuer: "TATA Consultancy Services",
      date: "August 2025",
      description:
        "Industry-focused job simulation providing insights into enterprise-level cybersecurity practices.",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-4">
          <span className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-sm text-primary">
            Credentials
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Certifications & Achievements
        </h2>

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

        {/* Education Section */}
        <div className="border-t border-primary/20 pt-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Education
          </h3>

          <div className="space-y-6">
            <div className="card-glow p-6 rounded-lg border-l-4 border-l-secondary">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-secondary text-sm font-medium mt-1">
                    Bharati Vidyapeeth (Deemed to be University)
                  </p>
                  <p className="text-foreground/60 text-sm mt-2">
                    Expected Graduation: 2027
                  </p>
                  <p className="text-foreground/70 text-sm mt-2">
                    Location: Pune, Maharashtra
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary glow-text">
                    8.60
                  </div>
                  <p className="text-foreground/60 text-xs mt-1">/10 GPA</p>
                </div>
              </div>
            </div>

            <div className="card-glow p-6 rounded-lg border-l-4 border-l-secondary">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">
                    12th Grade
                  </h4>
                  <p className="text-secondary text-sm font-medium mt-1">
                    Central Academy Senior Secondary School
                  </p>
                  <p className="text-foreground/60 text-sm mt-2">
                    Completed: 2022
                  </p>
                  <p className="text-foreground/70 text-sm mt-2">
                    Location: Lucknow, Uttar Pradesh
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary glow-text">
                    79
                  </div>
                  <p className="text-foreground/60 text-xs mt-1">/100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
