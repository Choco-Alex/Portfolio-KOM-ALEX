import {
  Code2,
  Lightbulb,
  Rocket,
  Target,
  GraduationCap,
  MonitorSmartphone,
} from "lucide-react";

const qualities = [
  {
    icon: Code2,
    title: "Code de qualité",
    description: "Créer des solutions structurées, maintenables et évolutives.",
  },
  {
    icon: Lightbulb,
    title: "Créativité",
    description: "Transformer les idées en expériences digitales intuitives.",
  },
  {
    icon: Target,
    title: "Orienté solutions",
    description:
      "Comprendre les besoins avant de concevoir une solution adaptée.",
  },
  {
    icon: Rocket,
    title: "Évolution continue",
    description: "Apprendre, expérimenter et progresser constamment.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-28 dark:bg-slate-900/30 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600 dark:text-blue-400">
            Découvrez mon univers
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            À propos de{" "}
            <span className="text-blue-600 dark:text-blue-400">moi.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-black">
            Au-delà du code, une passion pour la création, l'innovation et les
            solutions numériques.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* LEFT: PRESENTATION */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <MonitorSmartphone size={18} />
              Web & Mobile Development
            </div>

            <h3 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white sm:text-4xl">
              Concevoir aujourd'hui
              <span className="block text-blue-600 dark:text-blue-400">
                les expériences de demain.
              </span>
            </h3>

            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-700">
              <p>
                Je suis{" "}
                <strong className="text-slate-900 dark:text-white">
                  KOM TAGNE Alex
                </strong>
                , développeur Web & Mobile passionné par la conception et le
                développement d'applications numériques modernes.
              </p>

              <p>
                Je m'intéresse particulièrement à l'écosystème JavaScript,
                notamment React et TypeScript, ainsi qu'au développement backend
                avec PHP et aux bases de données.
              </p>

              <p>
                Mon parcours m'amène également à explorer l'UI/UX, l'analyse
                UML, les réseaux informatiques et l'Ethical Hacking afin de
                développer une vision plus complète du monde informatique.
              </p>

              <p>
                Mon objectif est de concevoir des applications qui associent
                qualité technique, simplicité d'utilisation et véritable valeur
                pour leurs utilisateurs.
              </p>
            </div>

            {/* LEARNING CARD */}
            <div className="flex gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <GraduationCap size={25} />
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Toujours en apprentissage
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-700">
                  Chaque nouveau projet est une occasion d'apprendre,
                  d'améliorer mes compétences et de repousser mes limites.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: VALUES */}
          <div className="grid gap-5 sm:grid-cols-2">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;

              return (
                <div
                  key={quality.title}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-slate-950/60"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white dark:text-blue-400">
                    <Icon size={27} />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-slate-400">
                    0{index + 1}
                  </span>

                  <h4 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                    {quality.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {quality.description}
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

export default About;
