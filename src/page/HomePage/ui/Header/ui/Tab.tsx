import Link from "next/link";
import styles from "./Tab.module.scss";

interface ITab {
  hrefLink: string;
  nameTab: string;
}

export const Tab = ({ hrefLink, nameTab }: ITab) => {
  return (
    <li className={styles.tab}>
      <Link href={hrefLink}>{nameTab}</Link>
    </li>
  );
};
