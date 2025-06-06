"use client";

import { Button, ContainerIllumination, Input } from "@/shared";
import Image from "next/image";
import form_bg from "/public/icons/form_bg.png";
import styles from "./ApplicationForm.module.scss";
import { useApplicationForm } from "./model/useApplicationForm";
import { INITIAL_COMMUNICATION_STATE } from "./lib/consts";
import { TCommunicationMethod } from "./lib/types";

export const ApplicationForm = () => {
  const {
    formData,
    handleOnSubmit,
    communicationMethod,
    handleInputChange,
    handleCommunicationChange,
  } = useApplicationForm();

  return (
    <section className={styles.containerApplicationForm}>
      <aside>
        <h3>Форма заявки</h3>
        <Image src={form_bg} alt="background form application" />
      </aside>

      <form
        action=""
        onSubmit={handleOnSubmit}
        className={styles.applicationForm}
      >
        <ContainerIllumination
          stylesIllumination1={styles.illuminationApplicationForm}
          stylesIllumination2={styles.illuminationApplicationForm2}
        />

        <div className={styles.contentApplicationForm}>
          <h3>Введите ваши данные</h3>

          <div className={styles.containerInputs}>
            <Input
              placeholder="Имя"
              value={formData.name}
              onChange={handleInputChange("name")}
            />

            <Input
              placeholder="Фамилия"
              value={formData.surname}
              onChange={handleInputChange("surname")}
            />

            <Input
              type="number"
              placeholder="Телефон"
              value={formData.numberPhone}
              onChange={handleInputChange("numberPhone")}
            />
          </div>

          <div className={styles.containerPaymentMethod}>
            <h4>Желаемый способ связи</h4>
            <div className={styles.paymentMethod}>
              {Object.keys(INITIAL_COMMUNICATION_STATE).map((method) => (
                <Input
                  key={method}
                  type="radio"
                  id={method}
                  label
                  labelName={
                    method === "whatsApp"
                      ? "WhatsApp"
                      : method === "telegram"
                      ? "Telegram"
                      : "Телефон"
                  }
                  mainStyle="radio"
                  checked={communicationMethod[method as TCommunicationMethod]}
                  onChange={() =>
                    handleCommunicationChange(method as TCommunicationMethod)
                  }
                />
              ))}
            </div>
          </div>

          <Button
            size="xl"
            variantColor="white"
            type="submit"
            disabled={
              !formData.name ||
              !formData.surname ||
              !formData.numberPhone ||
              !formData.communicationMethod
            }
          >
            Отправить заявку
          </Button>
        </div>
      </form>
    </section>
  );
};
