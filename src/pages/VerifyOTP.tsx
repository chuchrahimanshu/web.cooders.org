import React, { useState } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { AUTH_DATA } from "../data";
import { AuthContainer, AuthFormButton, TextLabelInput } from "../components";

const VerifyOTP: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<VerifyOTPFormDataInterface>(
    AUTH_DATA.VERIFY_OTP_INITIAL_DATA
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    navigate("/change-password", {
      state: { email: formData.email },
    });
  };
  return (
    <AuthContainer heading="Verify OTP">
      <TextLabelInput
        id="verify-otp-otp"
        name="otp"
        placeholder="******"
        title="OTP"
        value={formData.otp}
        required={true}
        handleInputChange={handleInputChange}
      />
      <div className="flex items-center justify-between px-1">
        <p className="text-sm opacity-50">00:00</p>
        <p className="text-sm opacity-50 hover:opacity-100 hover:text-palette-yellow cursor-pointer">
          Resend OTP
        </p>
      </div>
      <AuthFormButton title="Submit" buttonClickHandler={handleFormSubmit} />
    </AuthContainer>
  );
};

export default VerifyOTP;
