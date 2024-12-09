import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

const Sidebar: React.FC = () => {
  return (
    <section className="h-screen min-w-60 w-60 max-w-60 border-r-2 bg-overlay-background border-r-base-border flex flex-col justify-between">
      <div className="flex flex-col">
        <SidebarHeader />
        <SidebarBody />
      </div>
      <SidebarFooter />
    </section>
  );
};

export default Sidebar;
