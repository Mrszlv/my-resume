import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import s from "./App.module.css";

import Header from "./components/Header/Header";
import ScrollTop from "./components/ScrollTop/ScrollTop";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = t("langCode");
  }, [t]);

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
