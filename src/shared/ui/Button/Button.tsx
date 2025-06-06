import { ComponentProps } from "react";
import styles from "./Button.module.scss";
import Image from "next/image";
import button_arrow_down from "/public/svg/button_arrow_down.svg";

interface IButton extends ComponentProps<"button"> {
  children?: string;
  typeChildren?: "text" | "image";
  size: "sm" | "md" | "lg" | "xl" | "image";
  variantColor:
    | "primaryOutline"
    | "accentOutline"
    | "lightViolet"
    | "darkViolet"
    | "white";
  className?: string;
}

export const Button = ({
  typeChildren = "text",
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
    image: styles.buttonImage,
  }[size];

  const VARIANT_COLOR = {
    lightViolet: styles.lightViolet,
    darkViolet: styles.darkViolet,
    white: styles.white,
    primaryOutline: styles.primaryOutline,
    accentOutline: styles.accentOutline,
  }[variantColor];

  return (
    <button
      className={`${styles.button} ${SIZE} ${VARIANT_COLOR} ${className}`}
      {...buttonProps}
    >
      {typeChildren === "text" ? (
        <span className={styles.btnText}>{children}</span>
      ) : (
        <Image src={button_arrow_down} alt="button arrow down" />
      )}
    </button>
  );
};
