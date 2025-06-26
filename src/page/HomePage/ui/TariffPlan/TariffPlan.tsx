import { TariffCard } from "./ui/TariffCard";
import styles from "./TariffPlan.module.scss";
import { TARIFF_CARD_INFO, tariffPlanSettings } from "./lib/consts";
import { ProjectSlider } from "@/shared";

export const TariffPlan = () => {
  return (
    <section className={styles.tariffPlan} id="tariffPlan">
      <h2>Тарифные планы</h2>

      <ProjectSlider
        otherSettings={tariffPlanSettings}
        className={styles.groupTariffCard}
        dotsColor="gradient"
        component={TARIFF_CARD_INFO.map((tariff) => (
          <TariffCard
            key={tariff.name}
            name={tariff.name}
            price={tariff.price}
            listWork={tariff.listWork}
          />
        ))}
      />
    </section>
  );
};
