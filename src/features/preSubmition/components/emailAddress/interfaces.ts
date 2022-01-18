export type EmailAddressProps = {
  email: string | undefined;
  onChangeMail: (value: string) => void | undefined;
  isCorrectEmailAddress: boolean;
};
