import type { Metadata } from "next";
import "./globals.css";
import { hikasami, liter } from "./fonts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // заменить на домен

  title: "Two Tap",

  description:
    "Закажите современный сайт, лендинг или интернет-магазин у экспертов Two Tap. Быстро, качественно и с гарантией результата!",

  keywords:
    "заказать сайт, создание сайтов, лендинг, интернет-магазин, разработка сайтов, брендинг, веб-дизайн",

  openGraph: {
    title: "Two Tap — Профессиональная разработка сайтов",
    description:
      "Создаем продающие сайты для вашего бизнеса. Оставьте заявку и получите бесплатную консультацию!",
    images: "/icons/logo.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hikasami.variable} ${liter.variable}`}>
        {children}
      </body>
    </html>
  );
}
