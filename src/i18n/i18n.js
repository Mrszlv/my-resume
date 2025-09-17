// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uk from "./locales/uk/translation.json";
import en from "./locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: uk },
      en: { translation: en },
    },
    fallbackLng: "en",
    supportedLngs: ["uk", "en"],
    nonExplicitSupportedLngs: true, // щоб uk-UA залітало як uk
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    // debug: true, // увімкни під час діагностики — логи будуть у консолі
  });

export default i18n;
