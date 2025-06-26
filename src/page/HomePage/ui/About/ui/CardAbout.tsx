import Link from "next/link";
import styles from "./CardAbout.module.scss";
import { Button } from "@/shared";

interface ICardAbout {
  title: string;
  description: string;
}

export const CardAbout = ({ title, description }: ICardAbout) => {
  return (
    <article className={styles.cardAbout}>
      <h3>{title}</h3>
      <div className={styles.descriptionBlock}>
        <p>{description}</p>

        <Link href="#applicationForm" className={styles.buttonLaptop}>
          <Button size="lg" variantColor="lightViolet">
            Подробнее
          </Button>
        </Link>

        <Link href="#applicationForm" className={styles.buttonMobile}>
          <Button typeChildren="image" variantColor="darkViolet" size="image" />
        </Link>
      </div>
    </article>
  );
};
