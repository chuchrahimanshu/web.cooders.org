import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import InputContainer from "../../components/form/InputContainer";
import OTPInput from "../../components/form/OTPInput";

const TwoFactorAuthentication: React.FC = () => {
  const initialState: EmailOTPTokenStateInterface = {
    email: "",
    otp: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (formData.email?.trim() && formData.otp?.trim()) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [formData]);

  const handleInputChange = (event: FormChangeInterface) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="2FA"
      id="tfa"
      showSkip={false}
      buttonTitle="Verify OTP"
      buttonType="submit"
      formDisabled={formDisabled}
      showSocial={true}>
      <InputContainer
        form="tfa"
        id="tfa-email"
        name="email"
        onChange={handleInputChange}
        placeholder="johndoe"
        required={true}
        title="Email Address"
        type="text"
        value={formData.email}
      />
      <OTPInput setFormData={setFormData} title="OTP" id="tfa-otp" form="tfa" />
    </Form>
  );
};

export default TwoFactorAuthentication;
