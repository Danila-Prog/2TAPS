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
import { BurgerMenu } from "../../shared";
import { HomeLayout } from "./layout/HomeLayout";

export const HomePage = () => {
  return (
    <HomeLayout
      header={<Header burgerMenu={<BurgerMenu />} />}
      main={<Main />}
      about={<About />}
      applicationForm={<ApplicationForm />}
      footer={<Footer />}
      reviewAbout={<ReviewAbout />}
      tariffPlan={<TariffPlan />}
      whatWeCanDo={<WhatWeCanDo />}
    />
  );
};
