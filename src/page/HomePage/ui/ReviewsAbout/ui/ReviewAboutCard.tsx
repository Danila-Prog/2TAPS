import Image from "next/image";
import star from "/public/svg/star.svg";
import styles from "./ReviewAboutCard.module.scss";

const stars = [star, star, star, star, star];

interface IReviewAbout {
  name: string;
  surname: string;
  description: string;
}
export const ReviewAboutCard = ({
  name,
  surname,
  description,
}: IReviewAbout) => {
  return (
    <article className={styles.reviewAboutCard}>
      <header className={styles.headerReviewAboutCard}>
        <div>
          <h4>{name}</h4>
          <h4>{surname}</h4>
        </div>

        <div className={styles.containerStars}>
          {stars.map((star, index) => (
            <Image key={index} width={1} height={1} src={star} alt="star" />
          ))}
        </div>
      </header>

      <main>
        <p>{description}</p>
      </main>
    </article>
  );
};
