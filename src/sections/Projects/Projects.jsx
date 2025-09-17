import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import { useTranslation } from "react-i18next";

import s from "./Projects.module.css";

const DATA = [
  {
    title: "Hotel Website",
    desc: "React + Vite, i18n, gallery, booking.",
    link: "https://slavutych-zakarpattia.com.ua/",
    github: "https://github.com/Mrszlv/slavutych-hotel-site",
  },
  {
    title: "Super Match",
    desc: "HTML5, CSS3, JS + Vite",
    link: "https://effortless-sable-63651b.netlify.app/",
    github: "https://github.com/NikitinIhor/Super-Match",
  },
  {
    title: "Portfolio",
    desc: "HTML5, CSS3, JavaScript, accordion-js, axios, izitoast, swiper",
    link: "https://olhazhynkina.github.io/speed-js-team-project/",
    github: "https://github.com/OlhaZhynkina/speed-js-team-project",
  },
  {
    title: "Contacts Book",
    desc: "HTML5, CSS3(module), React, Redux toolkit, Axios, Formik, Yup, mocapi.io",
    link: "https://goit-react-hw-08-three-ivory-15.vercel.app/",
    github: "https://github.com/Mrszlv/goit-react-hw-08",
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
