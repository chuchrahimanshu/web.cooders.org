interface SignUpFormDataInterface {
  email: string;
  username: string;
  password: string;
}

interface SignInFormDataInterface {
  username: string;
  password: string;
}

interface ForgetPasswordFormDataInterface {
  email: string;
  otp: string;
}

interface ChangePasswordFormDataInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

interface VerifyOTPFormDataInterface {
  email: string;
  otp: string;
}
