import Section from "../../components/Section/Section";

import { useTranslation } from "react-i18next";

import s from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t("about.title")} lead={t("about.lead")}>
      <div className={s.grid}>
        <p>{t("about.text")}</p>
      </div>
    </Section>
  );
};

export default About;
