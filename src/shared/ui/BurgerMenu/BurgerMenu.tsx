import Image from "next/image";
import styles from "./BurgerMenu.module.scss";
import burgerMenu_image from "/public/icons/burgerMenu_image.png";
import { LIST_TAB_BURGER_MENU } from "./lib/consts";
import Link from "next/link";

interface IBurgerMenu {
  toggleSetIsActiveBurgerMenu: () => void;
}

export const BurgerMenu = ({ toggleSetIsActiveBurgerMenu }: IBurgerMenu) => {
  return (
    <nav className={styles.burgerMenu}>
      <ul>
        {LIST_TAB_BURGER_MENU.map((item) => (
          <li key={item.id} onClick={toggleSetIsActiveBurgerMenu}>
            <Link href={item.idTab}>{item.nameTab}</Link>
          </li>
        ))}
      </ul>

      <Image
        src={burgerMenu_image}
        alt="burger menu image"
        className={styles.burgerMenuImage}
      />
    </nav>
  );
};
