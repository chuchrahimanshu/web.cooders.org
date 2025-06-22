// components/SidebarItem.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, path }) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        `mb-1 flex items-center w-full h-[45px] font-medium rounded-[10px] cursor-pointer ease-in-out transition duration-300 px-2 ${
          isActive
            ? "text-palette-sky bg-secondary-overlay"
            : "text-white/50 hover:text-palette-sky hover:bg-secondary-overlay"
        }`
      }
    >
      <div className="w-[22%] flex justify-center">{icon}</div>
      <p className="ml-[6px] text-[16.5px]">{label}</p>
    </NavLink>
  );
};

export default SidebarItem;
