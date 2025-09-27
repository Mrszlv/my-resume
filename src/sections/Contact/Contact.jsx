import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { useForm, ValidationError } from "@formspree/react";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

import s from "./Contact.module.css";

const FORM_ID = "xkgqwkgw";

const Contact = () => {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm(FORM_ID);

  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      iziToast.success({
        title: t("contact.iziTitle"),
        message: t("contact.success"),
        position: "topCenter",
        timeout: 3500,
        progressBar: true,
      });
      formRef.current?.reset();
    }
  }, [state.succeeded, t]);

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      iziToast.error({
        title: t("contact.iziError"),
        message: t("contact.error"),
        position: "topCenter",
        timeout: 4000,
        progressBar: true,
      });
    }
  }, [state.errors, t]);

  return (
    <div data-aos="fade-up" data-aos-delay="0">
      <Section id="contact" title={t("contact.title")} lead={t("contact.lead")}>
        <form
          ref={formRef}
          className={s.form}
          onSubmit={handleSubmit}
          noValidate
        >
          {/*honeypot antispam */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <label>
            {t("contact.name")}
            <input
              className={s.contactInfo}
              name="name"
              required
              placeholder="John Doe"
            />
          </label>

          <label>
            {t("contact.email")}
            <input
              className={s.contactInfo}
              type="email"
              name="email"
              required
              placeholder="john@mail.com"
            />
          </label>

          <label className={s.colFull}>
            {t("contact.message")}
            <textarea
              className={s.contactInfo}
              name="message"
              rows="5"
              required
              placeholder="Hi! Let's work together."
            />
          </label>

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button as="button" type="submit" disabled={state.submitting}>
            {state.submitting ? t("contact.sended") : t("contact.send")}
          </Button>
        </form>

        <div className={s.links} data-aos="fade-right" data-aos-delay="300">
          <a className={s.link} href="mailto:miroszlav.popovics@gmail.com">
            <MdOutlineAlternateEmail className={s.icon} />
          </a>

          <a className={s.link} href="tel:+380999111006">
            <MdLocalPhone className={s.icon} />
          </a>

          <a
            className={s.link}
            href="https://t.me/@miroszlavpopovics"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane className={s.icon} />
          </a>

          <a
            className={s.link}
            href="https://github.com/Mrszlv?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={s.icon} />
          </a>

          <a
            className={s.link}
            href="https://linkedin.com/in/miroslav-popovich"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className={s.icon} />
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
