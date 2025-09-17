import { useState, useEffect } from "react";

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
    <>
      <button
        className={s.toggle}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </>
  );
};

export default ThemeToggle;
