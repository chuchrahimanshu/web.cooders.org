// components/SidebarItem.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem: React.FC<SidebarItemPropsInterface> = ({
  icon,
  label,
  path,
}) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        `mb-1 flex items-center w-full h-[44px] font-medium rounded-[10px] cursor-pointer ease-in-out transition duration-200 px-2 ${
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
