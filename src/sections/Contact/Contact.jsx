import Section from "../../components/Section/Section";
import s from "./Contact.module.css";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");
  const onSubmit = (e) => {
    e.preventDefault();
    // Тут можна підключити EmailJS або свій бекенд
    setStatus("success");
    e.target.reset();
    setTimeout(() => setStatus("idle"), 3000);
  };
  return (
    <Section id="contact" title={t("contact.title")} lead={t("contact.lead")}>
      <form className={s.form} onSubmit={onSubmit}>
        <label>
          {t("contact.name")}
          <input name="name" required placeholder="John Doe" />
        </label>
        <label>
          {t("contact.email")}
          <input
            type="email"
            name="email"
            required
            placeholder="john@mail.com"
          />
        </label>
        <label className={s.colFull}>
          {t("contact.message")}
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Hi! Let's work together."
          />
        </label>
        <Button as="button" type="submit">
          {t("contact.send")}
        </Button>
        {status === "success" && <span className={s.ok}>✓ Sent</span>}
      </form>
      <div className={s.links}>
        <a href="mailto:you@mail.com">you@mail.com</a>
        <a href="https://t.me/yourhandle" target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a href="https://github.com/your" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
