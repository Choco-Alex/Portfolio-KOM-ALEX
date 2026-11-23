import {
  Monitor,
  Server,
  Database,
  Wrench,
  Code2,
//   Palette,
  GitBranch,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces modernes et interactives",
    icon: Monitor,
    color: "blue",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Logique serveur et développement applicatif",
    icon: Server,
    color: "violet",
    skills: ["PHP", "API REST", "Architecture backend"],
  },
  {
    title: "Bases de données",
    subtitle: "Organisation et gestion des données",
    icon: Database,
    color: "emerald",
    skills: ["MySQL", "SQL", "Modélisation des données"],
  },
  {
    title: "Outils & Conception",
    subtitle: "Environnement de travail et conception",
    icon: Wrench,
    color: "amber",
    skills: ["Git", "GitHub", "VS Code", "UML", "UI/UX Design"],
  },
];

const learningAreas = [
  {
    icon: Code2,
    title: "React & TypeScript",
    description: "Approfondissement du développement frontend moderne.",
  },
  {
    icon: Terminal,
    title: "Réseaux informatiques",
    description: "Découverte des infrastructures et des communications.",
  },
  {
    icon: GitBranch,
    title: "Ethical Hacking",
    description: "Exploration des fondamentaux de la cybersécurité.",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 px-6 py-28 dark:bg-slate-950 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600 dark:text-blue-400">
            Mon savoir-faire
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Mes compétences
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Les technologies, outils et méthodes que j'utilise ou que j'explore
            pour concevoir des solutions numériques de qualité.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            const colorStyles = {
              blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
              violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
              emerald:
                "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
              amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
            };

            return (
              <div
                key={group.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colorStyles[group.color as keyof typeof colorStyles]}`}
                  >
                    <Icon size={27} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* LEARNING SECTION */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-[3px] text-violet-600 dark:text-violet-400">
              En constante évolution
            </span>

            <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Ce que j'approfondis actuellement
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {learningAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Icon size={24} />
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {area.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
