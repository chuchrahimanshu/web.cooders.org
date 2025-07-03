import React, { useState } from "react";
import {
  AuthContainer,
  AuthFormButton,
  NavigationLabel,
  TextLabelInput,
} from "../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { AUTH_DATA } from "../data";

const ForgetPassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<ForgetPasswordFormDataInterface>(
    AUTH_DATA.FORGET_PASSWORD_INITIAL_DATA
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignInNavigation = () => {
    navigate("/signin");
  };

  const handleFormSubmit = () => {
    if (formData.email) {
      navigate("/verify-otp", {
        state: { email: formData.email },
      });
    }
  };

  return (
    <AuthContainer heading="Forget Password">
      <TextLabelInput
        id="forget-password-email"
        name="email"
        placeholder="johndoe@gmail.com"
        title="Email Address"
        value={formData.email}
        required={true}
        handleInputChange={handleInputChange}
      />
      <NavigationLabel
        labelText="Remember password?"
        linkText="Sign In"
        handleNavigation={handleSignInNavigation}
      />
      <AuthFormButton title="Send OTP" buttonClickHandler={handleFormSubmit} />
    </AuthContainer>
  );
};

export default ForgetPassword;
