import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputContainer: React.FC<InputContainerPropsInterface> = ({
  form,
  id,
  name,
  placeholder,
  required,
  title,
  type,
  value,
  disabled = false,
  onChange,
  handleRandomPassword,
}) => {
  return (
    <section className="flex flex-col gap-[6px] mb-4 md:mb-0">
      <Label form={form} id={id} title={title} required={required} />
      <Input
        form={form}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        disabled={disabled}
        handleRandomPassword={handleRandomPassword}
      />
    </section>
  );
};

export default InputContainer;
