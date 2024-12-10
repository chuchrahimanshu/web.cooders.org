import React, { useRef } from "react";
import Label from "./Label";

const OTPInput: React.FC<EmailOTPInputPropsInterface> = ({
  setFormData,
  form,
  id,
  title,
}) => {
  const otpInputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.value.length === 1 && index < 5) {
      otpInputRef.current[index + 1]?.focus();
    }

    let OTP: string = "";
    for (let index = 0; index < 6; index++) {
      if (otpInputRef.current[index]?.value) {
        OTP += otpInputRef.current[index]?.value;
      }
    }

    if (OTP.length === 6) {
      setFormData((prevState) => ({
        ...prevState,
        ["otp"]: OTP,
      }));
    }
  };

  const handleBackwardPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      event.key === "Backspace" &&
      index > 0 &&
      event.currentTarget.value === ""
    ) {
      otpInputRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const data: string = event.clipboardData.getData("Text");
    const updatedOtp: string[] = [];

    for (let index = 0; index < data.length && index < 6; index++) {
      if (otpInputRef.current[index]) {
        updatedOtp[index] = data[index];
        otpInputRef.current[index]!.value = data[index];
        if (index < 5) {
          otpInputRef.current[index + 1]?.focus();
        }
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      otp: updatedOtp.join(""),
    }));
  };

  return (
    <>
      <Label form={form} id={id} required={true} title={title} />
      <section className="flex justify-between mt-1 mb-3 md:mb-0" id={id}>
        {Array.from({ length: 6 }, (_, index) => (
          <input
            key={index}
            type="text"
            ref={(element) => (otpInputRef.current[index] = element)}
            className="bg-transparent outline-none border-2 border-base-border w-11 h-11 rounded-xl focus:border-highlight-border text-base-text text-[18px] font-medium text-center"
            onChange={(event) => handleInputChange(event, index)}
            onKeyDown={(event) => handleBackwardPress(event, index)}
            onPaste={handlePaste}
            maxLength={1}
          />
        ))}
      </section>
    </>
  );
};

export default OTPInput;
