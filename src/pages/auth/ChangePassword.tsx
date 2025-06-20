import React, { useEffect, useState } from "react";
import { AuthContainer, TextLabelInput } from "../../components";
import {
  useLocation,
  useNavigate,
  type Location,
  type NavigateFunction,
} from "react-router-dom";
import { AUTH_DATA } from "../../data";

const ChangePassword: React.FC = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (!location.state?.email) {
      navigate("/forget-password");
    }
  }, []);

  const [formData, setFormData] = useState<ChangePasswordFormDataInterface>(
    AUTH_DATA.CHANGE_PASSWORD_INITIAL_DATA
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AuthContainer heading="Forget Password">
      <TextLabelInput
        id="change-password-email"
        name="email"
        placeholder="johndoe@gmail.com"
        title="Email Address"
        value={formData.email}
        required={true}
        handleInputChange={handleInputChange}
      />
      <TextLabelInput
        id="change-password-password"
        name="password"
        placeholder="johndoe"
        title="Password"
        value={formData.password}
        required={true}
        type="password"
        handleInputChange={handleInputChange}
      />
      <TextLabelInput
        id="change-password-confirm-password"
        name="confirmPassword"
        placeholder="johndoe"
        title="Confirm Password"
        value={formData.confirmPassword}
        required={true}
        type="password"
        handleInputChange={handleInputChange}
      />
      <div className="flex items-center justify-center bg-secondary-overlay h-[43px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-300">
        <p className="font-medium">Submit</p>
      </div>
    </AuthContainer>
  );
};

export default ChangePassword;
