"use client";

import { BurgerMenu } from "@/shared";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { useSwitchBurgerMenu } from "../Header/model/useSwitchBurgerMenu";

export const HeaderMainWrapper = () => {
  const { isActiveBurgerMenu, toggleSetIsActiveBurgerMenu } =
    useSwitchBurgerMenu();
  return (
    <>
      <Header
        isActiveBurgerMenu={isActiveBurgerMenu}
        toggleSetIsActiveBurgerMenu={toggleSetIsActiveBurgerMenu}
        burgerMenu={<BurgerMenu />}
      />
      <Main isActiveBurgerMenu={isActiveBurgerMenu} />
    </>
  );
};
