import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";

import { useTranslation } from "react-i18next";

import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";

import s from "./MobileMenu.module.css";

const TRANSITION_MS = 250;

export default function MobileMenu({ links = [] }) {
  const { t } = useTranslation();

  const [mounted, setMounted] = useState(false); // чи портали вже можна
  const [rendered, setRendered] = useState(false); // елементи в DOM
  const [open, setOpen] = useState(false); // клас .open для анімації

  const sheetRef = useRef(null);
  const closeBtnRef = useRef(null);
  const openedAtRef = useRef(0); // guard від "подвійного" pointerdown

  useEffect(() => setMounted(true), []);

  const items = useMemo(
    () => links.map((l) => ({ href: l.href, label: t(l.key) })),
    [links, t]
  );

  const show = useCallback(() => {
    setRendered(true);
    requestAnimationFrame(() => {
      openedAtRef.current = performance.now();
      setOpen(true);
    });
  }, []);

  const hide = useCallback(() => setOpen(false), []);

  // Після завершення transition розмонтуємо
  const onSheetTransitionEnd = useCallback(() => {
    if (!open) setRendered(false);
  }, [open]);

  // Закриття по кліку на пункт меню
  const onNavClick = useCallback(
    (e) => {
      if (e.target.closest("a")) hide();
    },
    [hide]
  );

  // ESC + фокус-трап + блокування скролу тіла
  useEffect(() => {
    if (!rendered) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () => {
      if (!sheetRef.current) return [];
      return Array.from(
        sheetRef.current.querySelectorAll(
          'a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));
    };

    const setInitialFocus = () => {
      if (closeBtnRef.current) closeBtnRef.current.focus();
      else {
        const f = focusables();
        if (f[0]) f[0].focus();
      }
    };
    const raf = requestAnimationFrame(setInitialFocus);

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        hide();
        return;
      }
      if (e.key === "Tab") {
        const f = focusables();
        if (!f.length) return;
        const [first] = f,
          last = f[f.length - 1],
          active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || !sheetRef.current.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last || !sheetRef.current.contains(active)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [rendered, hide]);

  // Закриття поза меню (по всьому документу)
  useEffect(() => {
    if (!rendered) return;
    const onDocPointerDown = (e) => {
      // ігноруємо подію, якою відкривали
      if (performance.now() - openedAtRef.current < 200) return;
      if (sheetRef.current && !sheetRef.current.contains(e.target)) hide();
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [rendered, hide]);

  return (
    <>
      <button aria-label="Open menu" className={s.burger} onClick={show}>
        <RxHamburgerMenu />
      </button>

      {mounted &&
        rendered &&
        createPortal(
          <div className={`${s.backdrop} ${open ? s.open : ""}`}>
            <nav
              ref={sheetRef}
              className={`${s.sheet} ${open ? s.open : ""}`}
              aria-label="mobile"
              onTransitionEnd={onSheetTransitionEnd}
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
            >
              <div className={s.sheetHeader}>
                <strong className={s.strong}>{t("modal.menu")}</strong>

                <button
                  ref={closeBtnRef}
                  className={s.close}
                  onClick={hide}
                  aria-label="Close menu"
                >
                  <RiCloseLargeFill />
                </button>
              </div>

              <ul className={s.list} onClick={onNavClick}>
                {items.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
