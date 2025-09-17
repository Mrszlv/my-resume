import Section from "../../components/Section/Section";

import { useTranslation } from "react-i18next";

import s from "./Experience.module.css";

const JOBS = [
  {
    company: "Awesome Co",
    role: "Frontend Developer",
    period: "2023 — Present",
    points: ["React, Vite, i18n", "UI Components, A11y"],
  },
  {
    company: "Dev Studio",
    role: "Junior Frontend",
    period: "2021 — 2023",
    points: ["Landing pages", "Responsive design"],
  },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="experience"
      title={t("experience.title")}
      lead={t("experience.lead")}
    >
      <div className={s.list}>
        {JOBS.map((job) => (
          <div key={job.company} className={s.item}>
            <div className={s.head}>
              <h3>{job.role}</h3>
              <span className={s.company}>{job.company}</span>
              <span className={s.perid}>{job.period}</span>
            </div>

            <ul className={s.points}>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
