import React from "react";
import { SidebarFooterStructure } from "./SidebarStructure";
import SidebarFooterAvatar from "./SidebarFooterAvatar";

const SidebarFooter: React.FC = () => {
  return (
    <section>
      <div className="px-4 pb-3 pt-[11px] flex items-center gap-2 hover:bg-base-border cursor transition-effect cursor-pointer border-t-2 border-t-base-border">
        <SidebarFooterAvatar />
        <div className="flex flex-col">
          <p className="text-base font-medium -mb-[3px]">
            {SidebarFooterStructure.fullName}
          </p>
          <p className="text-[13px] opacity-70">
            {SidebarFooterStructure.username}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-base-border pt-[2px] pb-[6px]">
        <p className="text-xs font-medium opacity-50">
          connect . collaborate . code
        </p>
      </div>
    </section>
  );
};

export default SidebarFooter;
