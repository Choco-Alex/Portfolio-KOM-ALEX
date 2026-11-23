import {
  ArrowUpRight,
  Code2,
  // Database,
  // Gamepad2,
  // Monitor,
  ShieldCheck,
  // Server,
  Sparkles,
} from "lucide-react";
// import gamehubImage from "../assets/images/projects/gamehub.png";
import gamehubImage from "../../assets/images/projects/gamehub.png";
import scholarImage from "../../assets/images/projects/scholar.png";
import proxserviceImage from "../../assets/images/projects/proxiimage.png";
import sigifImage from "../../assets/images/projects/sigif.png";
import consultingImage from "../../assets/images/projects/3mc.png";

const projects = [
  {
    id: 1,
    title: "GameHub Manager",
    image: gamehubImage,
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
    status: "developpé",
  },
  {
    id: 2,
    title: "Scholar",
    image: scholarImage,
    category: "Application Web de gestion d'établissements",
    description:
      "Une plateforme de gestion d'établissements afin de pouvoir payer les frais de scolarité des élèves et faire la gestion des élèves et enseignants.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    features: [
      "Gestion des élèves",
      "Gestion des enseignants",
      "Paiement des frais de scolarité",
      "Dashboard et statistiques",
    ],
    status: "En developpement ",
  },
  {
    id: 3,
    title: "ProxiService",
    image: proxserviceImage,
    category:
      "Application Web de mise en relation Client et prestataires de services",
    description:
      "Une plateforme de mise en relation entre clients et prestataires de services.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    features: [
      "Demande de service",
      "Proposition et Recherche de prestataires ",
      "Suivi du service et paiement des commissions",
      "Dashboard et statistiques",
    ],
    status: "En developpement ",
  },
  {
    id: 4,
    title: "SIGIF",
    image: sigifImage,
    category: "Application web et mobile de gestion",
    description:
      "Une application ou Sytème de gestion des informations forestières.",
    technologies: ["Flutter", "Java"],
    features: [
      "Gestion des informations forestières",
      "Suivi des activités et des projets",
      "Analyse et visualisation des données",
      "Dashboard et statistiques",
    ],
    status: "En production ",
  },
  {
    id: 5,
    title: "3M Consulting",
    image: consultingImage,
    category: "Application web et mobile de gestion",
    description:
      "Une plateforme de recherche d'emploi et de recrutement pour les entreprises et les candidats.",
    technologies: ["Flutter", "PHP", "MySQL"],
    features: [
      "Recherche d'emploi et de candidats",
      "Gestion des offres et des candidatures",
      "Suivi des entretiens et des recrutements",
      "Dashboard et statistiques",
    ],
    status: "Developpé",
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

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-700">
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
              <div className="group/image relative min-h-90 overflow-hidden bg-slate-900">
                {/* Image du projet */}
                <img
                  src={project.image}
                  alt={`Aperçu de ${project.title}`}
                  className="absolute inset-0 h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10" />

                {/* Nom du projet */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <Sparkles size={15} className="text-blue-400" />
                  {project.title}
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

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500 dark:text-slate-700">
            De nouvelles idées, de nouveaux défis et de nouvelles réalisations
            viendront enrichir progressivement ce portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
