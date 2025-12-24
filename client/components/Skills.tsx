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

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Skills",
      icon: <Code2 size={20} />,
      skills: [
        "Python",
        "MySQL",
        "Ethical Hacking",
        "Penetration Testing",
        "Network Security",
        "Operating Systems",
      ],
    },
    {
      title: "Security Tools",
      icon: <Zap size={20} />,
      skills: [
        "Metasploit",
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "OWASP",
        "Hydra",
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
        "Analysis",
      ],
    },
    {
      title: "Areas of Expertise",
      icon: <Brain size={20} />,
      skills: [
        "Web Application Security",
        "Network Penetration Testing",
        "Vulnerability Assessment",
        "Risk Management",
        "Security Analysis",
        "Incident Response",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-4">
          <span className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-sm text-primary">
            Expertise
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
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
        <div className="mt-16 pt-12 border-t border-primary/20">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Technical Proficiency
          </h3>

          <div className="space-y-6">
            {[
              { name: "Cybersecurity & Hacking", level: 85 },
              { name: "Web Application Security", level: 80 },
              { name: "Network Security", level: 75 },
              { name: "Python Programming", level: 80 },
              { name: "System Administration", level: 70 },
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
      </div>
    </section>
  );
}
