import React from "react";
import {
  MdGroup,
  MdHome,
  MdPerson,
  MdSend,
  MdSettings,
  MdTrendingUp,
  MdChat,
  MdCode,
  MdQuestionAnswer,
  MdWeb,
  MdNoteAdd,
  MdPersonAdd,
} from "react-icons/md";
import { Outlet } from "react-router-dom";
import { SidebarFooter, SidebarItem } from "../components";

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
    icon: <MdCode size={25} />,
    label: "Snippets",
    path: "/community/snippets",
  },
  {
    icon: <MdQuestionAnswer size={25} />,
    label: "Why()",
    path: "/community/qna",
  },
  {
    icon: <MdWeb size={25} />,
    label: "Showcase",
    path: "/community/showcase",
  },
  {
    icon: <MdNoteAdd size={25} />,
    label: "Resources",
    path: "/community/resources",
  },
  {
    icon: <MdPersonAdd size={25} />,
    label: "Join(1-1)",
    path: "/community/one-to-one",
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
      <section className="w-[240px]">
        <aside className="w-full bg-primary-overlay mt-3 rounded-[10px] px-2 pt-2 pb-[4px] h-fit">
          {sidebarItems &&
            sidebarItems.length > 0 &&
            sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
        </aside>
        <SidebarFooter />
      </section>
      <section className="my-3 flex-1">
        <Outlet />
      </section>
    </section>
  );
};

export default CommunityLayout;
