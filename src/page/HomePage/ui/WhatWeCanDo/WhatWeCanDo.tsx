"use client";

import { ContainerIllumination } from "@/shared";
import { useInfoCards } from "./model/useInfoCards";
import { InfoCard } from "./ui/InfoCard";
import styles from "./WhatWeCanDo.module.scss";

export const WhatWeCanDo = () => {
  const INFO_CARDS = useInfoCards();

  return (
    <section className={styles.whatWeCanDo}>
      <ContainerIllumination
        stylesIllumination1={styles.illuminationWhatWeCanDo}
        stylesIllumination2={styles.illuminationWhatWeCanDo2}
      />

      <h2>Что мы умеем?</h2>
      <div className={styles.groupInfoCard}>
        {INFO_CARDS.map((card) => (
          <InfoCard key={card.number} {...card} />
        ))}
      </div>
    </section>
  );
};
