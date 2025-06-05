import { TariffCard } from "./ui/TariffCard";
import styles from "./TariffPlan.module.scss";
import { TARIFF_CARD_INFO, tariffPlanSettings } from "./lib/consts";
import { ProjectSlider } from "@/shared";

export const TariffPlan = () => {
  return (
    <section className={styles.tariffPlan}>
      <h2>Тарифные планы</h2>

      <ProjectSlider
        otherSettings={tariffPlanSettings}
        className={styles.groupTariffCard}
        component={TARIFF_CARD_INFO.map((tariff) => (
          <TariffCard
            key={tariff.name}
            name={tariff.name}
            underName={tariff.underName}
            price={tariff.price}
            listWork={tariff.listWork}
          />
        ))}
      />
    </section>
  );
};
