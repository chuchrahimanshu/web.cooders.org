import React from "react";
import { SidebarHeaderStructure } from "./SidebarStructure";
import { NavigateFunction, useNavigate } from "react-router-dom";

const SidebarHeaderIcon: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleSidebarHeaderClick = () => {
    navigate(SidebarHeaderStructure.link);
  };

  return (
    <SidebarHeaderStructure.icon
      className="bg-blue-600 p-[6px] text-[40px] rounded-[4px] cursor-pointer"
      onClick={handleSidebarHeaderClick}
    />
  );
};

export default SidebarHeaderIcon;
