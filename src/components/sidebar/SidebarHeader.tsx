import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SidebarHeaderStructure } from "./SidebarStructure";
import SidebarHeaderIcon from "./SidebarHeaderIcon";

const SidebarHeader: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleSidebarHeaderClicked = () => {
    navigate(SidebarHeaderStructure.link);
  };

  let timeout: number;

  const handleMouseEnter: React.MouseEventHandler<HTMLElement> = (e) => {
    const target = e.target as HTMLElement;
    const icon = target.querySelector("svg") as SVGElement;

    if (icon) {
      icon.style.transform = "scale(1.1)";
      icon.style.filter = "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.2))";
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (icon) {
        icon.style.transform = "scale(1)";
        icon.style.filter = "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))";
      }
    }, 300);
  };

  return (
    <section
      className="flex items-center gap-[10px] px-4 py-[11.5px] border-b-2 border-b-base-border hover:bg-base-border cursor-pointer transition-effect"
      onClick={handleSidebarHeaderClicked}
      onMouseEnter={handleMouseEnter}>
      <SidebarHeaderIcon />
      <div className=" -mt-[6px] flex-col gap-0">
        <p className=" text-[20px] font-semibold">
          {SidebarHeaderStructure.title}
        </p>
        <p className="-mt-[2px] opacity-70 text-xs font-medium ml-[2px]">
          {SidebarHeaderStructure.version}
        </p>
      </div>
    </section>
  );
};

export default SidebarHeader;
