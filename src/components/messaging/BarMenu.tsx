import React, { useState } from "react";
import {
  FcBusinessContact,
  FcConferenceCall,
  FcSettings,
  FcVoicePresentation,
} from "react-icons/fc";

const BarMenu: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const menu = [
    {
      id: 1,
      icon: FcVoicePresentation,
      text: "Messages",
      iconSize: 27,
    },
    {
      id: 2,
      icon: FcBusinessContact,
      text: "Users",
      iconSize: 26,
    },
    {
      id: 3,
      icon: FcConferenceCall,
      text: "Groups",
      iconSize: 27,
    },
    {
      id: 4,
      icon: FcSettings,
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
            <item.icon size={item.iconSize} className="-mt-[6px]" />
          </div>
        ))}
    </section>
  );
};

export default BarMenu;
