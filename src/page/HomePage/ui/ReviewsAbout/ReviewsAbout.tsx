import { ReviewAboutCard } from "./ui/ReviewAboutCard";
import styles from "./ReviewsAbout.module.scss";
// import arrow_left from "/public/svg/arrow_left.svg";
// import arrow_right from "/public/svg/arrow_right.svg";
// import Image from "next/image";
import { REVIEW_ABOUT_ARRAY } from "./lib/consts";

export const ReviewAbout = () => {
  return (
    <section className={styles.reviewAbout}>
      <h2>Отзывы о нас</h2>

      <div className={styles.containerInfoReviewAbout}>
        <div className={styles.infoReviewAbout}>
          <h3>Мы попросили наших клиентов написать пару слов о нас</h3>
          {/* <div className={styles.containerSwitch}>
            <button>
              <Image src={arrow_left} alt="arrow left" />
            </button>
            <button>
              <Image src={arrow_right} alt="arrow right" />
            </button>
          </div> */}
        </div>

        <div className={styles.containerReviewAboutCard}>
          {REVIEW_ABOUT_ARRAY.map((review) => (
            <ReviewAboutCard
              key={review.id}
              name={review.name}
              surname={review.surname}
              description={review.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
