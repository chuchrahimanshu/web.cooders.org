interface SignInStateInterface {
  username: string;
  password: string;
}

interface SignUpStateInterface {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface ChangePasswordStateInterface {
  username: string;
  password: string;
  confirmPassword: string;
}

interface OTPTokenStateInterface {
  username: string;
  otp: string;
}

interface EmailOTPTokenStateInterface {
  email: string;
  otp: string;
}
