import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import useScrollSpy from "../../hooks/useScrollSpy";
import s from "./Header.module.css";

import MobileMenu from "../MobileMenu/MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../../assets/logo.svg";

const LINKS = [
  { href: "#hero", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#projects", key: "nav.projects" },
  // { href: "#experience", key: "nav.experience" },
  { href: "#education", key: "nav.education" },
  { href: "#contact", key: "nav.contact" },
];

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const [offset, setOffset] = useState(84); // дефолт

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Визначаємо фактичну висоту хедера (щоб підсвітка була «в точку»)
  useEffect(() => {
    const measure = () => {
      const h = headerRef.current?.getBoundingClientRect().height || 64;
      setOffset(Math.round(h));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--header-h", `${offset}px`);
  }, [offset]);

  const ids = useMemo(() => LINKS.map((l) => l.href), []);
  const active = useScrollSpy(ids, offset);

  return (
    <header
      ref={headerRef}
      className={clsx(s.header, { [s.scrolled]: scrolled })}
    >
      <div className={clsx("container", s.inner)}>
        <a href="#hero" className={s.logo}>
          <img src={Logo} alt="logo" />
        </a>

        <nav className={s.navDesktop} aria-label="primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={clsx(s.navLink, {
                [s.navLinkActive]: active === l.href,
              })}
              aria-current={active === l.href ? "page" : undefined}
            >
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
};

export default Header;
