import type { ComponentProps } from "react";

import styles from "./button.module.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "ghost";
};

export function Button({
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.root} ${styles[variant]}`}
      {...props}
    />
  );
}
