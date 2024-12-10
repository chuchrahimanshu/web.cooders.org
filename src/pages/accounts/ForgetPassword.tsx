import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import InputContainer from "../../components/form/InputContainer";
import OTPInput from "../../components/form/OTPInput";

const ForgetPassword: React.FC = () => {
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
      heading="Forget Password"
      id="forgetpassword"
      showSkip={false}
      buttonTitle="Verify OTP"
      buttonType="submit"
      formDisabled={formDisabled}
      showSocial={true}>
      <InputContainer
        form="forgetpassword"
        id="forgetpassword-email"
        name="email"
        onChange={handleInputChange}
        placeholder="johndoe@gmail.com"
        required={true}
        title="Email"
        type="text"
        value={formData.email}
      />
      <OTPInput
        setFormData={setFormData}
        title="OTP"
        id="forgetpassword-otp"
        form="forgetpassword"
      />
    </Form>
  );
};

export default ForgetPassword;
