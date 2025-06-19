const SIGNUP_INITIAL_DATA: SignUpFormDataInterface = {
  email: "",
  username: "",
  password: "",
};

const SIGNIN_INITIAL_DATA: SignInFormDataInterface = {
  username: "",
  password: "",
};

const FORGET_PASSWORD_INITIAL_DATA: ForgetPasswordFormDataInterface = {
  email: "",
  otp: "",
};

export default {
  SIGNUP_INITIAL_DATA,
  SIGNIN_INITIAL_DATA,
  FORGET_PASSWORD_INITIAL_DATA,
};
