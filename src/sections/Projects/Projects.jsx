import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import { useTranslation } from "react-i18next";

import s from "./Projects.module.css";

const DATA = [
  {
    title: "Hotel Website",
    desc: "React + Vite, i18n, gallery, booking.",
    link: "https://example.com",
    github: "https://github.com/you/hotel",
  },
  {
    title: "Dropshipping Store",
    desc: "React, LiqPay integration.",
    link: "https://example.com",
    github: "https://github.com/you/shop",
  },
  {
    title: "Portfolio",
    desc: "Minimalist portfolio with dark theme.",
    link: "https://example.com",
    github: "https://github.com/you/portfolio",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="projects"
      title={t("projects.title")}
      lead={t("projects.lead")}
    >
      <div className={s.grid}>
        {DATA.map((p) => (
          <article key={p.title} className={s.card}>
            <h3>{p.title}</h3>
            <p className={s.desc}>{p.desc}</p>
            <div className={s.row}>
              <Button as="a" href={p.link} target="_blank" rel="noreferrer">
                Demo
              </Button>
              <Button
                as="a"
                variant="secondary"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
