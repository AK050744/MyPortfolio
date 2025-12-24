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
        "Participated in competitive cybersecurity CTF competition, demonstrating ethical hacking and penetration testing skills.",
    },
    {
      name: "Samsung Solve for Tomorrow 2025",
      issuer: "Samsung",
      date: "2025",
      description:
        "Certificate of participation for design thinking and innovative solution development in the Samsung Solve for Tomorrow program.",
    },
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
      </div>
    </section>
  );
}
