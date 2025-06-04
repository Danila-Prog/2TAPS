import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import burger_menu from "/public/svg/burger_menu.svg";
import { Button, Logo } from "@/shared";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerAdaptiveLaptop}>
        <div className={styles.leftSection}>
          <Logo />
        </div>

        <nav className={styles.centerSection}>
          <ul>
            <li>
              <Link href={"/"}>Главная</Link>
            </li>
            <li>
              <Link href={"/"}>Услуги</Link>
            </li>
            <li>
              <Link href={"/"}>Отзывы</Link>
            </li>
            <li>
              <Link href={"/"}>Связаться</Link>
            </li>
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
