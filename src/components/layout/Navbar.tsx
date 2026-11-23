import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight, Code2 } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Fermeture avec la touche Échap
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Fermer le menu lors du passage en mode desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        closeMenu();
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">
        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 sm:h-11 sm:w-11">
            <Code2 size={22} />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-sm font-bold tracking-tight text-slate-900 dark:text-white sm:text-base">
              KOM TAGNE{" "}
              <span className="text-blue-600 dark:text-blue-400">Alex.</span>
            </h1>

            <p className="text-[9px] font-medium uppercase tracking-[1.5px] text-slate-500 sm:text-[10px] sm:tracking-[2px]">
              Web & Mobile Developer
            </p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Activer le thème clair"
                : "Activer le thème sombre"
            }
            title="Changer de thème"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400 lg:flex"
          >
            Me contacter
            <ArrowUpRight size={16} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 dark:border-white/10 dark:bg-slate-950 lg:hidden ${
          menuOpen
            ? "max-h-112.5 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Me contacter
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
