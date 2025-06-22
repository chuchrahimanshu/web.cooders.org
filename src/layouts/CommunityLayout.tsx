import React from "react";
import {
  MdGroup,
  MdHome,
  MdPerson,
  MdSend,
  MdSettings,
  MdTrendingUp,
  MdChat,
} from "react-icons/md";
import { Outlet } from "react-router-dom";
import { SidebarItem } from "../components";

const sidebarItems = [
  { icon: <MdHome size={25} />, label: "Home", path: "/community" },
  { icon: <MdSend size={25} />, label: "Chat", path: "/community/chats" },
  { icon: <MdGroup size={25} />, label: "Groups", path: "/community/groups" },
  {
    icon: <MdTrendingUp size={25} />,
    label: "Trending",
    path: "/community/trending",
  },
  {
    icon: <MdChat size={25} />,
    label: "if(true)",
    path: "/community/discussions",
  },
  {
    icon: <MdPerson size={25} />,
    label: "Profile",
    path: "/community/profile",
  },
  {
    icon: <MdSettings size={25} />,
    label: "Settings",
    path: "/community/settings",
  },
];

const CommunityLayout: React.FC = () => {
  return (
    <section className="flex w-full justify-between">
      <aside className="w-[240px] bg-primary-overlay my-3 rounded-[10px] p-2">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </aside>
      <section className="my-3 p-2 flex-1">
        <Outlet />
      </section>
    </section>
  );
};

export default CommunityLayout;
