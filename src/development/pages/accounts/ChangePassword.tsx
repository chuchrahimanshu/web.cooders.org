import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import InputContainer from "../../components/form/InputContainer";
import { generateRandomPassword } from "../../utils/helper.util";

const ChangePassword: React.FC = () => {
  const initialState: ChangePasswordStateInterface = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (formData.password?.trim() && formData.confirmPassword?.trim()) {
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

  const handleRandomPassword = () => {
    const randomPassword: string = generateRandomPassword();
    setFormData((prevState) => ({
      ...prevState,
      ["password"]: randomPassword,
      ["confirmPassword"]: randomPassword,
    }));
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Change Password"
      id="changepassword"
      showSkip={false}
      buttonTitle="Update Password"
      buttonType="submit"
      formDisabled={formDisabled}
      showSocial={true}>
      <InputContainer
        form="changepassword"
        id="changepassword-password"
        name="password"
        onChange={handleInputChange}
        placeholder="Johndoe@123"
        required={true}
        title="Password"
        type="password"
        value={formData.password}
        handleRandomPassword={handleRandomPassword}
      />
      <InputContainer
        form="changepassword"
        id="changepassword-confirmpassword"
        name="confirmPassword"
        onChange={handleInputChange}
        placeholder="Johndoe@123"
        required={true}
        title="Confirm Password"
        type="password"
        value={formData.confirmPassword}
      />
    </Form>
  );
};

export default ChangePassword;
