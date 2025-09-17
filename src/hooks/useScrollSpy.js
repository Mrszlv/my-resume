import { useState, useEffect } from "react";

export default function useScrollSpy(ids = []) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(
        (e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        },
        { rootMargin: "-60% 0px -35% 0px" }
      );
      ids.forEach((id) => {
        const el = document.getElementById(id.replace("#", ""));
        if (el) obs.observe(el);
      });
    });
  }, [ids]);
  return active;
}
