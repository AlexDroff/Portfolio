import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
