import { TariffCard } from "./ui/TariffCard";
import styles from "./TariffPlan.module.scss";
import { TARIFF_CARD_INFO } from "./lib/consts";
import { ProjectSlider } from "@/shared";
import { Settings } from "react-slick";

export const TariffPlan = () => {
  const tariffPlanSettings: Settings = {
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToShow: 3,
  };
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
