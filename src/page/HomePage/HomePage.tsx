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

import { HomeLayout } from "./layout/HomeLayout";

export const HomePage = () => {
  return (
    <HomeLayout
      header={<Header />}
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
