import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import s from "./Header.module.css";

import MobileMenu from "../MobileMenu/MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import { FaReact } from "react-icons/fa";

const LINKS = [
  { href: "#hero", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#projects", key: "nav.projects" },
  { href: "#experience", key: "nav.experience" },
  { href: "#education", key: "nav.education" },
  { href: "#contact", key: "nav.contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={`container ${s.inner}`}>
        <a href="#hero" className={s.logo}>
          <FaReact className={s.logo} />
        </a>

        <nav className={s.navDesktop} aria-label="primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className={s.actions}>
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileMenu links={LINKS} />
        </div>
      </div>
    </header>
  );
}
