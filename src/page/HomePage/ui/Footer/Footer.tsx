import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import telegram from "/public/icons/telegram.png";
import whatsapp from "/public/icons/whatsapp.png";
import vk from "/public/icons/vk.png";
import phone from "/public/icons/phone.png";
import footer_svg_mobile from "/public/svg/footer_svg_mobile.svg";
import footer_svg_tablet from "/public/svg/footer_svg_tablet.svg";
import { Logo } from "@/shared";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <header>
        <div className={styles.headerInfo}>
          <h3>Остались вопросы?</h3>
          <p>Заполни форму выше, и мы на всё ответим</p>
        </div>
        <Logo additionalStyle={styles.footerLogo} />
      </header>

      <main>
        <div>
          <span>ИП Иванов Иван Иванович, ИНН 779292929292</span>
          <span>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
          <span>@2025 ВСЕ ПРАВА ЗАЩИЩЕНЫ</span>
        </div>

        <span className={styles.numberPhone}>+7 (929) 292 - 92 - 92</span>
      </main>

      <nav>
        <h4>Свяжитесь с нами</h4>
        <ul>
          <li>
            <Link href={""}>
              <Image src={telegram} alt="" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={whatsapp} alt="" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={vk} alt="" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={phone} alt="" />
            </Link>
          </li>
        </ul>
      </nav>

      <Image
        src={footer_svg_mobile}
        alt="footer svg mobile"
        className={styles.footerSvgMobile}
      />

      <Image
        src={footer_svg_tablet}
        alt="footer svg tablet"
        className={styles.footerSvgTablet}
      />
    </footer>
  );
};
