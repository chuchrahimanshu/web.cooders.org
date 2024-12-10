import React from "react";
import SkipButton from "./SkipButton";
import Social from "./Social";
import Button from "./Button";

const Form: React.FC<FormPropsInterface> = ({
  children,
  handleFormSubmit,
  id,
  heading,
  showSkip,
  formDisabled,
  showSocial,
  buttonTitle,
  buttonType,
  handleSkipClicked,
}) => {
  return (
    <form
      className="bg-overlay-background py-5 px-6 rounded-2xl flex flex-col md:gap-4 shadow-sm w-full md:w-auto my-2 xs:mx-16 mx-8"
      id={id}
      onSubmit={handleFormSubmit}>
      {showSkip && handleSkipClicked ? (
        <section className="flex items-center justify-between mb-4">
          <h1 className="text-[22px] text-base-text font-semibold">
            {heading}
          </h1>
          <SkipButton handleSkipClicked={handleSkipClicked} />
        </section>
      ) : (
        <h1 className="text-[22px] text-base-text font-semibold mb-2">
          {heading}
        </h1>
      )}
      {children}
      <Button disabled={formDisabled} title={buttonTitle} type={buttonType} />
      {showSocial && <Social />}
    </form>
  );
};

export default Form;
