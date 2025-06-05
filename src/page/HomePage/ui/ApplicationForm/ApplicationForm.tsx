import { Button, ContainerIllumination, Input } from "@/shared";
import Image from "next/image";
import form_bg from "/public/icons/form_bg.png";
import styles from "./ApplicationForm.module.scss";

export const ApplicationForm = () => {
  return (
    <section className={styles.containerApplicationForm}>
      <aside>
        <h3>Форма заявки</h3>
        <Image src={form_bg} alt="background form application" />
      </aside>

      <form action="" className={styles.applicationForm}>
        <ContainerIllumination
          stylesIllumination1={styles.illuminationApplicationForm}
          stylesIllumination2={styles.illuminationApplicationForm2}
        />

        <div className={styles.contentApplicationForm}>
          <h3>Введите ваши данные</h3>

          <div className={styles.containerInputs}>
            <Input placeholder="Имя" />
            <Input placeholder="Фамилия" />
            <Input type="number" placeholder="Телефон" />
          </div>

          <div className={styles.containerPaymentMethod}>
            <h4>Желаемый способ связи</h4>
            <div className={styles.paymentMethod}>
              <Input
                type="radio"
                id="whatsapp"
                label
                labelName="WhatsApp"
                mainStyle="radio"
              />
              <Input
                type="radio"
                id="telegram"
                label
                labelName="Telegram"
                mainStyle="radio"
              />
              <Input
                type="radio"
                id="phone-"
                label
                labelName="Телефон"
                mainStyle="radio"
              />
            </div>
          </div>

          <Button size="xl" variantColor="white">
            Отправить заявку
          </Button>
        </div>
      </form>
    </section>
  );
};
