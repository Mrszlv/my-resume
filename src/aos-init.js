import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      offset: 80,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    setTimeout(() => AOS.refresh(), 100);

    return () => {};
  }, []);
}
