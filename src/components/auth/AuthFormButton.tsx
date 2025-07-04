import React from "react";

const AuthFormButton: React.FC<AuthFormButtonPropsInterface> = ({
  title,
  buttonClickHandler,
}) => {
  return (
    <div
      className="rounded-[10px] flex items-center justify-center bg-secondary-overlay h-[45px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-200"
      onClick={buttonClickHandler}
    >
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default AuthFormButton;
