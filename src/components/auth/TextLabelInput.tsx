import React from "react";

const TextLabelInput: React.FC<TextLabelInputPropsInterface> = ({
  id,
  name,
  placeholder,
  required = false,
  title,
  type = "text",
  value,
  width = "w-[100%]",
  handleInputChange,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${width}`}>
      <label htmlFor={id} className="opacity-50">
        {title}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="flex items-center w-full gap-[1px]">
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={handleInputChange}
          className="w-full outline-none border-2 border-secondary-overlay bg-secondary-overlay p-2 focus:border-palette-yellow duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default TextLabelInput;
