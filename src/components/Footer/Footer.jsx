import Logo from "../../assets/logo-2.svg";

import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerInner}`}>
        <img className={s.logo} src={Logo} alt="logo" />
        <div className={s.copy}>
          © {new Date().getFullYear()} Miroszlav Popovics
        </div>
        <div className={s.geo}>
          📍 <span id="geo">Ukraine, Uzhhorod</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
