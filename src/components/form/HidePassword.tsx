import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const HidePassword: React.FC<HidePasswordPropsInterface> = ({
  handleHidePassword,
  handleShowPassword,
  showPassword,
}) => {
  return (
    <>
      {showPassword ? (
        <FaEyeSlash
          className="text-base-text absolute top-3 right-3 text-lg cursor-pointer hover:text-action-button"
          onClick={handleHidePassword}
        />
      ) : (
        <FaEye
          className="text-base-text absolute top-3 right-3 text-lg cursor-pointer hover:text-action-button"
          onClick={handleShowPassword}
        />
      )}
    </>
  );
};

export default HidePassword;
