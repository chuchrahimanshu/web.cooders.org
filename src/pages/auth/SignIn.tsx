import React, { useState } from "react";
import { AUTH_DATA } from "../../data";
import {
  AuthContainer,
  AuthFormButton,
  DividerWithText,
  NavigationLabel,
  SocialAuth,
  TextLabelInput,
} from "../../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<SignInFormDataInterface>(
    AUTH_DATA.SIGNIN_INITIAL_DATA
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUpNavigation = () => {
    navigate("/signup");
  };

  return (
    <AuthContainer heading="Sign In">
      <TextLabelInput
        id="signin-username"
        name="username"
        placeholder="johndoe@gmail.com"
        title="Username"
        value={formData.username}
        required={true}
        handleInputChange={handleInputChange}
      />
      <TextLabelInput
        id="signin-password"
        name="password"
        placeholder="johndoe"
        title="Password"
        value={formData.password}
        required={true}
        type="password"
        handleInputChange={handleInputChange}
      />
      <div className="flex items-center justify-between px-1">
        <p
          className="text-sm opacity-50 hover:opacity-100 hover:text-palette-yellow cursor-pointer font-semibold"
          onClick={() => navigate("/forget-password")}
        >
          Forget Password
        </p>
        <NavigationLabel
          labelText="Newbie?"
          linkText="Sign Up"
          handleNavigation={handleSignUpNavigation}
        />
      </div>
      <div className="flex items-center justify-between w-full gap-2">
        <AuthFormButton
          title="Skip"
          buttonClickHandler={() => navigate("/dashboard")}
        />
        <AuthFormButton title="Sign In" />
      </div>
      <DividerWithText />
      <SocialAuth />
    </AuthContainer>
  );
};

export default SignIn;
