import { Button } from "@/shared";
import Image from "next/image";
import form_bg from "/public/icons/form_bg.png";
import styles from "./ApplicationForm.module.scss";

export const ApplicationForm = () => {
  return (
    <section className={styles.containerApplicatonForm}>
      <aside>
        <h3>Форма заявки</h3>
        <Image src={form_bg} alt="" />
      </aside>

      <form action="" className={styles.applicationForm}>
        <h3>Введите ваши данные</h3>
        <div className={styles.containerInputs}>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Телефон" />
        </div>

        <div className={styles.containerPaymentMethod}>
          <h4>Желаемый способ связи</h4>
          <div className={styles.paymentMethod}>
            <div>
              <input type="radio" id="whatsapp-radio" />
              <label htmlFor="whatsapp-radio">WhatsApp</label>
            </div>

            <div>
              <input type="radio" id="talegram-radio" />
              <label htmlFor="talegram-radio">Telegram</label>
            </div>

            <div>
              <input type="radio" id="phone-radio" />
              <label htmlFor="phone-radio">Телефон</label>
            </div>
          </div>
        </div>

        <Button size="xl" variantColor="white">
          Отправить заявку
        </Button>
      </form>
    </section>
  );
};
