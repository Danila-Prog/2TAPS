import Image from "next/image";
import arrow_left from "/public/svg/arrow_left.svg";
import arrow_right from "/public/svg/arrow_right.svg";
import styles from "./SwipeButton.module.scss";

interface ISwipeButton {
  directionSwipe: "right" | "left";
  handleClick?: () => void;
}

export const SwipeButton = ({ directionSwipe, handleClick }: ISwipeButton) => {
  return (
    <button className={styles.swipeButton} onClick={handleClick}>
      <Image
        src={directionSwipe === "left" ? arrow_left : arrow_right}
        alt={directionSwipe === "left" ? arrow_left : arrow_right}
      />
    </button>
  );
};
