import { CardAbout } from "./ui/CardAbout";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.about}>
      <h2>Давайте знакомиться!</h2>
      <div className={styles.aboutDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Risus dolor sollicitudin ac
          maecenas massa eget enim. Sagittis enim scelerisque consequat fames ut
          congue diam aenean sit. Posuere metus sed nec phasellus morbi odio
          ipsum turpis eu.
        </p>
      </div>

      <div className={styles.cardsBlock}>
        <CardAbout
          title="6.750.000 ₽ ЗАРАБОТАЛИ НАШИ КЛИЕНТЫ С 2020 ГОДА"
          description="благодаря адаптивным сайтам с SEO-оптимизацией, готовым воронкам продаж и точной сквозной аналитике."
        />
        <CardAbout
          title="ЗА 3 ГОДА МЫ РЕАЛИЗОВАЛИ БОЛЕЕ 150 ПРОЕКТОВ"
          description="От лендингов до сложных веб-платформ — мы знаем, как сделать ваш бизнес заметным в digital."
        />
      </div>
    </section>
  );
};
