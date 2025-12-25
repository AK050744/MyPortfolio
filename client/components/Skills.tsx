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
        "JavaScript",
        "React",
        "MySQL",
        "Full Stack Development",
        "Web Development",
      ],
    },
    {
      title: "Security",
      icon: <Zap size={20} />,
      skills: [
        "Ethical Hacking",
        "Penetration Testing",
        "Network Security",
        "Web Security",
        "System Security",
        "Vulnerability Assessment",
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
      title: "Other Skills",
      icon: <Brain size={20} />,
      skills: [
        "AI/ML",
        "Fraud Detection",
        "System Design",
        "DevOps",
        "Database Design",
        "API Development",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Skills
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
      </div>
    </section>
  );
}
