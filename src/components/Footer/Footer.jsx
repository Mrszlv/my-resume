import { useTranslation } from "react-i18next";

import Logo from "../../assets/logo-2.svg";

import { PiMapPinAreaLight } from "react-icons/pi";

import s from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerInner}`}>
        <img className={s.logo} src={Logo} alt="logo" />
        <div className={s.copy}>
          © {new Date().getFullYear()} {t("footer.text")}
        </div>
        <div className={s.geo}>
          <PiMapPinAreaLight className={s.icon} />{" "}
          <span id="geo">{t("footer.geo")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
