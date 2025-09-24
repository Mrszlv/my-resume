// src/hooks/useScrollSpy.js
import { useEffect, useRef, useState } from "react";

/**
 * Визначає активну секцію за поточним скролом.
 * @param {string[]} ids - масив "#id" секцій у порядку зверху вниз
 * @param {number} offset - висота хедера (щоб секція вважалась активною, коли її топ вище за scrollY+offset)
 */
export default function useScrollSpy(ids = [], offset = 84) {
  const [active, setActive] = useState(ids[0] || null);
  const positionsRef = useRef([]); // [{ id, top }]
  const tickingRef = useRef(false);

  const computePositions = () => {
    positionsRef.current = ids.map((hash) => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      return {
        hash,
        top: el
          ? Math.floor(el.getBoundingClientRect().top + window.scrollY)
          : Infinity,
        height: el ? el.offsetHeight : 0,
      };
    });
  };

  const onScroll = () => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      const y = window.scrollY + offset + 1; // +1 щоб одразу підсвічувати, коли верх досягнуто
      const list = positionsRef.current
        .filter((p) => Number.isFinite(p.top))
        .sort((a, b) => a.top - b.top);

      // якщо дійшли до низу сторінки — активна остання
      const nearBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        Math.floor(document.body.scrollHeight);

      let current = list[0]?.hash || null;

      for (let i = 0; i < list.length; i++) {
        if (y >= list[i].top) current = list[i].hash;
        else break;
      }

      if (nearBottom && list.length) current = list[list.length - 1].hash;

      setActive(current);
      tickingRef.current = false;
    });
  };

  useEffect(() => {
    computePositions();
    onScroll(); // ініціалізація

    // Перерахунок позицій при resize / змінах контенту (зображення тощо)
    const onResize = () => {
      computePositions();
      onScroll();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Перерахувати після завантаження зображень
    const imgs = Array.from(document.images || []);
    let loaded = 0;
    imgs.forEach((img) => {
      if (img.complete) {
        loaded++;
        if (loaded === imgs.length) onResize();
      } else img.addEventListener("load", onResize, { once: true });
    });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), offset]);

  // Якщо є hash у URL — встановити активний після першого підрахунку
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && ids.includes(hash)) setActive(hash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
