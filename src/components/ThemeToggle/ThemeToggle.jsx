import { useState, useEffect } from "react";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

import s from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div data-aos="fade-left" data-aos-delay="600">
      <button
        className={s.toggle}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <CiDark className={s.icon} />
        ) : (
          <CiLight className={s.icon} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
