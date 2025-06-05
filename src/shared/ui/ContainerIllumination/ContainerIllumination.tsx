import illumination from "/public/svg/illumination.svg";
import Image from "next/image";
import styles from "./ContainerIllumination.module.scss";

interface IContainerIllumination {
  stylesIllumination1: string;
  stylesIllumination2: string;
}

export const ContainerIllumination = ({
  stylesIllumination1,
  stylesIllumination2,
}: IContainerIllumination) => {
  return (
    <>
      <Image
        src={illumination}
        alt="Illumination one"
        className={`${styles.generalStyleIllumination} ${styles.componentIllumination} ${stylesIllumination1}`}
      />

      <Image
        src={illumination}
        alt="Illumination two"
        className={`${styles.generalStyleIllumination} ${styles.componentIllumination2} ${stylesIllumination2}`}
      />
    </>
  );
};
