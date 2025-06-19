import React, { useState } from "react";
import {
  AuthContainer,
  NavigationLabel,
  TextLabelInput,
} from "../../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { AUTH_DATA } from "../../data";

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
        attachedButton={true}
        attachedButtonText="Send OTP"
      />
      <TextLabelInput
        id="forget-password-otp"
        name="otp"
        placeholder="******"
        title="OTP"
        value={formData.otp}
        required={true}
        handleInputChange={handleInputChange}
      />
      <NavigationLabel
        labelText="Remember password?"
        linkText="Sign In"
        handleNavigation={handleSignInNavigation}
      />
      <div className="flex items-center justify-center bg-secondary-overlay h-[43px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-300">
        <p className="font-medium">Verify OTP</p>
      </div>
    </AuthContainer>
  );
};

export default ForgetPassword;
