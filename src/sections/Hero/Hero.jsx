import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import { useTranslation } from "react-i18next";

import s from "./Hero.module.css";

const cvHref = new URL("/cv.pdf", import.meta.url);
const base = import.meta.env.BASE_URL;
const img = (p) => `${base}img/${p}`;

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section id="hero">
      <div className={s.hero}>
        <picture>
          {/* AVIF першочергово */}
          <source
            type="image/avif"
            srcSet={[
              `${img("avatar-128.avif")} 128w`,
              `${img("avatar-256.avif")} 256w`,
              `${img("avatar-512.avif")} 512w`,
            ].join(", ")}
            sizes="(min-width: 960px) 160px, 118px"
          />
          {/* WEBP як фолбек 1 */}
          <source
            type="image/webp"
            srcSet={[
              `${img("avatar-128.webp")} 128w`,
              `${img("avatar-256.webp")} 256w`,
              `${img("avatar-512.webp")} 512w`,
            ].join(", ")}
            sizes="(min-width: 960px) 160px, 118px"
          />
          {/* JPG як фолбек 2 */}
          <img
            src={img("avatar-256.jpg")}
            srcSet={[
              `${img("avatar-128.jpg")} 128w`,
              `${img("avatar-256.jpg")} 256w`,
              `${img("avatar-512.jpg")} 512w`,
            ].join(", ")}
            sizes="(min-width: 960px) 160px, 118px"
            width="118"
            height="157" // допомагає CLS
            alt="My portrait"
            className={s.avatar}
            decoding="async"
            fetchpriority="high" // це LCP → хай вантажиться пріоритетно
            loading="eager"
          />
        </picture>

        <div className={s.texts}>
          <h1 className={s.title} data-aos="fade-left" data-aos-delay="300">
            {t("hero.title")}
          </h1>

          <p className={s.subtitle} data-aos="fade-left" data-aos-delay="350">
            {t("hero.subtitle")}
          </p>

          <div className={s.actions} data-aos="fade-up" data-aos-delay="400">
            <Button as="a" href={cvHref} target="_blank" dowload="true">
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
