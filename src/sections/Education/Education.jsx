import Section from "../../components/Section/Section";

import { useTranslation } from "react-i18next";

import s from "./Education.module.css";

const EDU = [
  {
    place: "National University",
    program: "Computer Science",
    period: "2017 — 2021",
  },
  { place: "Frontend Courses", program: "React, JS", period: "2022" },
];

const Education = () => {
  const { t } = useTranslation();

  return (
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
      </div>
    </Section>
  );
};

export default Education;
