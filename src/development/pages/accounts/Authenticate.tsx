import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import InputContainer from "../../components/form/InputContainer";

const Authenticate: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [formDisabled, setFormDisabled] = useState(true);
  const [failedValidation, setFailedValidation] = useState<boolean>(false);

  useEffect(() => {
    if (emailAddress?.trim()) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [emailAddress]);

  const handleInputChange = (event: FormChangeInterface) => {
    if (failedValidation) {
      setFailedValidation(false);
    }
    setEmailAddress(String(event.target.value));
  };

  const handleFormSubmit = async (event: FormSubmitInterface) => {
    event.preventDefault();
  };

  const handleSkipClicked = () => {};
  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Ignite!🔥"
      id="authenticate"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}
      buttonTitle="Let's Go"
      buttonType="submit"
      formDisabled={formDisabled}
      showSocial={true}>
      <InputContainer
        form="authenticate"
        id="authenticate-email"
        name="email"
        onChange={handleInputChange}
        placeholder="johndoe@gmail.com"
        required={true}
        title="Email Address"
        type="email"
        value={emailAddress}
      />
    </Form>
  );
};

export default Authenticate;
