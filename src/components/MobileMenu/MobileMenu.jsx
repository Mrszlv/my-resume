import { useState } from "react";

import { useTranslation } from "react-i18next";

import s from "./MobileMenu.module.css";

const MobileMenu = ({ links }) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <button
        aria-label="Open menu"
        className={s.burger}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      {open && (
        <div className={s.backdrop} onClick={() => setOpen(false)}>
          <nav
            className={s.sheet}
            onClick={(e) => e.stopPropagation()}
            aria-label="mobile"
          >
            <div className={s.sheetHeader}>
              <strong>Menu</strong>
              <button className={s.close} onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>
            <ul className={s.list}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
