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
