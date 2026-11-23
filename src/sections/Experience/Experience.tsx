import {
  GraduationCap,
  BookOpen,
  Code2,
  Network,
  Database,
  Palette,
  //   ShieldCheck,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const experiences = [
  {
    period: "Module terminé",
    title: "HTML, CSS & JavaScript",
    organization: "Parcours de formation en informatique",
    description:
      "Découverte des principes de conception des pages web, de l'architecture et du comportement des éléments interactifs.",
    icon: Palette,
    status: "completed",
    topics: ["Pages Web", "Amélioration du style", "Interaction"],
  },
  {
    period: "Module terminé",
    title: "Git/Github",
    organization: "Parcours de formation en informatique",
    description:
      "Découverte des principes de gestion de versions et de collaboration sur des projets de développement logiciel.",
    icon: Palette,
    status: "completed",
    topics: ["Gestion de versions", "Collaboration", "Développement"],
  },
  {
    period: "Module terminé",
    title: "UI/UX Design",
    organization: "Parcours de formation en informatique",
    description:
      "Découverte des principes de conception d'interfaces utilisateur, de l'expérience utilisateur et de la création de maquettes ergonomiques.",
    icon: Palette,
    status: "completed",
    topics: ["Interface utilisateur", "Expérience utilisateur", "Maquettage"],
  },
  {
    period: "Module terminé",
    title: "Analyse UML",
    organization: "Parcours de formation en informatique",
    description:
      "Apprentissage de la modélisation et de l'analyse des systèmes informatiques à travers les diagrammes UML.",
    icon: Code2,
    status: "completed",
    topics: ["Modélisation", "Diagrammes UML", "Analyse"],
  },
  {
    period: "Module terminé",
    title: "Bases de données",
    organization: "Parcours de formation en informatique",
    description:
      "Étude de la structuration, de la gestion et de l'organisation des données dans les systèmes informatiques.",
    icon: Database,
    status: "completed",
    topics: ["SQL", "Modélisation", "Gestion des données"],
  },
  {
    period: "En cours",
    title: "React JS",
    organization: "Parcours de formation en informatique",
    description:
      "Développement d'interfaces web dynamiques et interactives avec l'écosystème React.",
    icon: Code2,
    status: "ongoing",
    topics: ["Composants", "Hooks", "TypeScript"],
  },
  {
    period: "En cours",
    title: "Réseaux informatiques",
    organization: "Parcours de formation en informatique",
    description:
      "Découverte des architectures réseaux, des protocoles et des mécanismes de communication informatique.",
    icon: Network,
    status: "ongoing",
    topics: ["Architecture réseau", "Protocoles", "Communication"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 px-6 py-28 dark:bg-slate-950 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600 dark:text-blue-400">
            Mon évolution
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Parcours & formation
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Un parcours construit autour de l'apprentissage, de la pratique et
            de l'évolution constante dans le domaine du numérique.
          </p>
        </div>

        {/* INTRO CARD */}
        <div className="mb-14 flex flex-col items-center gap-5 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center sm:flex-row sm:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <GraduationCap size={34} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Apprentissage et développement continu
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Je développe progressivement mes compétences techniques et
              méthodologiques afin de concevoir des applications toujours plus
              performantes.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute bottom-6 left-4.75 top-6 w-px bg-linear-to-b from-blue-500 via-violet-500 to-slate-300 dark:to-slate-700 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const completed = experience.status === "completed";
              const ongoing = experience.status === "ongoing";

              return (
                <div
                  key={experience.title}
                  className={`relative flex items-start gap-6 sm:w-1/2 ${
                    index % 2 === 0
                      ? "sm:ml-auto sm:pl-12"
                      : "sm:mr-auto sm:flex-row-reverse sm:pr-12"
                  }`}
                >
                  {/* TIMELINE ICON */}
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 dark:border-slate-950 ${
                      completed
                        ? "bg-emerald-500 text-white"
                        : ongoing
                          ? "bg-blue-600 text-white"
                          : "bg-slate-300 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {completed ? (
                      <CheckCircle2 size={17} />
                    ) : ongoing ? (
                      <Clock3 size={17} />
                    ) : (
                      <Icon size={17} />
                    )}
                  </div>

                  {/* CONTENT CARD */}
                  <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {experience.period}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          completed
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : ongoing
                              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                              : "bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400"
                        }`}
                      >
                        {completed
                          ? "Terminé"
                          : ongoing
                            ? "En cours"
                            : "À venir"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {experience.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {experience.organization}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {experience.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-16 flex items-center justify-center gap-3 text-center text-sm text-slate-500 dark:text-slate-400">
          <BookOpen size={19} className="text-blue-600 dark:text-blue-400" />
          <p>Apprendre aujourd'hui pour construire les solutions de demain.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
