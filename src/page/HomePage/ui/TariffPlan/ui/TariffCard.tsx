"use client";
import { Button } from "@/shared";
import styles from "./TariffCard.module.scss";
import Link from "next/link";

interface IListWork {
  nameWork: string;
  lineThought?: boolean;
}

interface ITariffCard {
  name: string;
  price: string;
  listWork: IListWork[];
}

export const TariffCard = ({ name, price, listWork }: ITariffCard) => {
  return (
    <article className={styles.tariffCard}>
      <h3 className={styles.name}>{name}</h3>

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
        <Link href="#applicationForm">
          <Button size="xl" variantColor="accentOutline">
            Связаться
          </Button>
        </Link>
      </footer>
    </article>
  );
};
