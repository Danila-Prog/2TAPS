import styles from "./HomeLayout.module.scss";
import Image from "next/image";
import small_curve from "/public/svg/small_curve.svg";
import big_curve from "/public/svg/big_curve.svg";
import light from "/public/svg/light.svg";
import gear from "/public/svg/gear.svg";
import { ReactElement } from "react";

interface IHomeLayout {
  infoMain: ReactElement;
  about: ReactElement;
  whatWeCanDo: ReactElement;
  tariffPlan: ReactElement;
  reviewAbout: ReactElement;
  applicationForm: ReactElement;
  footer: ReactElement;
}

export const HomeLayout = ({
  infoMain,
  about,
  whatWeCanDo,
  tariffPlan,
  reviewAbout,
  applicationForm,
  footer,
}: IHomeLayout) => {
  return (
    <div className={styles.containerLayout}>
      <main className={styles.mainBlock}>
        <div className={styles.infoMainBlock}>{infoMain}</div>
      </main>

      <section className={styles.aboutContainer}>
        <Image
          src={small_curve}
          alt="small curve"
          className={styles.smallCurve}
        />

        <div className={styles.containerBigCurve}>
          <Image src={big_curve} alt="big curve" className={styles.bigCurve} />
        </div>

        <div className={styles.about}>{about}</div>
      </section>

      {whatWeCanDo}

      <section className={styles.containerTariffPlan}>
        <div className={styles.containerLight}>
          <Image src={light} alt="light" className={styles.light} />
        </div>

        <div className={styles.componentTariffPlan}>{tariffPlan}</div>
      </section>

      <section className={styles.containerReviewAbout}>
        <div className={styles.containerGear}>
          <Image src={gear} alt="gear" className={styles.gear} />
        </div>

        <div className={styles.componentReviewAbout}>{reviewAbout}</div>
      </section>

      {applicationForm}

      <footer className={styles.containerFooter}>{footer}</footer>
    </div>
  );
};
