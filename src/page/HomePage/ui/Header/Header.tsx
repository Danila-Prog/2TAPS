"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "/public/icons/logo.png";
import Link from "next/link";
import { Button } from "@/shared";
import { useWindowSize } from "@/shared/model/useWindowSize";
import burger_menu from "/public/svg/burger_menu.svg";

export const Header = () => {
  const width = useWindowSize();

  return (
    <header className={styles.header}>
      {width > 1024 ? (
        <>
          <div className={styles.leftSection}>
            <Image src={logo} alt="" className={styles.logo} />
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
        </>
      ) : (
        <>
          <Image src={burger_menu} alt="" />
          <div className={styles.leftSection}>
            <Image src={logo} alt="" className={styles.logo} />
          </div>
        </>
      )}
    </header>
  );
};
