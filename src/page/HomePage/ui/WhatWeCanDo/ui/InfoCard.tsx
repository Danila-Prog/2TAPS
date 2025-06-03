import Image, { StaticImageData } from "next/image";
import styles from "./InfoCard.module.scss";

interface IInfoCard {
  number: number;
  title: string;
  description: string;
  imgSrc: StaticImageData;
  imgAlt: string;
}
export const InfoCard = ({
  number,
  title,
  description,
  imgSrc,
  imgAlt,
}: IInfoCard) => {
  return (
    <article className={styles.infoCard}>
      <span>0{number}.</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Image src={imgSrc} alt={imgAlt} />
    </article>
  );
};
