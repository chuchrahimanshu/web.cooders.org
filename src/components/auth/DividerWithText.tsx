import React from "react";

const DividerWithText: React.FC<DividerWithTextPropsInterface> = ({
  label = "OR",
}) => {
  return (
    <div className="flex items-center justify-center my-[6px] gap-2 text-gray-400">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/50 to-white/50 rounded-full" />
      <p className="text-xs sm:text-sm font-medium tracking-wide">{label}</p>
      <div className="flex-1 h-px bg-gradient-to-r from-white/50 via-white/50 to-transparent rounded-full" />
    </div>
  );
};

export default DividerWithText;
