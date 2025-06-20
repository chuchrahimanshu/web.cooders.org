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

const CHANGE_PASSWORD_INITIAL_DATA: ChangePasswordFormDataInterface = {
  email: "",
  password: "",
  confirmPassword: "",
};

const VERIFY_OTP_INITIAL_DATA: VerifyOTPFormDataInterface = {
  email: "",
  otp: "",
};

export default {
  SIGNUP_INITIAL_DATA,
  SIGNIN_INITIAL_DATA,
  FORGET_PASSWORD_INITIAL_DATA,
  CHANGE_PASSWORD_INITIAL_DATA,
  VERIFY_OTP_INITIAL_DATA,
};
