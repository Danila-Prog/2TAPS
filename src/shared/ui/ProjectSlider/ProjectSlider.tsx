"use client";

import { ReactNode, Ref } from "react";
import Slider, { Settings } from "react-slick";
import "./pagingGradient.scss";

interface IProjectSlide {
  otherSettings?: Settings;
  component: ReactNode | ReactNode[];
  className: string;
  refSlider?: Ref<Slider>;
  dotsColor: "white" | "gradient";
}

export const ProjectSlider = ({
  otherSettings = {},
  component,
  className,
  refSlider,
  dotsColor,
}: IProjectSlide) => {
  const DOTS_COLOR = { white: "whiteDots", gradient: "gradientDots" }[
    dotsColor
  ];

  const initialSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `slick-dots ${DOTS_COLOR}`,
    ...otherSettings,
  };

  return (
    <Slider {...initialSettings} className={className} ref={refSlider}>
      {component}
    </Slider>
  );
};
