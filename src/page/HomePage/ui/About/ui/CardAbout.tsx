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
        <Button
          size="lg"
          variantColor="lightViolet"
          className={styles.buttonLaptop}
        >
          Подробнее
        </Button>

        <Button
          typeChildren="image"
          variantColor="darkViolet"
          size="image"
          className={styles.buttonMobile}
        />
      </div>
    </article>
  );
};
