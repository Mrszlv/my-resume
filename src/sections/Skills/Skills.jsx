import Section from "../../components/Section/Section";

import { useTranslation } from "react-i18next";

import s from "./Skills.module.css";

const SKILLS = [
  "HTML5",
  "CSS3",
  "CSS Modules",
  "JavaScript",
  "React.js",
  "Redux",
  "Vite",
  "i18next",
  "Axios",
  "Node.js",
  "Express",
  "Git",
  "Vercel",
];

const Skills = () => {
  const { t } = useTranslation();
  return (
    <Section id="skills" title={t("skills.title")} lead={t("skills.lead")}>
      <ul className={s.list}>
        {SKILLS.map((skill) => (
          <li key={skill} className={s.item}>
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
