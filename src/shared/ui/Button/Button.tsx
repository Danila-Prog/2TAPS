import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton extends ComponentProps<"button"> {
  children: ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  variantColor: "primaryOutline" | "accentOutline" | "violet" | "white";
  className?: string;
}

export const Button = ({
  children,
  size,
  variantColor,
  className,
  ...buttonProps
}: IButton) => {
  const SIZE = {
    sm: styles.buttonSM,
    md: styles.buttonMD,
    lg: styles.buttonLG,
    xl: styles.buttonXL,
  }[size];

  const VARIANT_COLOR = {
    violet: styles.violet,
    white: styles.white,
    primaryOutline: styles.primaryOutline,
    accentOutline: styles.accentOutline,
  }[variantColor];

  return (
    <button
      className={`${styles.button} ${SIZE} ${VARIANT_COLOR} ${className}`}
      {...buttonProps}
    >
      <span className={styles.btnText}>{children}</span>
    </button>
  );
};
