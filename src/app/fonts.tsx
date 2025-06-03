import { Literata } from "next/font/google";
import localFont from "next/font/local";

export const hikasami = localFont({
  src: [
    {
      path: "../../public/hikasami_Font/Hikasami-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/hikasami_Font/Hikasami-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/hikasami_Font/Hikasami-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/hikasami_Font/Hikasami-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-hikasami",
});

export const liter = Literata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-liter",
});
