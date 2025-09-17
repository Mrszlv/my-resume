import s from "./Button.module.css";

import clsx from "clsx";

const Button = ({
  as: Tag = "button",
  variant = "primary",
  className,
  ...props
}) => {
  return <Tag className={clsx(s.btn, s[variant], className)} {...props} />;
};

export default Button;
