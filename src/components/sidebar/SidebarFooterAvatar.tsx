import React from "react";
import { SidebarFooterStructure } from "./SidebarStructure";

const SidebarFooterAvatar: React.FC = () => {
  const handleSidebarFooterAvatarClick = () => {};

  return (
    <img
      src={SidebarFooterStructure.image}
      alt="User Avatar"
      className="h-10 rounded-full w-10 object-cover cursor-pointer"
      onClick={handleSidebarFooterAvatarClick}
    />
  );
};

export default SidebarFooterAvatar;
