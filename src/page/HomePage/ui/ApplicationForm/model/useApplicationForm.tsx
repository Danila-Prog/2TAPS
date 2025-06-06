import { ChangeEvent, FormEvent, useState } from "react";
import { INITIAL_FORM_STATE, INITIAL_COMMUNICATION_STATE } from "../lib/consts";
import { IInitialFormState, TCommunicationMethod } from "../lib/types";

export const useApplicationForm = () => {
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
      .filter(([_, isActive]) => isActive)
      .map(([method]) => method)
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

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formData);

    setUserFormState(INITIAL_FORM_STATE);
    setCommunicationMethod(INITIAL_COMMUNICATION_STATE);
  };

  return {
    handleInputChange,
    handleCommunicationChange,
    handleOnSubmit,
    formData,
    communicationMethod,
  };
};
