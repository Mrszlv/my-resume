import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import { useTranslation } from "react-i18next";

import s from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section id="hero">
      <div className={s.hero}>
        <img src="/public/Avatar.jpg" alt="Avatar" className={s.avatar} />
        <div className={s.texts}>
          <h1 className={s.title}>{t("hero.title")}</h1>
          <p className={s.subtitle}>{t("hero.subtitle")}</p>
          <div className={s.actions}>
            <Button as="a" href="/public/cv.pdf" target="_blank">
              {t("hero.cta")}
            </Button>
            <Button as="a" variant="secondary" href="#contact">
              {t("hero.contact")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
