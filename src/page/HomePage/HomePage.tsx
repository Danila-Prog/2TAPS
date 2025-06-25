import {
  About,
  ApplicationForm,
  Footer,
  HeaderMainWrapper,
  ReviewAbout,
  TariffPlan,
  WhatWeCanDo,
} from "./ui";
import { HomeLayout } from "./layout/HomeLayout";

export const HomePage = () => {
  return (
    <HomeLayout
      infoMain={<HeaderMainWrapper />}
      about={<About />}
      applicationForm={<ApplicationForm />}
      footer={<Footer />}
      reviewAbout={<ReviewAbout />}
      tariffPlan={<TariffPlan />}
      whatWeCanDo={<WhatWeCanDo />}
    />
  );
};
