import styles from "./Tab.module.scss";

interface ITab {
  nameTab: string;
}

export const Tab = ({ nameTab }: ITab) => {
  return (
    <li className={styles.tab}>
      <button>{nameTab}</button>
    </li>
  );
};
