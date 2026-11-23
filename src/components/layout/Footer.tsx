import {
  // Github,
  //  Linkedin,
  ArrowUp,
  Code2,
  Heart,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-10 dark:border-white/10 dark:bg-slate-950 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* LOGO */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              KOM TAGNE
              <span className="text-blue-600 dark:text-blue-400"> Alex.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Développeur Web & Mobile
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#home" className="transition hover:text-blue-600">
              Accueil
            </a>
            <a href="#about" className="transition hover:text-blue-600">
              À propos
            </a>
            <a href="#skills" className="transition hover:text-blue-600">
              Compétences
            </a>
            <a href="#projects" className="transition hover:text-blue-600">
              Projets
            </a>
            <a href="#experience" className="transition hover:text-blue-600">
              Parcours
            </a>
            <a href="#contact" className="transition hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="#home"
              aria-label="Retour en haut"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>

        <div className="my-8 h-px bg-slate-200 dark:bg-white/10" />

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 dark:text-slate-400 sm:flex-row">
          <p>© {currentYear} KOM TAGNE Alex. Tous droits réservés.</p>

          <p className="flex items-center gap-1.5">
            Conçu avec
            <Heart size={13} className="fill-red-500 text-red-500" />
            et
            <Code2 size={14} className="text-blue-600 dark:text-blue-400" />
            par KOM TAGNE Alex
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
