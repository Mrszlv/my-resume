import s from "./Section.module.css";

const Section = ({ id, title, lead, children }) => {
  return (
    <section id={id} className={s.section}>
      <div className="container">
        {title && <h2 className={s.title}>{title}</h2>}
        {lead && <p className={s.lead}>{lead}</p>}
        <div className={s.body}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
