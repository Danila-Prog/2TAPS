"use client";

import { useInfoCards } from "./model/useInfoCards";
import { InfoCard } from "./ui/InfoCard";
import styles from "./WhatWeCanDo.module.scss";

export const WhatWeCanDo = () => {
  const INFO_CARDS = useInfoCards();

  return (
    <section className={styles.whatWeCanDo}>
      <h2>Что мы умеем?</h2>
      <div className={styles.groupInfoCard}>
        {INFO_CARDS.map((card) => (
          <InfoCard key={card.number} {...card} />
        ))}
      </div>
    </section>
  );
};
