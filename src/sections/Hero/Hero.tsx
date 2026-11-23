import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  //   Github,
  //   Linkedin,
  //   UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../assets/images/profile.jpeg";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Flutter",
  "PHP",
  "MySQL",
  "Tailwind CSS",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pb-16 pt-32 dark:bg-slate-950 lg:px-10"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="order-2 space-y-8 lg:order-1">
          {/* AVAILABILITY */}
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
              DÉVELOPPEUR WEB & MOBILE
            </span>
          </div>

          {/* INTRODUCTION */}
          <div className="space-y-5">
            <p className="font-medium text-slate-500 dark:text-slate-400">
              Bonjour, je suis
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl xl:text-7xl">
              KOM TAGNE
              <span className="block bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Alex.
              </span>
            </h1>

            <h2 className="max-w-xl text-xl font-semibold leading-relaxed text-slate-700 dark:text-slate-200 sm:text-2xl">
              Je conçois des expériences digitales
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                modernes, utiles et performantes.
              </span>
            </h2>

            <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
              Passionné par le développement web et mobile, je transforme des
              idées en applications intuitives, élégantes et adaptées aux
              besoins des utilisateurs.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Découvrir mes projets
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/15 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              Me contacter
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-5 pt-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Retrouvez-moi
            </span>

            <a
              href="https://github.com/Choco-Alex"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/alex-brondon-kom-tagne-7352b7240"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
            >
              <FaLinkedin size={21} />
            </a>
          </div>

          {/* TECHNOLOGIES */}
          <div className="border-t border-slate-200 pt-6 dark:border-white/10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Technologies que j'utilise
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - PHOTO */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-md">
            {/* DECORATIVE ELEMENTS */}
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-blue-500/20" />

            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full border border-violet-500/20" />

            {/* PHOTO CONTAINER */}
            <div className="relative aspect-4/5) overflow-hidden rounded-2 border border-slate-200 bg-linear-to-br from-blue-100 via-slate-100 to-violet-100 shadow-2xl shadow-blue-950/10 dark:border-white/10">
              <img
                src={profile}
                alt="KOM TAGNE Alex - Développeur Web & Mobile"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-7 -right-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-slate-900 sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Code2 size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Creative Developer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Web & Mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        aria-label="Découvrir la suite"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-400 transition hover:text-blue-600 lg:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}

export default Hero;
