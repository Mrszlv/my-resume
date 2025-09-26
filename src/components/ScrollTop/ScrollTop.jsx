import { useState, useEffect } from "react";

import s from "./ScrollTop.module.css";

import { BsChevronUp } from "react-icons/bs";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();

    addEventListener("scroll", onScroll);

    return () => removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className={s.btn}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      {" "}
      <BsChevronUp className={s.top} />{" "}
    </button>
  );
};

export default ScrollTop;
