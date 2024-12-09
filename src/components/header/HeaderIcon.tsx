import React from "react";
import { IconType } from "react-icons";

interface HeaderIconProps {
  Icon: IconType;
  size: string;
  handleIconClick?: () => void;
}

const HeaderIcon: React.FC<HeaderIconProps> = ({
  Icon,
  size,
  handleIconClick,
}) => {
  return (
    <Icon
      className={`${size} p-2 hover:bg-base-border rounded-[5px] cursor-pointer`}
      onClick={handleIconClick}
    />
  );
};

export default HeaderIcon;
