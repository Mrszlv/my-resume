import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import { useTranslation } from "react-i18next";

import s from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section id="hero">
      <div className={s.hero}>
        <img
          src="/Avatar.jpg"
          alt="Avatar"
          className={s.avatar}
          data-aos="zoom-in"
          data-aos-delay="500"
        />

        <div className={s.texts}>
          <h1 className={s.title} data-aos="fade-left" data-aos-delay="300">
            {t("hero.title")}
          </h1>

          <p className={s.subtitle} data-aos="fade-left" data-aos-delay="350">
            {t("hero.subtitle")}
          </p>

          <div className={s.actions} data-aos="fade-up" data-aos-delay="400">
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
