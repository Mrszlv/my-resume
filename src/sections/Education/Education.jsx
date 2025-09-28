import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import { useTranslation } from "react-i18next";

import s from "./Education.module.css";

const certHref = new URL("/docs/certificate.pdf", import.meta.url);

const Education = () => {
  const { t } = useTranslation();

  const EDU = [
    {
      place: `${t("education.universities")}`,
      program: `${t("education.faculty")}`,
      period: "2005 — 2011",
    },

    {
      place: `${t("education.place")}`,
      program: `${t("education.program")}`,
      period: "2024 — 2025",
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="0">
      <Section
        id="education"
        title={t("education.title")}
        lead={t("education.lead")}
      >
        <div className={s.list}>
          {EDU.map((e) => (
            <article key={e.place} className={s.item}>
              <h3>{e.program}</h3>
              <div className={s.meta}>
                <span>{e.place}</span>
                <span className={s.period}>{e.period}</span>
              </div>
            </article>
          ))}
          <Button
            className={s.btn}
            as="a"
            href={certHref}
            target="_blank"
            dowload="true"
          >
            {t("education.certificate")}
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Education;
