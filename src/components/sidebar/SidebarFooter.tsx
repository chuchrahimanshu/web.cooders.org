import React from "react";
import { SidebarFooterStructure } from "./SidebarStructure";

const SidebarFooter: React.FC = () => {
  return (
    <section className="px-4 py-3 flex items-center gap-2 mb-[5px] hover:bg-base-border cursor transition-effect cursor-pointer">
      <img
        src={SidebarFooterStructure.image}
        alt="User Avatar"
        className="h-10 rounded-full w-10 object-cover"
      />
      <div className="flex flex-col">
        <p className="text-base font-medium -mb-[3px]">
          {SidebarFooterStructure.fullName}
        </p>
        <p className="text-[13px] opacity-70">
          {SidebarFooterStructure.username}
        </p>
      </div>
    </section>
  );
};

export default SidebarFooter;
