import { ChangeEvent, FormEvent, RefObject, useState } from "react";
import { INITIAL_FORM_STATE, INITIAL_COMMUNICATION_STATE } from "../lib/consts";
import { IInitialFormState, TCommunicationMethod } from "../lib/types";
import emailjs from "@emailjs/browser";

export const useApplicationForm = (
  formRef: RefObject<HTMLFormElement | null>
) => {
  const [userFormState, setUserFormState] = useState(INITIAL_FORM_STATE);

  const [communicationMethod, setCommunicationMethod] = useState(
    INITIAL_COMMUNICATION_STATE
  );

  const formData = {
    ...INITIAL_FORM_STATE,
    ...userFormState,
    communicationMethod: getActiveCommunicationMethod(),
  };

  function getActiveCommunicationMethod() {
    return Object.entries(communicationMethod)
      .filter((selectedMethod) => selectedMethod[1] === true)
      .map((method) => method[0])
      .join("");
  }

  const handleInputChange =
    (field: keyof IInitialFormState) => (e: ChangeEvent<HTMLInputElement>) => {
      setUserFormState((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleCommunicationChange = (method: TCommunicationMethod) => {
    setCommunicationMethod({
      ...INITIAL_COMMUNICATION_STATE,
      [method]: true,
    });
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.surname &&
      formData.numberPhone &&
      formData.communicationMethod
    ) {
      try {
        emailjs
          .sendForm(
            process.env.SERVICE_ID ?? "",
            process.env.TEMPLATE_ID ?? "",
            formRef.current as HTMLFormElement,
            {
              publicKey: process.env.PUBLIC_KEY ?? "",
            }
          )
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );

        setUserFormState(INITIAL_FORM_STATE);
        setCommunicationMethod(INITIAL_COMMUNICATION_STATE);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    }
  };

  return {
    handleInputChange,
    handleCommunicationChange,
    handleSendEmail,
    formData,
    communicationMethod,
  };
};
