import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import InputContainer from "../../components/form/InputContainer";
import TwoColumnInput from "../../components/form/TwoColumnInput";
import { generateRandomPassword } from "../../utils/helper.util";

const SignUp: React.FC = () => {
  const initialState: SignUpStateInterface = {
    email: "", // This will come from Authenticate Component
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (
      formData.email?.trim() &&
      formData.username?.trim() &&
      formData.password?.trim() &&
      formData.confirmPassword?.trim()
    ) {
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

  const handleSkipClicked = () => {};

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
      heading="Sign Up"
      id="signup"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}
      buttonTitle="Sign Up"
      buttonType="submit"
      formDisabled={formDisabled}
      showSocial={true}>
      <TwoColumnInput>
        <InputContainer
          form="signup"
          id="signup-email"
          name="email"
          onChange={handleInputChange}
          placeholder="johndoe@gmail.com"
          required={true}
          title="Email Address"
          type="email"
          value={formData.email}
        />
        <InputContainer
          form="signup"
          id="signup-username"
          name="username"
          onChange={handleInputChange}
          placeholder="johndoe"
          required={true}
          title="Username"
          type="text"
          value={formData.username}
        />
      </TwoColumnInput>
      <TwoColumnInput>
        <InputContainer
          form="signup"
          id="signup-password"
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
          form="signup"
          id="signup-confirmpassword"
          name="confirmPassword"
          onChange={handleInputChange}
          placeholder="Johndoe@123"
          required={true}
          title="Confirm Password"
          type="password"
          value={formData.confirmPassword}
        />
      </TwoColumnInput>
      <section className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center mb-2 md:mb-0">
        {/* <CheckboxInput /> */}
        <p className="text-base-text text-sm font-medium">
          Back to Cooder?{" "}
          <span className="text-highlight-border hover:text-action-button cursor-pointer">
            Sign In
          </span>
        </p>
      </section>
    </Form>
  );
};

export default SignUp;
