import styles from "./Tab.module.scss";
import Link from "next/link";

interface ITab {
  nameTab: string;
  idTab: string;
}

export const Tab = ({ nameTab, idTab }: ITab) => {
  return (
    <li className={styles.tab}>
      <Link href={idTab}>{nameTab}</Link>
    </li>
  );
};
