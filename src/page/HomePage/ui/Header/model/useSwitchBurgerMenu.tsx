import { useEffect, useState } from "react";

export const useSwitchBurgerMenu = () => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    if (isActiveBurgerMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActiveBurgerMenu]);

  const toggleSetIsActiveBurgerMenu = () =>
    setIsActiveBurgerMenu((prev) => !prev);

  return { isActiveBurgerMenu, toggleSetIsActiveBurgerMenu };
};
