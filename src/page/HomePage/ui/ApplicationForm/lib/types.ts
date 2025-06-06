export interface IInitialFormState {
  name: string;
  surname: string;
  numberPhone: string;
}
export interface IInitialCommunicationState {
  whatsApp: boolean;
  telegram: boolean;
  numberPhone: boolean;
}
export type TCommunicationMethod = "whatsApp" | "telegram" | "numberPhone";
