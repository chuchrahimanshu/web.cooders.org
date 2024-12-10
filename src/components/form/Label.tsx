import React from "react";

const Label: React.FC<LabelPropsInterface> = ({
  id,
  title,
  form,
  required,
}) => {
  return (
    <label
      htmlFor={id}
      form={form}
      className="text-base-text text-[14px] font-medium opacity-70">
      {title} {required && <span className="text-red-600">*</span>}
    </label>
  );
};

export default Label;
