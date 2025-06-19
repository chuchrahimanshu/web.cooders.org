import React, { useState } from "react";
import { AUTH_DATA } from "../../data";
import {
  AuthContainer,
  DividerWithText,
  NavigationLabel,
  SocialAuth,
  TextLabelInput,
} from "../../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<SignUpFormDataInterface>(
    AUTH_DATA.SIGNUP_INITIAL_DATA
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
    <AuthContainer heading="Sign Up">
      <TextLabelInput
        id="signup-email"
        name="email"
        placeholder="johndoe@gmail.com"
        title="Email Address"
        value={formData.email}
        required={true}
        handleInputChange={handleInputChange}
      />
      <TextLabelInput
        id="signup-username"
        name="username"
        placeholder="johndoe"
        title="Username"
        value={formData.username}
        required={true}
        handleInputChange={handleInputChange}
      />
      <TextLabelInput
        id="signup-password"
        name="password"
        placeholder="johndoe"
        title="Password"
        value={formData.password}
        required={true}
        type="password"
        handleInputChange={handleInputChange}
      />
      <NavigationLabel
        labelText="Already part of community?"
        linkText="Sign In"
        handleNavigation={handleSignInNavigation}
      />
      <div className="flex items-center justify-between w-full gap-2">
        <div
          className="flex items-center justify-center bg-secondary-overlay h-[43px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-300"
          onClick={() => navigate("/studio")}
        >
          <p className="font-medium">Skip</p>
        </div>
        <div className="flex items-center justify-center bg-secondary-overlay h-[43px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-300">
          <p className="font-medium">Sign Up</p>
        </div>
      </div>
      <DividerWithText />
      <SocialAuth />
    </AuthContainer>
  );
};

export default SignUp;
