import React from "react";
import Sidebar from "./Sidebar";
import SidebarIcons from "./SidebarIcons";

const SidebarTransition: React.FC<SidebarTransitionProps> = ({
  sidebarToggle,
}) => {
  return (
    <div
      className={`relative transition-all duration-300 ease-in-out ${
        sidebarToggle ? "min-w-60 w-60 max-w-60" : "min-w-16 w-16 max-w-16"
      }`}>
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
          sidebarToggle
            ? "opacity-100 min-w-60 w-60 max-w-60"
            : "opacity-0 pointer-events-none"
        }`}>
        <Sidebar />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
          sidebarToggle
            ? "opacity-0 pointer-events-none"
            : "opacity-100 min-w-16 w-16 max-w-16"
        }`}>
        <SidebarIcons />
      </div>
    </div>
  );
};

export default SidebarTransition;
