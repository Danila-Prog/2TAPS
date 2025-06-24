import Image from "next/image";
import styles from "./Footer.module.scss";
import footer_svg_mobile from "/public/svg/footer_svg_mobile.svg";
import footer_svg_tablet from "/public/svg/footer_svg_tablet.svg";
import { Logo } from "@/shared";
import { LIST_SOCIAL_NETWORK } from "./lib/listSocialNetwork";
import { SocialNetwork } from "./ui/SocialNetwork";

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
          {LIST_SOCIAL_NETWORK.map((social) => (
            <SocialNetwork key={social.id} {...social} />
          ))}
        </ul>
      </nav>

      <span className={styles.ourPartners}>Наши партнёры: S2S</span>

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
