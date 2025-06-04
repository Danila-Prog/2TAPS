import { ReviewAboutCard } from "./ui/ReviewAboutCard";
import styles from "./ReviewsAbout.module.scss";
import { REVIEW_ABOUT_ARRAY } from "./lib/consts";
import { SwipeButton } from "@/shared";

export const ReviewAbout = () => {
  return (
    <section className={styles.reviewAbout}>
      <h2>Отзывы о нас</h2>

      <div className={styles.containerInfoReviewAbout}>
        <div className={styles.infoReviewAbout}>
          <h3>Мы попросили наших клиентов написать пару слов о нас</h3>
          <div className={styles.containerSwitchTablet}>
            <SwipeButton directionSwipe="left" />
            <SwipeButton directionSwipe="right" />
          </div>
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

        <div className={styles.containerSwitchMobile}>
          <SwipeButton directionSwipe="left" />
          <SwipeButton directionSwipe="right" />
        </div>
      </div>
    </section>
  );
};
