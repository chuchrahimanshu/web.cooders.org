import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import InputContainer from "../../components/form/InputContainer";
import OTPInput from "../../components/form/OTPInput";
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";

const EmailVerification: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/");
    }
  }, []);

  const initialState: EmailOTPTokenStateInterface = {
    email: location?.state?.email,
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

  const handleFormSubmit = async (event: FormSubmitInterface) => {
    event.preventDefault();
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Email Verification"
      id="emailverification"
      showSkip={false}
      buttonTitle="Verify Email"
      buttonType="submit"
      formDisabled={formDisabled}
      showSocial={true}>
      <InputContainer
        form="emailverification"
        id="emailverification-email"
        name="email"
        onChange={handleInputChange}
        placeholder="johndoe@gmail.com"
        required={true}
        title="Email"
        type="text"
        value={formData.email}
        disabled={true}
      />
      <OTPInput
        setFormData={setFormData}
        title="OTP"
        id="emailverification-otp"
        form="emailverification"
      />
    </Form>
  );
};

export default EmailVerification;
