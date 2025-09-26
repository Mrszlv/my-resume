import Section from "../../components/Section/Section";
import { useMemo } from "react";
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
  const LOOP = useMemo(() => [...SKILLS, ...SKILLS], []);

  return (
    <div data-aos="fade-up" data-aos-delay="0">
      <Section id="skills" title={t("skills.title")} lead={t("skills.lead")}>
        <div className={s.scroller} aria-hidden="true">
          <ul className={s.track}>
            {LOOP.map((skill, i) => (
              <li key={`${skill}-${i}`} className={s.item}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default Skills;
