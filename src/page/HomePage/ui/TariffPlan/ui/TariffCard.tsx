"use client";
import { Button } from "@/shared";
import styles from "./TariffCard.module.scss";

interface IListWork {
  nameWork: string;
  lineThought?: boolean;
}

interface ITariffCard {
  name: string;
  underName?: string;
  price: string;
  listWork: IListWork[];
}

export const TariffCard = ({
  name,
  underName,
  price,
  listWork,
}: ITariffCard) => {
  return (
    <article className={styles.tariffCard}>
      <div className={styles.containerName}>
        <h3 style={{ margin: !underName ? "auto 0" : "" }}>{name}</h3>
        {underName && <span className={styles.underName}>{underName}</span>}
      </div>

      <span className={styles.titleListWork}>Перечень работ</span>

      <ul>
        {listWork.map((item, index) => (
          <li
            key={index}
            style={{
              textDecorationLine: item.lineThought ? "line-through" : "none",
              textDecorationThickness: "1px",
            }}
          >
            {item.nameWork}
          </li>
        ))}
      </ul>

      <footer className={styles.footerTariffCard}>
        <span className={styles.priceTariff}>от {price}</span>
        <Button size="xl" variantColor="accentOutline">
          Связаться
        </Button>
      </footer>
    </article>
  );
};
