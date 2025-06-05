import Image from "next/image";
import styles from "./Header.module.scss";
import burger_menu from "/public/svg/burger_menu.svg";
import { Button, Logo } from "@/shared";
import { LIST_TAB } from "./lib/listTab";
import { Tab } from "./ui/Tab";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerAdaptiveLaptop}>
        <div className={styles.leftSection}>
          <Logo />
        </div>

        <nav className={styles.centerSection}>
          <ul>
            {LIST_TAB.map((tab) => (
              <Tab key={tab.id} {...tab} />
            ))}
          </ul>
        </nav>

        <Button size="md" variantColor="primaryOutline">
          Оставить заявку
        </Button>
      </div>

      <div className={styles.containerAdaptiveMobile}>
        <Image src={burger_menu} alt="" className={styles.burgerMenu} />

        <div className={styles.leftSection}>
          <Logo />
        </div>
      </div>
    </header>
  );
};
