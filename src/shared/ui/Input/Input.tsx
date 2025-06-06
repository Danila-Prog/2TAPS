import { ComponentProps } from "react";
import styles from "./Input.module.scss";

interface IInput extends ComponentProps<"input"> {
  mainStyle?: "radio" | "default";
  additionalStyle?: string;
  label?: boolean;
  labelName?: string;
}

export const Input = ({
  mainStyle = "default",
  additionalStyle,
  label = false,
  labelName,
  type,
  id,
  ...inputProps
}: IInput) => {
  return (
    <div className={type === "radio" ? styles.containerInput : ""}>
      <input
        id={id}
        required
        type={type}
        className={`${
          mainStyle === "default" ? styles.customInput : styles.inputRadio
        } ${additionalStyle}`}
        {...inputProps}
      />

      {label && (
        <label htmlFor={id} className={styles.labelInput}>
          {labelName}
        </label>
      )}
    </div>
  );
};
