import Image from "next/image";
import logo from "/public/icons/logo.png";
import styles from "./Logo.module.scss";

type TLogo = { additionalStyle?: string };

export const Logo = ({ additionalStyle }: TLogo) => {
  return (
    <Image
      src={logo}
      alt="logo"
      priority={true}
      className={`${styles.logo} ${additionalStyle}`}
    />
  );
};
