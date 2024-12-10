interface FormSubmitInterface {
  preventDefault: () => void;
}

interface FormChangeInterface {
  target: { name: string; value: string | number };
}

interface LabelPropsInterface {
  id: string;
  title: string;
  form: string;
  required: boolean;
}

interface InputPropsInterface {
  form: string;
  type: string;
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  handleRandomPassword?: () => void;
}

interface HidePasswordPropsInterface {
  showPassword: boolean;
  handleHidePassword: () => void;
  handleShowPassword: () => void;
}

interface InputContainerPropsInterface {
  title: string;
  form: string;
  type: string;
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  handleRandomPassword?: () => void;
}

interface SkipButtonPropsInterface {
  handleSkipClicked: () => void;
}

interface FormPropsInterface {
  children: ReactNode;
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
  id: string;
  heading: string;
  showSkip: boolean;
  formDisabled: boolean;
  showSocial: boolean;
  buttonTitle: string;
  buttonType: "submit" | "reset" | "button";
  handleSkipClicked?: () => void;
}

interface ButtonPropsInterface {
  type: "submit" | "reset" | "button";
  title: string;
  disabled: boolean;
}

interface OTPInputPropsInterface {
  setFormData: React.Dispatch<React.SetStateAction<OTPTokenStateInterface>>;
  title: string;
  id: string;
  form: string;
}

interface EmailOTPInputPropsInterface {
  setFormData: React.Dispatch<
    React.SetStateAction<EmailOTPTokenStateInterface>
  >;
  title: string;
  id: string;
  form: string;
}
