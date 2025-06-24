import localFont from "next/font/local";

export const hikasami = localFont({
  src: [
    {
      path: "../../public/fonts/hikasami_Font/Hikasami-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/hikasami_Font/Hikasami-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/hikasami_Font/Hikasami-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/hikasami_Font/Hikasami-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-hikasami",
});

export const liter = localFont({
  src: [
    {
      path: "../../public/fonts/liter_Font/Liter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-liter",
});
