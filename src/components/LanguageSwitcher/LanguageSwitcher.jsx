import { useTranslation } from "react-i18next";

import s from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggle = () =>
    i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");

  return (
    <>
      <button className={s.lang} onClick={toggle} aria-label="Switch language">
        {i18n.language === "uk" ? "UA" : "EN"}
      </button>
    </>
  );
};

export default LanguageSwitcher;
