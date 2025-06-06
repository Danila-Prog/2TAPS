import Image from "next/image";
import main_logo from "/public/icons/main_logo.png";
import { Button } from "@/shared";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Хотите продвинуть свой бизнес в интернете?</h1>
      <Image src={main_logo} alt="main logo 2TAPS" priority={true} />
      <p>
        <span className={styles.descriptionTextAdaptiveMobile}>
          Выбирая нас, вы получаете не просто сайт, а мощный инструмент для
          продаж. Мы глубоко изучаем ваш бизнес и продвигаем его, как свой.
          Давайте работать вместе!
        </span>

        <span className={styles.descriptionTextAdaptiveLaptop}>
          Выбирая нас, Вы получаете не сайт, а инструмент продаж и закрытия
          сделок. Блягодаря индивидуальному подходу к каждому клиенту мы
          полностью погружаемся в сферу деятельности Вашего бизнеса, принимаем
          его за свой и продвигаем, как для себя. Давайте сотрудничать!
        </span>
      </p>

      <Button
        size="sm"
        variantColor="primaryOutline"
        className={styles.buttonMain}
      >
        Хочу сайт!
      </Button>
    </main>
  );
};
