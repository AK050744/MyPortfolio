import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Code2, Brain, Users, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

function SkillCategory({ title, icon, skills }: SkillCategory) {
  return (
    <div className="card-glow p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded border border-primary bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 text-sm rounded bg-primary/10 border border-primary/30 text-primary hover:border-primary/70 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Skills",
      icon: <Code2 size={20} />,
      skills: [
        "Python",
        "MySQL",
        "JavaScript",
        "React",
        "Full Stack Development",
        "Web Development",
      ],
    },
    {
      title: "Security & Network",
      icon: <Zap size={20} />,
      skills: [
        "Ethical Hacking",
        "Penetration Testing",
        "Network Security",
        "Networking",
        "System Security",
        "OWASP",
      ],
    },
    {
      title: "Professional Skills",
      icon: <Users size={20} />,
      skills: [
        "Leadership",
        "Teamwork",
        "Problem-Solving",
        "Adaptability",
        "Communication",
        "Project Management",
      ],
    },
    {
      title: "Areas of Expertise",
      icon: <Brain size={20} />,
      skills: [
        "Web Application Security",
        "AI/ML",
        "Fraud Detection",
        "Vulnerability Assessment",
        "Risk Management",
        "System Design",
      ],
    },
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
                Expertise
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Skills & Expertise
            </h1>
            <p className="text-xl text-foreground/70">
              Technical skills and professional expertise across multiple domains
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {skillCategories.map((category, index) => (
                <SkillCategory
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                />
              ))}
            </div>

            {/* Proficiency Levels */}
            <div className="pt-12 border-t border-primary/20">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Technical Proficiency
              </h3>

              <div className="space-y-6">
                {[
                  { name: "Full Stack Development", level: 85 },
                  { name: "Web Security & Hacking", level: 85 },
                  { name: "Python Programming", level: 80 },
                  { name: "JavaScript/React", level: 80 },
                  { name: "Network Security", level: 75 },
                  { name: "Database Management", level: 75 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-primary/20 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-16 pt-12 border-t border-primary/20">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Education
              </h3>

              <div className="space-y-4">
                <div className="card-glow p-6 rounded-lg hover:border-primary/70 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        B. Tech in Information Technology
                      </h4>
                      <p className="text-primary text-sm font-medium mt-1">
                        Bharati Vidyapeeth (Deemed to be University)
                      </p>
                      <p className="text-foreground/60 text-sm mt-2">
                        Expected Graduation: 2027 | Location: Pune, MH
                      </p>
                    </div>
                    <span className="text-primary bg-primary/10 px-3 py-1 rounded text-sm">
                      GPA: 8.60/10
                    </span>
                  </div>
                </div>

                <div className="card-glow p-6 rounded-lg hover:border-primary/70 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        Senior Secondary School (12th Grade)
                      </h4>
                      <p className="text-primary text-sm font-medium mt-1">
                        Central Academy Senior Secondary School
                      </p>
                      <p className="text-foreground/60 text-sm mt-2">
                        Year: 2022 | Location: Lucknow, UP
                      </p>
                    </div>
                    <span className="text-primary bg-primary/10 px-3 py-1 rounded text-sm">
                      79/100
                    </span>
                  </div>
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
