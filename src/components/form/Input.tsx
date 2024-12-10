import React, { useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import HidePassword from "./HidePassword";

const Input: React.FC<InputPropsInterface> = ({
  form,
  type,
  id,
  name,
  value,
  placeholder,
  required,
  disabled = false,
  onChange,
  handleRandomPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleHidePassword = () => {
    setShowPassword(false);
  };

  const handleShowPassword = () => {
    setShowPassword(true);
  };

  return (
    <section className="relative">
      <input
        form={form}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        disabled={disabled}
        className="bg-transparent outline-none border-[2px] border-base-border py-2 px-4 rounded-xl text-base-text focus:border-highlight-border focus:bg-transparent active:bg-transparent active:border-highlight-border md:w-[300px] w-full disabled:cursor-not-allowed"
      />
      {type === "password" && (
        <>
          {form === "signup" && name === "password" && (
            <RiAiGenerate
              className="text-base-text absolute top-3 right-10 text-lg cursor-pointer hover:text-highlight-border"
              title="Generate Random Password"
              onClick={handleRandomPassword}
            />
          )}
          <HidePassword
            handleHidePassword={handleHidePassword}
            handleShowPassword={handleShowPassword}
            showPassword={showPassword}
          />
        </>
      )}
    </section>
  );
};

export default Input;
