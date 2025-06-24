"use client";

import { useWindowSize } from "@/shared/model/useWindowSize";
import svg_web from "/public/svg/svg_web.svg";
import svg_development from "/public/svg/svg_development.svg";
import svg_branding from "/public/svg/svg_branding.svg";
import svg_web_phone from "/public/svg/svg_web_phone.svg";
import svg_development_phone from "/public/svg/svg_development_phone.svg";
import svg_branding_phone from "/public/svg/svg_branding_phone.svg";

export const useInfoCards = () => {
  const width = useWindowSize();

  const INFO_CARDS = [
    {
      number: 1,
      title: "Веб-дизайн",
      description:
        "Lorem ipsum dolor sit amet consectetur. Luctus at tortor nisl condimentum turpis cras ac tincidunt. Morbi leo ornare augue pharetra fermentum adipiscing lobortis. Cras lobortis curabitur eu volutpat dui sem.",
      imgSrc: (width as number) > 768 ? svg_web : svg_web_phone,
      imgAlt: "Image in the web design card",
    },
    {
      number: 2,
      title: "Разработка",
      description:
        "Lorem ipsum dolor sit amet consectetur. Luctus at tortor nisl condimentum turpis cras ac tincidunt. Morbi leo ornare augue pharetra fermentum adipiscing lobortis. Cras lobortis curabitur eu volutpat dui sem.",
      imgSrc: (width as number) > 768 ? svg_development : svg_development_phone,
      imgAlt: "Image in the development card",
    },
    {
      number: 3,
      title: "Брендинг",
      description:
        "Lorem ipsum dolor sit amet consectetur. Luctus at tortor nisl condimentum turpis cras ac tincidunt. Morbi leo ornare augue pharetra fermentum adipiscing lobortis. Cras lobortis curabitur eu volutpat dui sem.",
      imgSrc: (width as number) > 768 ? svg_branding : svg_branding_phone,
      imgAlt: "Image in the branding card",
    },
  ];
  return INFO_CARDS;
};
