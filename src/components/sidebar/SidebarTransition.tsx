import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarIcons from "./SidebarIcons";

const SidebarTransition: React.FC<SidebarTransitionProps> = ({
  sidebarToggle,
}) => {
  const [sidebarGroupToggle, setSidebarGroupToggle] = useState<string>("0");

  const handleSidebarGroupClick = (id: string) => {
    setSidebarGroupToggle((prevId) => {
      if (prevId === id) {
        return "0";
      } else {
        return id;
      }
    });
  };

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
        <Sidebar
          sidebarGroupToggle={sidebarGroupToggle}
          handleSidebarGroupClick={handleSidebarGroupClick}
        />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
          sidebarToggle
            ? "opacity-0 pointer-events-none"
            : "opacity-100 min-w-16 w-16 max-w-16"
        }`}>
        <SidebarIcons
          sidebarGroupToggle={sidebarGroupToggle}
          handleSidebarGroupClick={handleSidebarGroupClick}
        />
      </div>
    </div>
  );
};

export default SidebarTransition;
