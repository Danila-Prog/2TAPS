"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import burger_menu from "/public/svg/burger_menu.svg";
import { Button, Logo } from "@/shared";
import { LIST_TAB } from "./lib/listTab";
import { Tab } from "./ui/Tab/Tab";
import { ReactElement, useEffect } from "react";
import cross from "/public/svg/cross.svg";
import Link from "next/link";
interface IHeader {
  burgerMenu: ReactElement;
  isActiveBurgerMenu: boolean;
  toggleSetIsActiveBurgerMenu: () => void;
}

export const Header = ({
  isActiveBurgerMenu,
  toggleSetIsActiveBurgerMenu,
  burgerMenu,
}: IHeader) => {
  useEffect(() => {
    if (isActiveBurgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActiveBurgerMenu]);

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

          <Link href="#applicationForm">
            <Button size="md" variantColor="primaryOutline">
              Оставить заявку
            </Button>
          </Link>
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
