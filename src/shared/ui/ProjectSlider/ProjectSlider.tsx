"use client";

import { ReactNode, Ref } from "react";
import Slider, { Settings } from "react-slick";
import "./pagingGradient.scss";

interface IProjectSlide {
  otherSettings?: Settings;
  component: ReactNode | ReactNode[];
  className: string;
  refSlider?: Ref<Slider>;
}

export const ProjectSlider = ({
  otherSettings = {},
  component,
  className,
  refSlider,
}: IProjectSlide) => {
  const initialSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    ...otherSettings,
  };

  return (
    <Slider {...initialSettings} className={className} ref={refSlider}>
      {component}
    </Slider>
  );
};
