import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SidebarHeaderStructure } from "./SidebarStructure";
import SidebarHeaderIcon from "./SidebarHeaderIcon";

const SidebarHeader: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleSidebarHeaderClicked = () => {
    navigate(SidebarHeaderStructure.link);
  };

  return (
    <section
      className="flex items-center gap-[10px] px-4 py-3 mt-1 hover:bg-base-border cursor-pointer transition-effect"
      onClick={handleSidebarHeaderClicked}>
      <SidebarHeaderIcon />
      <div className=" -mt-[6px] flex-col gap-0">
        <p className=" text-[18px] font-semibold">
          {SidebarHeaderStructure.title}
        </p>
        <p className="-mt-1 opacity-70 text-xs font-medium ml-[2px]">
          {SidebarHeaderStructure.version}
        </p>
      </div>
    </section>
  );
};

export default SidebarHeader;
