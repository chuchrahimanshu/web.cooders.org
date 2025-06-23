import React from "react";

const NavigationLabel: React.FC<NavigationLabelPropsInterface> = ({
  labelText,
  linkText,
  handleNavigation,
}) => {
  return (
    <div className="my-2 flex items-center justify-center gap-1">
      <p className="text-sm font-semibold opacity-50">{labelText} </p>
      <p
        className="text-sm font-semibold opacity-50 hover:text-palette-yellow hover:opacity-100 ease-in-out duration-200 cursor-pointer"
        onClick={handleNavigation}
      >
        {linkText}
      </p>
    </div>
  );
};

export default NavigationLabel;
