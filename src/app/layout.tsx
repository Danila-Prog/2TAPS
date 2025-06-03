import type { Metadata } from "next";
import "./globals.css";
import { hikasami, liter } from "./fonts";

export const metadata: Metadata = {
  title: "Two Tap",

  description:
    "Закажите современный сайт, лендинг или интернет-магазин у экспертов Two Tap. Быстро, качественно и с гарантией результата!",

  keywords:
    "заказать сайт, создание сайтов, лендинг, интернет-магазин, разработка сайтов, брендинг, веб-дизайн",

  openGraph: {
    title: "Two Tap — Профессиональная разработка сайтов",
    description:
      "Создаем продающие сайты для вашего бизнеса. Оставьте заявку и получите бесплатную консультацию!",
    // images: "...",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Two Tap — Профессиональная разработка сайтов",
    description:
      "Создаем продающие сайты для вашего бизнеса. Оставьте заявку и получите бесплатную консультацию!",
    // site: "логин аккаунта сайта в twitter",
    // images: "",
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
