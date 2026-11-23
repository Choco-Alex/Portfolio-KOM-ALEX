import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Reveal from "./components/ui/Reveal";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <main className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal delay={0.1}>
        <Skills />
      </Reveal>

      <Reveal delay={0.1}>
        <Projects />
      </Reveal>

      <Reveal delay={0.1}>
        <Experience />
      </Reveal>

      <Reveal delay={0.1}>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}

export default App;
