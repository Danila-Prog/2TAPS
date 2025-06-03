import styles from "./HomePage.module.scss";
import {
  Header,
  Main,
  About,
  ApplicationForm,
  Footer,
  ReviewAbout,
  TariffPlan,
  WhatWeCanDo,
} from "./ui";
import Image from "next/image";
import small_curve from "/public/svg/small_curve.svg";
import big_curve from "/public/svg/big_curve.svg";
import light from "/public/svg/light.svg";
import geer from "/public/svg/geer.svg";

export const HomePage = () => {
  return (
    <>
      <div className={styles.mainBlock}>
        <div className={styles.infoMainBlock}>
          <Header />
          <Main />
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <Image src={small_curve} alt="" className={styles.smallCurve} />
        <div className={styles.containerBigCurve}>
          <Image src={big_curve} alt="" className={styles.bigCurve} />
        </div>
        <div className={styles.about}>
          <About />
        </div>
      </div>

      <WhatWeCanDo />

      <div className={styles.containerTariffPlan}>
        <div className={styles.containerLight}>
          <Image src={light} alt="" className={styles.light} />
        </div>

        <div className={styles.componentTariffPlan}>
          <TariffPlan />
        </div>
      </div>

      <div className={styles.containerReviewAbout}>
        <div className={styles.containerGeer}>
          <Image src={geer} alt="" className={styles.geer} />
        </div>
        <div className={styles.componentReviewAbout}>
          <ReviewAbout />
        </div>
      </div>

      <ApplicationForm />

      <div className={styles.containerFooter}>
        <Footer />
      </div>
    </>
  );
};
