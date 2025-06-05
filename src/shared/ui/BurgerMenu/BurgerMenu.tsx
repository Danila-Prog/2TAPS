import Image from "next/image";
import styles from "./BurgerMenu.module.scss";
import burgerMenu_image from "/public/icons/burgerMenu_image.png";
import { MENU_ITEMS } from "./lib/consts";

export const BurgerMenu = () => {
  return (
    <nav className={styles.burgerMenu}>
      <ul>
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <button>{item.label}</button>
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
