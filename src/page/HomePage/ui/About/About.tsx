import { CardAbout } from "./ui/CardAbout";
import styles from "./About.module.scss";
import { CARD_ABOUT } from "./lib/consts";

export const About = () => {
  return (
    <section className={styles.about}>
      <h2>Давайте знакомиться!</h2>

      <main className={styles.aboutDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Risus dolor sollicitudin ac
          maecenas massa eget enim. Sagittis enim scelerisque consequat fames ut
          congue diam aenean sit. Posuere metus sed nec phasellus morbi odio
          ipsum turpis eu.
        </p>
      </main>

      <section className={styles.cardsBlock}>
        {CARD_ABOUT.map((card, index) => (
          <CardAbout key={index} {...card} />
        ))}
      </section>
    </section>
  );
};
