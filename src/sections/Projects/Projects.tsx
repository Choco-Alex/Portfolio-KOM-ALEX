import {
  ArrowUpRight,
  Code2,
  Database,
  Gamepad2,
  Monitor,
  ShieldCheck,
  Server,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GameHub Manager",
    category: "Application Web de gestion",
    description:
      "Une plateforme de gestion et de distribution de jeux vidéo conçue pour centraliser les opérations, gérer les clients, suivre les ventes et sécuriser les transferts de fichiers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    features: [
      "Gestion des jeux et des clients",
      "Ventes, factures et paiements",
      "Transferts sécurisés SHA-256",
      "Dashboard et statistiques",
    ],
    status: "En développement",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-28 dark:bg-slate-900/50 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600 dark:text-blue-400">
            Mon travail
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Projets sélectionnés
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            Quelques réalisations et expériences qui illustrent mon approche du
            développement et ma capacité à transformer des idées en applications
            concrètes.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group grid overflow-hidden rounded-4xl border border-slate-200 bg-slate-50 transition duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-slate-950/60 lg:grid-cols-2"
            >
              {/* VISUAL PREVIEW */}
              <div className="relative flex min-h-90 items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-violet-950 p-8 sm:p-12">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]" />

                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/20 blur-[90px]" />

                {/* MINI DASHBOARD MOCKUP */}
                <div className="relative w-full max-w-lg rotate-2 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/95 shadow-2xl transition duration-500 group-hover:rotate-0">
                  {/* MOCKUP HEADER */}
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <Gamepad2 size={18} />
                      </div>

                      <span className="text-sm font-bold text-white">
                        GameHub Manager
                      </span>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* MOCKUP BODY */}
                  <div className="grid grid-cols-[65px_1fr]">
                    {/* SIDEBAR */}
                    <div className="space-y-5 border-r border-white/10 bg-slate-900 p-3">
                      <div className="flex justify-center rounded-lg bg-blue-500/20 p-2 text-blue-400">
                        <Monitor size={18} />
                      </div>

                      <div className="flex justify-center text-slate-500">
                        <Gamepad2 size={17} />
                      </div>

                      <div className="flex justify-center text-slate-500">
                        <Database size={17} />
                      </div>

                      <div className="flex justify-center text-slate-500">
                        <Server size={17} />
                      </div>
                    </div>

                    {/* DASHBOARD CONTENT */}
                    <div className="space-y-4 p-4 sm:p-5">
                      <div>
                        <p className="text-[10px] text-slate-400">
                          Tableau de bord
                        </p>

                        <p className="mt-1 text-base font-bold text-white">
                          Vue d'ensemble
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Jeux", value: "Catalogue" },
                          { label: "Clients", value: "Gestion" },
                          { label: "Ventes", value: "Suivi" },
                          { label: "Paiements", value: "Contrôle" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-white/10 bg-white/5 p-3"
                          >
                            <p className="text-[10px] text-slate-400">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm font-bold text-white">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* MOCKUP CHART */}
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="mb-4 text-xs font-semibold text-slate-300">
                          Activité commerciale
                        </p>

                        <div className="flex h-16 items-end gap-2">
                          {[35, 55, 42, 75, 58, 90, 68, 100, 72, 85].map(
                            (height, index) => (
                              <div
                                key={index}
                                className="flex-1 rounded-t-sm bg-linear-to-t from-blue-700 to-violet-400"
                                style={{ height: `${height}%` }}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOATING LABEL */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  <Sparkles size={15} className="text-blue-400" />
                  Featured Project
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[2px] text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>

                  <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  {project.title}
                  <span className="text-blue-600 dark:text-blue-400">.</span>
                </h3>

                <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base">
                  {project.description}
                </p>

                {/* FEATURES */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Fonctionnalités principales
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <ShieldCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                        />

                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECHNOLOGIES */}
                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                    Stack technique
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CONTACT CTA */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Discuter de ce projet
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* FUTURE PROJECTS */}
        <div className="mt-12 rounded-3xl border border-dashed border-slate-300 p-8 text-center dark:border-white/15">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
            <Code2 size={27} />
          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
            D'autres projets arrivent...
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500 dark:text-slate-400">
            De nouvelles idées, de nouveaux défis et de nouvelles réalisations
            viendront enrichir progressivement ce portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
