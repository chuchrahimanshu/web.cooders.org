import React from "react";

const HeaderIcon: React.FC<HeaderIconProps> = ({
  Icon,
  size,
  handleIconClick,
}) => {
  return (
    <Icon
      className={`${size} p-2 bg-base-border opacity-75 hover:opacity-100 rounded-[5px] cursor-pointer hover:shadow-`}
      onClick={handleIconClick}
    />
  );
};

export default HeaderIcon;
