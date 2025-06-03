// import { Button } from "@/shared";
import styles from "./CardAbout.module.scss";

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
        {/* <Button size="lg" variantColor="violet">
          Подробнее
        </Button> */}
      </div>
    </article>
  );
};
