import React from "react";

const SkipButton: React.FC<SkipButtonPropsInterface> = ({
  handleSkipClicked,
}) => {
  return (
    <button
      className="bg-transparent border-[2px] border-action-button text-action-button hover:bg-action-button hover:text-base-text rounded-full font-semibold text-sm h-[28px] w-[50px] flex items-center justify-center"
      onClick={handleSkipClicked}
      type="button">
      <span className="mb-[1px]">Skip</span>
    </button>
  );
};

export default SkipButton;
