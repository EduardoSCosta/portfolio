import type { ComponentProps } from "react";

import styles from "./button.module.css";

type BaseProps = {
  variant?: "primary" | "ghost";
  size?: "default" | "compact";
  className?: string;
};

type ButtonAsButton = BaseProps &
  ComponentProps<"button"> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  ComponentProps<"a"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function getClassName(
  variant: "primary" | "ghost",
  size: "default" | "compact",
  className?: string,
) {
  return [styles.root, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const classes = getClassName(variant, size, className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;

    return <a href={href} className={classes} {...anchorProps} />;
  }

  const buttonProps = props as ButtonAsButton;
  const { type = "button", ...rest } = buttonProps;

  return <button type={type} className={classes} {...rest} />;
}
