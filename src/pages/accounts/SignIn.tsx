import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import InputContainer from "../../components/form/InputContainer";

const SignIn: React.FC = () => {
  const initialState: SignInStateInterface = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (formData.username?.trim() && formData.password?.trim()) {
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

  const handleForgetPasswordNavigation = () => {};

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Sign In"
      id="signin"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}
      buttonTitle="Sign In"
      buttonType="submit"
      formDisabled={formDisabled}
      showSocial={true}>
      <InputContainer
        form="signin"
        id="signin-username"
        name="username"
        onChange={handleInputChange}
        placeholder="johndoe"
        required={true}
        title="Username"
        type="text"
        value={formData.username}
      />
      <InputContainer
        form="signin"
        id="signin-password"
        name="password"
        onChange={handleInputChange}
        placeholder="Johndoe@123"
        required={true}
        title="Password"
        type="password"
        value={formData.password}
      />
      <p
        className="text-highlight-border text-center mb-1 md:-mb-[10px] -mt-1 cursor-pointer hover:text-action-button text-sm"
        onClick={handleForgetPasswordNavigation}>
        Forget Password
      </p>
    </Form>
  );
};

export default SignIn;
