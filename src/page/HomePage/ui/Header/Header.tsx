"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import burger_menu from "/public/svg/burger_menu.svg";
import { Button, Logo } from "@/shared";
import { LIST_TAB } from "./lib/listTab";
import { Tab } from "./ui/Tab/Tab";
import { useSwitchBurgerMenu } from "./model/useSwitchBurgerMenu";
import { ReactElement } from "react";
import cross from "/public/svg/cross.svg";
interface IHeader {
  burgerMenu: ReactElement;
}

export const Header = ({ burgerMenu }: IHeader) => {
  const { isActiveBurgerMenu, toggleSetIsActiveBurgerMenu } =
    useSwitchBurgerMenu();

  return (
    <>
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
          <button onClick={toggleSetIsActiveBurgerMenu}>
            <Image
              src={!isActiveBurgerMenu ? burger_menu : cross}
              alt={!isActiveBurgerMenu ? "burger menu icon" : "cross icon"}
              className={styles.burgerMenu}
            />
          </button>

          <div className={styles.leftSection}>
            <Logo />
          </div>
        </div>
      </header>

      {isActiveBurgerMenu && burgerMenu}
    </>
  );
};
