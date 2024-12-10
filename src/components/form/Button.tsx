import React, { useState } from "react";

const Button: React.FC<ButtonPropsInterface> = ({ title, type, disabled }) => {
  const [hoverButton, setHoverButton] = useState(false);

  const handleButtonHover = () => {
    setHoverButton(true);
  };

  const handleButtonBlur = () => {
    setHoverButton(false);
  };
  return (
    <button
      type={type}
      className="bg-transparent mt-2 rounded-xl flex justify-center items-center py-2 border-[2px] hover:border-highlight-border disabled:border-base-border disabled:hover:bg-transparent disabled:cursor-not-allowed cursor-pointer disabled:opacity-50 border-base-border"
      disabled={disabled}
      onMouseOver={handleButtonHover}
      onMouseOut={handleButtonBlur}>
      <span
        className={`${
          hoverButton ? "text-highlight-border" : "text-base-text"
        } text-base font-medium`}>
        {title}
      </span>
    </button>
  );
};

export default Button;
