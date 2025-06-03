"use client";

import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return width;
};
