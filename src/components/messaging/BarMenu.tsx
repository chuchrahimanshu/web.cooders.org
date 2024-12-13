import React, { useState } from "react";
import { BiSolidConversation } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import {
  FcBusinessContact,
  FcConferenceCall,
  FcSettings,
  FcVoicePresentation,
} from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";

const BarMenu: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const menu = [
    {
      id: 1,
      icon: BiSolidConversation,
      text: "Messages",
      iconSize: 25,
    },
    {
      id: 2,
      icon: FaUserGroup,
      text: "Users",
      iconSize: 25,
    },
    {
      id: 3,
      icon: FaBell,
      text: "Notifications",
      iconSize: 22,
    },
    {
      id: 4,
      icon: IoSettingsSharp,
      text: "Settings",
      iconSize: 24,
    },
  ];

  const handleMenuItemClick = (id: number) => {
    setSelectedMenuItem(id);
  };

  return (
    <section className="h-12 flex border-b border-base-border">
      {menu &&
        menu.map((item) => (
          <div
            key={item.id}
            className={`w-full flex items-center justify-center cursor-pointer transition-all ease-in-out duration-200 ${
              selectedMenuItem === item.id && "bg-base-border"
            }`}
            onClick={handleMenuItemClick.bind(this, item.id)}>
            <item.icon size={item.iconSize} className={selectedMenuItem === item.id ? "opacity-90" : "opacity-70"} />
          </div>
        ))}
    </section>
  );
};

export default BarMenu;
