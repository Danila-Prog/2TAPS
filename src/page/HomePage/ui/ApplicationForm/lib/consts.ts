import { IInitialCommunicationState, IInitialFormState } from "./types";

export const INITIAL_FORM_STATE: IInitialFormState = {
  name: "",
  surname: "",
  numberPhone: "",
};

export const INITIAL_COMMUNICATION_STATE: IInitialCommunicationState = {
  whatsApp: false,
  telegram: false,
  numberPhone: false,
};
