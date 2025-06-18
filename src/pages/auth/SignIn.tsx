import React, { useState } from "react";
import { AUTH_DATA } from "../../data";
import {
  AuthContainer,
  NavigationLabel,
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
      <NavigationLabel
        labelText="New to the community?"
        linkText="Sign Up"
        handleNavigation={handleSignUpNavigation}
      />
    </AuthContainer>
  );
};

export default SignIn;
